"use client";
import getConfig from "@/config/config";
import { Formik } from "formik";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "react-tabs/style/react-tabs.css";
import * as yup from "yup";

export default function ForgetPasswordPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);


  useEffect(() => {
    const userCookie = Cookies.get("userData");
    if (userCookie) {
      router.push("/", { scroll: true });
    }
  }, [router]);

  const submitForm = async (values, { setSubmitting, resetForm }) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${config.APP_BASE_URL}/api/Auth/ForgotPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200 || response.ok) {
        setIsLoading(false);
        const data = await response.json();
     
        setSuccessMsg(
          "A link to reset your password has been sent to your email."
        );
        setErrorMsg("");
        resetForm();
      } else {
        const errorData = await response.json();
        setErrorMsg(
          errorData.message || "Something went wrong. Please try again."
        );
        setSuccessMsg("");
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again later.");
      setSuccessMsg("");
      console.log(error)
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }

    // dispatch(ForgetPassword(values))
  };

  const initialValues = {
    email: "",
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
                <span>Forget</span> your Password
              </h2>
              <p>
                Enter the email address associated with your account and we will
                send you a link to reset your password
              </p>
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
                  isSubmitting,
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
                        className={`form-control ${
                          errors.email && touched.email && "input-error"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                      )}
                    </div>

                    <div className="btn_block">
                      <button
                        type="submit"
                        className={`btn puprple_btn ms-0 ${
                          !(dirty && isValid) && "disabledBtn"
                        }`}
                        disabled={!(dirty && isValid) || isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send"}
                      </button>
                      <div className="btn_bottom"></div>
                    </div>

                    <div className="sign_in_here mt-3">
                      <p>
                        Don’t have an account?{" "}
                        <Link href="/signup">Sign Up here</Link>
                      </p>
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
