"use client";
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Formik } from "formik";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import getConfig from '@/config/config';



export default function ChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);

  const submitForm = (values) => {
    setIsLoading(true);
    const updatedValues = { ...values, userId: userId };

  
    axios.post(`${config?.APP_BASE_URL}/api/Auth/ResetPassword`, updatedValues, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          toast.success('password Changed Successfully');
        } else {
           toast.error('Change password Failed, try again');
        }
      })
      .catch(error => {
  
        toast.error('Change password Failed, try again');
      })
      .finally(() => {
        setIsLoading(false);
      });

  };
  const initialValues = {
    password: "",
    confirmPassword: "",

  };

  const validate = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      let errors = {};
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message;
      });
      return errors;
    }
  };

  const validationSchema = yup.object().shape({
    password: yup.string().required('Password is required Ex: Ab@123456').min(8, 'Password must be at least eight characters. Ex: Ab@123456').matches(/[A-Z]/, 'Password must contain at least one uppercase letter Ex: Ab@123456'),
    confirmPassword: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least eight characters.')
      .oneOf([yup.ref('password'), null], 'Passwords do not match'),
  });

  useEffect(() => {
    const userDataFromCookie = Cookies?.get('userData');
    if (userDataFromCookie) {
      const userObject = JSON?.parse(userDataFromCookie);
     
      setToken(userObject.token);
      setUserId(userObject.userId);
    }
  }, []);

  return (
    <>
        {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <h3 className="admin-heading bg-offwhite">
        <div className='d-flex'>
          <p>Change Password</p>
        </div>
   
      </h3>
      <div className='fit_shadow p-4'>
      <h3 className='mb-4'>Change Password</h3>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          {(formik) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isValid,
              dirty
            } = formik;
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className='w-50 d-block mb-3'>
                    <input type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${errors.password && touched.password && "input-error"}`} />
                    {errors.password && touched.password ? (
                      <p className="error">{errors.password}</p>
                    ) :
                      <p className="passEx">Ex: Ab@123456</p>
                    }
                  </div>
                  <div className='w-50'>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${errors.confirmPassword && touched.confirmPassword && "input-error"}`} />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <p className="error">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <div className="btn_block mt-4">
                  <button
                    type="submit"
                    className={`btn puprple_btn ms-0 ${!(dirty && isValid) && "disabledBtn"}`}
                    disabled={!(dirty && isValid) || isLoading}>
                    Submit
                  </button>
                  <div className="btn_bottom"></div>
                </div>
              </form>
            );
          }}
        </Formik>

      </div>
    </>
  );
}
