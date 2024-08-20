"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdErrorOutline } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import getConfig from "@/config/config";

export default function SecondStep({ userType }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState([]);

  const router = useRouter();

  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);


  const submitForm = (values) => {
    setIsLoading(true);
    const updatedValues = { ...values, userType: userType };
    axios
      .post(
        `${config.APP_BASE_URL}/api/Auth/Register`,
        updatedValues
      )
      .then((response) => {
        if (response.status === 200) {
          router.push("/redirection", { scroll: true });
        } else {
          if (typeof response.data === "string") {
            toast.error(response.data);
          } else if (Array.isArray(response.data)) {
            response.data.forEach((err) => {
              toast.error(err);
            });
          }
        }
      })
      .catch((error) => {
        if (typeof error.response.data === "string") {
          toast.error(error.response.data);
        } else if (Array.isArray(error.response.data)) {
          error.response.data.forEach((err) => {
            toast.error(err);
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    PhoneNumber: "",
    timeZone: "",
    agree: false,
    marketingOptIn: false,
  };

  const validate = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      let errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
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
    password: yup
      .string()
      .required("Password is required Ex: Ab@123456")
      .min(8, "Password must be at eight three characters. Ex: Ab@123456")
      .matches(
        /[A-Z]/,
        "Password must contain at least one uppercase letter Ex: Ab@123456"
      ),
    confirmPassword: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least eight characters.")
      .oneOf([yup.ref("password"), null], "Passwords do not match"),
    timeZone: yup.string().required("Time Zone is required"),
    // PhoneNumber: yup
    //   .string()
    //   .required("Phone is required")
    //   .min(8, "Phone number must be at least eight characters."),
    phoneNumber: yup
      .string()
      .required("Phone is required")
      .test(
        "len",
        "Phone number must be exactly 11 digits",
        (val) => val && val.replace(/\D/g, "").length === 11
      )
      .test(
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

      {userType === "Customer" ? (
        <>
          <p>Thanks for choosing FitMatch to find your personal trainer!</p>
          <p>
            Complete all fields below. Worried about providing your email and
            phone number? We get it – but at FitMatch, we will never send you
            spam.
          </p>
        </>
      ) : userType === "Trainer" ? (
        <>
          <p>Thanks for choosing FitMatch to find your next client!</p>
          <p>
            Complete all fields below. Worried about providing your email and
            phone number? We get it – but at FitMatch, we will never send you
            spam.
          </p>
        </>
      ) : null}
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
              {/* <div className="form-group" >
                      <label className="mb-2 fw-600" htmlFor="inputGroupSelect0155">What is your reason for creating an account?</label>
                      <div className="can-toggle demo-rebrand-2">
                        <input id="e" type="checkbox" checked={isChecked} onChange={handleToggle} />
                        <label htmlFor="e">
                          <div className="can-toggle__switch" data-checked="Joining as a Personal Trainer" data-unchecked="Seeking a Personal Trainer"></div>
                        </label>
                      </div>
                    </div> */}
              <div className="row form-group">
                <div className="col-md-6">
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
                  <input
                    type="name"
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
              <div className="form-group">
                <input
                  type="name"
                  name="email"
                  placeholder="Email"
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
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.password && touched.password && "input-error"
                    }`}
                  />
                  {errors.password && touched.password ? (
                    <p className="error">{errors.password}</p>
                  ) : (
                    <p className="passEx">Ex: Ab@123456</p>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      "input-error"
                    }`}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="row form-group mb-4">
                {/* <div className="col-md-6">
                  <label htmlFor="inputGroupSelect0o1">Phone Number</label>
                  <PhoneInput
                    country="us"
                    placeholder="Enter Phone number"
                    name="PhoneNumber"
                    value={values.PhoneNumber}
                    onChange={(value) =>
                      handleChange({ target: { name: "PhoneNumber", value } })
                    }
                    onBlur={handleBlur}
                    className={` ${
                      errors.PhoneNumber && touched.PhoneNumber && "input-error"
                    }`}
                  />
                  {errors.PhoneNumber && touched.PhoneNumber && (
                    <p className="error">{errors.PhoneNumber}</p>
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
                      errors.phoneNumber && touched.phoneNumber && "input-error"
                    }`}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <p className="error">{errors.phoneNumber}</p>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputGroupSelect01">
                    Time zone (US only)
                  </label>
                  <div className="d-block">
                    <Form.Select
                      aria-label="Default select example"
                      name="timeZone"
                      value={values.timeZone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`custom_select ${
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

              <div className="forgate_check">
                <div className="coustome_checkbox">
                  <label htmlFor="agree">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      value={values.agree}
                      checked={values.agree}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span
                      className={
                        errors.agree && touched.agree
                          ? "checkmark input-error"
                          : "checkmark"
                      }
                    ></span>
                    I agree to the{" "}
                    <a href="/terms_conditions">Terms & Condition</a>,{" "}
                    <a href="/privacy_policy">Privacy Policy</a>, and{" "}
                    <a href="/terms_conditions#Code_of_Conduct">
                      Code of Conduct
                    </a>
                    .
                  </label>
                </div>
                {errors.agree && touched.agree && (
                  <p className="error">{errors.agree}</p>
                )}
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
                  className={`btn puprple_btn ms-0 ${
                    !(dirty && isValid) && "disabledBtn"
                  }`}
                  disabled={!(dirty && isValid) || isLoading}
                >
                  Sign Up
                </button>

                <div className="btn_bottom"></div>
              </div>
              <div className="sign_in_here mt-3">
                <p>
                  Already have an account? <a href="/signin">Sign In here</a>
                </p>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
