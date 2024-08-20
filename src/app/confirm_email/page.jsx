"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Fail_svg from "./Fail_svg";
import Success_svg from "./Success_svg";
import getConfig from "@/config/config";


export default function ConfirmEmail() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showResendForm, setShowResendForm] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [resendError, setResendError] = useState("");

  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    const code = params.get("code");

    if (userId && code) {
      axios
        .post(`${config.APP_BASE_URL}/api/Auth/ConfirmEmail`, { userId, code })
        .then((response) => {
          if (response.status === 200) {
            setIsSuccess(true);
          }
        })
        .catch((error) => {
          console.error("Error during email confirmation:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    setIsEmailValid(validateEmail(emailInput));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResendEmail = () => {
    if (isEmailValid) {
      setResendLoading(true);
      setResendError("");
      axios
        .post(
          `${config.APP_BASE_URL}/api/Auth/ResendVerificationEmail`,
          { email }
        )
        .then((response) => {
          if (response.status === 200) {
            setResendSuccess(true);
          } else {
            setResendError(
              "Failed to send verification email. Please try again."
            );
          }
        })
        .catch((error) => {
          console.error("Error during resending verification email:", error);
          setResendError(
            "Failed to send verification email. Please try again."
          );
        })
        .finally(() => {
          setResendLoading(false);
        });
    }
  };

  return (
    <div className="redirect-page text-center h100vh d-flex py-5">
      {isLoading ? (
        <div className="w-100 my-auto">
          <ClipLoader size={50} />
          <div className="section_title my-4">
            <h2>
              <span>Verifying</span>
            </h2>
          </div>
        </div>
      ) : isSuccess ? (
        <div className="m-auto">
          <div className="success-mark">
            <Success_svg />
          </div>
          <div className="section_title my-4">
            <h2>
              <span>Your Email Address</span> is Verified
            </h2>
          </div>
          <div className="btn_block mt-3">
            <a className="btn puprple_btn ms-0" href="/signin">
              Sign In
            </a>
            <div className="btn_bottom"></div>
          </div>
        </div>
      ) : (
        <div className="m-auto">
          <div className="success-mark">
            <Fail_svg />
          </div>
          <div className="section_title my-4">
            <h5>Your email address was not verified. Please try again.</h5>
          </div>
          <div className="btn_block mt-3">
            {showResendForm ? (
              <>
                <div className="mb-3  m-2">
                  <p>
                    <strong>
                      Please enter the same email address used during sign up.
                    </strong>
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                    placeholder="Email address"
                  />
                  {!isEmailValid && email && (
                    <p className="text-danger">
                      Email address must be a valid email address.
                    </p>
                  )}
                </div>
                <button
                  className="btn puprple_btn ms-0"
                  disabled={!isEmailValid || resendLoading}
                  onClick={handleResendEmail}
                >
                  {resendLoading ? "Sending..." : "Send"}
                </button>
                {resendSuccess && (
                  <p className="text-success mt-3">
                    Verification email has been sent!
                  </p>
                )}
                {resendError && (
                  <p className="text-danger mt-3">{resendError}</p>
                )}
              </>
            ) : (
              <button
                className="btn puprple_btn ms-0"
                onClick={() => setShowResendForm(true)}
              >
                Resend Email Verification
              </button>
            )}
            {/* <div className="btn_bottom"></div> */}
          </div>
        </div>
      )}
    </div>
  );
}
