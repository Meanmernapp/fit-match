"use client";
import { useState } from "react";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";
import * as yup from "yup";

import { UpdateUser } from "@/services/auth/authSlice";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";

export default function AccountDetail() {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const getUserById = useSelector((state) => state?.authSlice?.getUserById);
  const isLoading = useSelector((state) => state?.commonSlice?.isLoading);
  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  const submitForm = (values) => {
    
    const params = {
      ...values,
      userType: isChecked ? "Trainer" : "Customer",
    };
   
    dispatch(UpdateUser(params))
  };
  const initialValues = getUserById?.userId
    ? getUserById
    : {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        timeZone: "",
        agree: false,
        marketingOptIn: false,
      };

  const validate = async (values) => {
    try {
      await validationSchema?.validate(values, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      let errors = {};
      validationErrors?.inner?.forEach((error) => {
        errors[error?.path] = error?.message;
      });
      return errors;
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid Email"),
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "First name must be at least three characters."),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(3, "Last name must be at least three characters."),
    // password: yup
    //   .string()
    //   .required("Password is required Ex: Ab@123456")
    //   .min(8, "Password must be at least eight characters. Ex: Ab@123456")
    //   .matches(
    //     /[A-Z]/,
    //     "Password must contain at least one uppercase letter Ex: Ab@123456"
    //   ),
    // confirmPassword: yup
    //   .string()
    //   .required("Password is required")
    //   .min(8, "Password must be at least eight characters.")
    //   .oneOf([yup.ref("password"), null], "Passwords do not match"),
    timeZone: yup.string().required("Time Zone is required"),
    // phoneNumber: yup
    //   .string()
    //   .required("Phone is required")
    //   .min(11, "Phone number must be at least eleven characters."),
    phoneNumber: yup
      .string()
      .required("Phone is required")
      .test(
        "len",
        "Phone number must be exactly 11 digits",
        (val) => val && val.replace(/\D/g, "").length === 11
      ) .test(
        "country-code",
        "US Country Code only +1",
        (val) => val && val.startsWith("1")
      ),
    agree: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  return (
    <>
      {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <h3 className="admin-heading bg-offwhite">
        <div className="d-flex">
          <p>Account Information</p>
        </div>
        {/* <Button className="sml_btn ms-0">Submit Request</Button> */}
      </h3>
      <div className="fit_shadow p-4">
        <h3 className="mb-4">Edit Account Information</h3>
        {/* <div className={`errorMsg ${errorMsg && "bg-red"}`}>
          {errorMsg && (
            <>
              {" "}
              <MdErrorOutline size={16} color="#fff" className="me-1" />{" "}
              <p> {errorMsg}</p>
            </>
          )}
        </div> */}
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
              dirty,
            } = formik;
            return (
              <form onSubmit={handleSubmit}>
                <div className="row form-group mb-3">
                  <div className="col-md-6">
                    <label htmlFor="inputGroupSelct0o1">First name</label>
                    <input
                      type="name"
                      name="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.firstName && touched.firstName && "input-error"
                      }`}
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputGroupSelect0o1">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-control ${
                        errors.lastName && touched.lastName && "input-error"
                      }`}
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="error">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="inputGroupSelect0o1">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    disabled
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.email && touched.email && "input-error"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                  )}
                </div>

                <div className="row form-group mb-4">
                  {/* <div className="col-md-6">
                    <label htmlFor="inputGroupSelect0o1">Phone Number</label>
                    <PhoneInput
                      country="us"
                      placeholder="Enter Phone number"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={(value) =>
                        handleChange({ target: { name: "phoneNumber", value } })
                      }
                      onBlur={handleBlur}
                      className={` ${
                        errors.phoneNumber &&
                        touched.phoneNumber &&
                        "input-error"
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="error">{errors.phoneNumber}</p>
                    )}
                  </div> */}
                  <div className="col-md-6">
                    <label htmlFor="inputGroupSelect0o1">Phone Number</label>
                    <PhoneInput
                      country={"us"}
                      placeholder="Enter Phone number"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={(value) =>
                        handleChange({ target: { name: "phoneNumber", value } })
                      }
                      // onBlur={handleBlur}
                      onBlur={() =>
                        handleBlur({ target: { name: "phoneNumber" } })
                      }
                      onlyCountries={["us"]}
                      // countryCodeEditable={false}
                      className={` ${
                        errors.phoneNumber &&
                        touched.phoneNumber &&
                        "input-error"
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="error">{errors.phoneNumber}</p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputGroupSelect01">Time zone</label>
                    <div className="d-block">
                      <Form.Select
                        aria-label="Default select example"
                        name="timeZone"
                        value={values.timeZone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${
                          errors.timeZone && touched.timeZone && "input-error"
                        }`}
                      >
                        <option value="">Choose...</option>
                        <option value="America/Halifax">Atlantic</option>
                        <option value="America/New_York">Eastern</option>
                        <option value="America/Chicago">Central</option>
                        <option value="America/Phoenix">Mountain</option>
                        <option value="America/Los_Angeles">Pacific</option>
                        <option value="America/Anchorage">Alaska</option>
                        <option value="America/Adak">Hawaii–Aleutian</option>
                      </Form.Select>
                    </div>
                    {errors.timeZone && touched.timeZone && (
                      <p className="error">{errors.timeZone}</p>
                    )}
                  </div>
                </div>

                <div className="forgate_check mb-5">
                  <div className="coustome_checkbox">
                    <label htmlFor="marketingOptIn">
                      <input
                        type="checkbox"
                        id="marketingOptIn"
                        name="marketingOptIn"
                        value={values.marketingOptIn}
                        checked={values.marketingOptIn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span className="checkmark"></span>
                      Send me occasional marketing emails.
                    </label>
                  </div>
                </div>
                <div className="btn_block">
                  <button
                    type="submit"
                    className={`btn puprple_btn ms-0 
                    ${!(dirty && isValid) && "disabledBtn"}
                    `}
                    disabled={!(dirty && isValid) || isLoading}
                  >
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
