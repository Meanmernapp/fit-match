"use client";

import getConfig from "@/config/config";
import { Formik } from "formik";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import * as yup from "yup";


export default function ResetPassword() {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId');

  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);

  useEffect(() => {
    const userCookie = Cookies.get("userData");
    if (userCookie) {
      router.push("/", { scroll: true });
    }
  }, [router]);

  const submitForm = async (values, { setSubmitting, resetForm }) => {
    const payload = { userId, ...values };
    try {
      setIsLoading(true);
      const response = await fetch(`${config.APP_BASE_URL}/api/Auth/ResetPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 200 || response.ok) {
        setIsLoading(false);
        const data = await response.json();
        setSuccessMsg("Your password has been reset successfully.");
        setErrorMsg("");
        resetForm();
        router.push("/signin");
      } else {
        const errorData = await response.json();
        setErrorMsg(errorData.message || "Something went wrong. Please try again.");
        setSuccessMsg("");
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again later.");
      setSuccessMsg("");
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const initialValues = {
    password: "",
    confirmPassword: ""
  };

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required("Password is required Ex: Ab@123456")
      .min(8, "Password must be at least eight characters. Ex: Ab@123456")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter Ex: Ab@123456"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .min(8, "Password must be at least eight characters.")
      .oneOf([yup.ref("password"), null], "Passwords do not match")
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
              <span className="title_badge">Recover Now</span>
              <h2>
                <span>Reset</span> your Password
              </h2>
            </div>
            {errorMsg && (
              <div className="errorMsg bg-red">
                <p>{errorMsg}</p>
              </div>
            )}
            {successMsg && (
              <div className="successMsg bg-green">
                <p>{successMsg}</p>
              </div>
            )}
            <Formik
              initialValues={initialValues}
              validateOnBlur={true}
              validateOnChange={true}
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
                  isSubmitting,
                } = formik;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control ${errors.password && touched.password && "input-error"}`}
                        />
                        {errors.password && touched.password ? (
                          <p className="error">{errors.password}</p>
                        ) : (
                          <p className="passEx">Ex: Ab@123456</p>
                        )}
                      </div>
                      <div className="col-md-12 pt-4">
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control ${errors.confirmPassword && touched.confirmPassword && "input-error"}`}
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <p className="error">{errors.confirmPassword}</p>
                        )}
                      </div>
                    </div>
                    <div className="btn_block">
                      <button
                        type="submit"
                        className={`btn puprple_btn ms-0 ${!(dirty && isValid) && "disabledBtn"}`}
                        disabled={!(dirty && isValid) || isSubmitting}
                      >
                        Reset
                      </button>
                      <div className="btn_bottom"></div>
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
