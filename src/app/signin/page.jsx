"use client";
import getConfig from '@/config/config';
import axios from 'axios';
import { Formik } from "formik";
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdErrorOutline } from "react-icons/md";
import 'react-phone-number-input/style.css';
import { useDispatch } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import * as yup from 'yup';

export default function signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch()

  const router = useRouter()

  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);

  useEffect(() => {
    const userCookie = Cookies.get('userData');
    if (userCookie) {
      router.push('/', { scroll: true });
    }
  }, [router]);

  const submitForm = (values) => {
    setIsLoading(true);
    setErrorMsg('');
    axios.post(`${config.APP_BASE_URL}/api/Auth/Login`, values)
      .then(response => {
      
        if (response.status === 200) {

          Cookies.set('userData', JSON.stringify(response.data));
          router.push('/account', { scroll: true });
        } else {
          
          setErrorMsg(response?.data)
        }
      })
      .catch(error => {
      
        setErrorMsg(error?.response?.data)
      })
      .finally(() => {
        setIsLoading(false);
      });

  };
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
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
    email: yup.string().required('Email is required').email('Invalid Email'),
    password: yup.string().required('Password is required').min(4, 'Password must be at least four characters.').matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  });

  return (
    <section className="signup_section h100full">
        {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <div className="container my-auto">
        <div className="form_block">
          <div className="form_side">
            <div className="section_title mb-0">
              <span className="title_badge">Welcome Back</span>
              <h2><span>Sign in</span> to your account</h2>
              <p>Quickly access your account.</p>
            </div>
            <div className={`errorMsg ${errorMsg && "bg-red"}`}>
              {errorMsg &&
                <> <MdErrorOutline size={16} color='#fff' className="me-1" /> <p> {errorMsg}</p></>
              }
            </div>
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
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.email && touched.email && "input-error"}`} />
                      {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                      )}
                    </div>

                    <div className="form-group mb-3">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-control ${errors.password && touched.password && "input-error"}`} />
                      {errors.password && touched.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div>
                    <div className="forgate_check mb-5">
                      <div className="coustome_checkbox flex-column align-unset">
                        <label htmlFor="rememberMe">
                          <input type="checkbox"
                            id="rememberMe"
                            name='rememberMe'
                            value={values.rememberMe}
                            checked={values.rememberMe}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span className="checkmark"
                          ></span>
                          Keep me signed in on this device for 30 days. Uncheck if using a public device/network.
                        </label>
                        <div className='text-right'>
                          <Link href="/forget_password">Forgot password?</Link>
                        </div>

                      </div>
                    </div>

                    <div className="btn_block">
                      <button
                        type="submit"
                        className={`btn puprple_btn ms-0 ${!(dirty && isValid) && "disabledBtn"}`}
                        disabled={!(dirty && isValid) || isLoading}>
                        Sign In
                      </button>
                      <div className="btn_bottom"></div>
                    </div>
                    {/* <button className="btn google_btn"><img src="images/google_G.svg" alt="image" /> Sign Up with
                Google</button> */}
                    <div className="sign_in_here mt-3">
                      <p>Don’t have an account? <a href="/signup">Sign Up here</a></p>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className="side_screen">
            <div className="left_icon">
              <img src="images/smallStar.png" alt="image" />
            </div>
            <div className="right_icon">
              <img src="images/bigstar.png" alt="image" />
            </div>
            <div className="scrren">
              <img src="images/customer.jpeg" alt="image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
