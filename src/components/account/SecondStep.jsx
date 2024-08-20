"use client";
import {
  resetCreateRequest,
  resetGetMatchedTrainersForRequest,
  resetUpdateRequest,
  SendRequetToTrainers,
} from "@/services/client/clientSlice";
import { stopLoading } from "@/services/common/commonSlice";
import { GetTrainerProfile } from "@/services/trainer/trainerSlice";
import { formatPriceRange } from "@/utils/formatPriceRange";
import { Formik } from "formik";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import TrainerProfileRead from "../trainer-dashboard/TrainerProfileRead";

export default function SecondStep({
  trainers,
  handleClose,
  handleCloseUpdate,
  setResultModal,
  isMatchedTrainer,
  reqId,
  confirmCloseModal,
  handleConfirmClose,
}) {
  const dispatch = useDispatch();
  const [selectedTrainers, setSelectedTrainers] = useState([]);
  const [trainerProfileView, setTrainerProfileView] = useState(false);

  const isLoading = useSelector((state) => state.commonSlice?.isLoading);
  const getMatchedTrainersForRequest = useSelector(
    (state) => state?.clientSlice?.getMatchedTrainersForRequest
  );

  const submitForm = (values) => {
    if (isMatchedTrainer) {
      const params = { ...values, requestId: reqId };
      dispatch(SendRequetToTrainers({ params })).then((res) => {
        handleClose();
        handleCloseUpdate();
        setResultModal(true);
        dispatch(stopLoading());
        dispatch(resetGetMatchedTrainersForRequest());
        dispatch(resetUpdateRequest());
        dispatch(resetCreateRequest());
      });
    } else {
      const params = { ...values, requestId: trainers?.requestId };
      dispatch(SendRequetToTrainers({ params })).then((res) => {
        handleClose();
        handleCloseUpdate();
        setResultModal(true);
        dispatch(stopLoading());
        dispatch(resetGetMatchedTrainersForRequest());
        dispatch(resetUpdateRequest());
        dispatch(resetCreateRequest());
      });
    }
  };
  const initialValues = {
    trainerIds: [],
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
    trainerIds: yup
      .array()
      .required("Trainer is required")
      .min(1, "At least one trainer is required"),
  });

  const handleTrainerListChange = (event, handleChange) => {
    event.stopPropagation();
    const value = event.target.value;
    // Check if the option is already selected, then remove it, otherwise add it
    if (selectedTrainers.includes(value)) {
      setSelectedTrainers(
        selectedTrainers.filter((option) => option !== value)
      );
    } else {
      if (selectedTrainers.length > 6) {
        toast.error("only 5 trainers are allowed");
      } else {
        setSelectedTrainers([...selectedTrainers, value]);
      }
    }
    handleChange(event); // Call Formik's handleChange to update form values
  };

  const actualData =
    trainers?.trainers?.length > 0
      ? trainers?.trainers
      : getMatchedTrainersForRequest;

  return (
    <>
      {trainerProfileView ? (
        <>
          <Button
            className="profile_back_button"
            onClick={() => {
              setTrainerProfileView(false);
            }}
          >
            Back
          </Button>
          <TrainerProfileRead />
        </>
      ) : (
        <>
          <div className="form-control py-4">
            {actualData?.length > 0 && (
              <p className="mb-5  ">
                Listed below are the trainer(s) we found that best fit your
                criteria! Please select at least one. To view the complete
                trainer profile, click on the trainer’s name.
              </p>
            )}

            {isLoading && (
              <div id="preloader">
                <div id="loader"></div>
              </div>
            )}
            {actualData && actualData?.length > 0 ? (
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
                      <div className="trainersList">
                        {actualData?.map((trainer, index) => (
                          <label className="card" key={index}>
                            <input
                              className="radio"
                              name="trainerIds"
                              id={trainer.trainerId}
                              type="checkbox"
                              value={trainer.trainerId}
                              checked={selectedTrainers.includes(
                                trainer.trainerId
                              )}
                              onChange={(event) =>
                                handleTrainerListChange(event, handleChange)
                              }
                            />
                            <span className="plan-details">
                              <span
                                className="plan-cost"
                                onClick={(e) => {
                                  setTrainerProfileView(true);
                                  dispatch(
                                    GetTrainerProfile(trainer.trainerId)
                                  );
                                }}
                              >
                          
                                {trainer?.firstName.length > 8
                                  ? `${trainer?.firstName.slice(0, 8)}...`
                                  : trainer?.firstName} {" "} 
                                {trainer.lastInitialName}.
                              </span>
                              <span className="plan-text">
                                Years of Experience:
                                <span className="fw-bold">
                                  {" "}
                                  {trainer.yearsOfExperience}
                                </span>
                              </span>

                              <span className="plan-text">
                                Session Price:{" "}
                                <span className="fw-bold">
                                  {formatPriceRange(trainer?.sessionPriceRange)}
                                </span>
                              </span>
                            </span>
                          </label>
                        ))}
                      </div>
                      <div className="btn_block mt-4">
                        <button
                          type="submit"
                          className={`btn puprple_btn ms-0 ${
                            !(dirty && isValid) && "disabledBtn"
                          }`}
                          disabled={!(dirty && isValid) || isLoading}
                        >
                          Send Request to Trainer(s)
                        </button>
                        <div className="btn_bottom"></div>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            ) : (
              <p>
                {isMatchedTrainer ? (
                  `Unfortunately, we still do not have any trainers that match your request. 
                  However, if you do not secure a trainer in the next few weeks, feel to come back
                   and check your request again! Thank you again and good luck with your search!`
                ) : (
                  <span>
                    {" "}
                    Thank you for submitting your request! At this time, we do
                    not have any trainers that are a good fit for your needs.
                    However, new trainers are signing up daily! With this, if
                    you do not secure a trainer in the next week, feel free to
                    come back to your account page and click the{" "}
                    <span className="view_match">View Matched</span> button for
                    your request. If we have any trainers at that time, they
                    will be displayed. Thank you again!
                  </span>
                )}
              </p>
            )}
          </div>

          {confirmCloseModal && (
            <div className="confirmation_button">
              <b>
                Your request has not been sent to the selected trainers. If you
                close this window, your request will remain in{" "}
                <span className="pending">Pending </span> status. Would you like
                to still close the window.
              </b>
              <div className="footer">
                <Button
                  variant="secondary"
                  className="yes"
                  onClick={() => {
                    handleClose();
                    handleCloseUpdate();
                    handleConfirmClose();
                    dispatch(stopLoading());
                    dispatch(resetGetMatchedTrainersForRequest());
                    dispatch(resetUpdateRequest());
                    dispatch(resetCreateRequest());
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant="secondary"
                  className="no"
                  onClick={() => {
                    handleConfirmClose();
                  }}
                >
                  No
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
