"use client";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import GoogleComponent from "react-google-autocomplete";
import * as yup from "yup";

import { CreateRequest, UpdateRequest } from "@/services/client/clientSlice";
import { useDispatch, useSelector } from "react-redux";
import getConfig from "@/config/config";


export default function FirstStep({ setFirstStep, editData }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.commonSlice?.isLoading);

  const [preferredGender, setPreferredGender] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [selectedEstimatedBudget, setselectedEstimatedBudget] = useState([]);
  const [selectedPreferences, SetselectedPreferences] = useState([]);
  const [selectedWorkoutTypes, setSelectedWorkoutTypes] = useState([]);
  const [validateAddress , setValidateAdress] = useState("")
  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);

  const submitForm = (values) => {
    const params = { ...values, latitude: lat, longitude: lng };

    // conditionaly calling api
    if (editData?.estimatedBudget) {
      const RequestId = editData?.requestId;

      dispatch(UpdateRequest({ params, RequestId })).then((response) => {
        setFirstStep();
      });
    } else {
      dispatch(CreateRequest({ params })).then((response) => {
        if (response?.payload?.status === 200) {
          setFirstStep();
          setLat("")
          setLng("")
        }
      });
    }
  };

  // conditon initail value for create and update
  const initialValues = editData
    ? editData
    : {
        title: "",
        firstTimeWithTrainer: "",
        description: "",
        address: "",
        preferredGender: "",
        goal: [],
        estimatedBudget: [],
        description: "",
        traningFrequency: "",
        preferences: [],
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
    title: yup
      .string()
      .required("Title is required")
      .min(4, "Title must be at least four characters."),
    firstTimeWithTrainer: yup.string().required("Answer is required"),
    address: yup.string().required("Address is required"),
    goal: yup
      .array()
      .required("Goal is required")
      .min(1, "At least one goal is required"),
    estimatedBudget: yup
      .array()
      .required("Estimated budget is required")
      .min(1, "At least one estimated budget is required"),
    preferredGender: yup.string().required("Preferred gender is required"),
    trainingFrequency: yup.string().required("Traning Frequency is required"),
    timePreferences: yup.array().required("Time Preferences is required"),
  });

  const handleGenderChange = (event, handleChange) => {
    setPreferredGender(event.target.value);
    handleChange(event);
  };

  // Handle change in budget options
  const handleBudgetChange = (event, handleChange) => {
    const value = event.target.value;
    // Check if the option is already selected, then remove it, otherwise add it
    if (selectedEstimatedBudget.includes(value)) {
      setselectedEstimatedBudget(
        selectedEstimatedBudget.filter((option) => option !== value)
      );
    } else {
      setselectedEstimatedBudget([...selectedEstimatedBudget, value]);
    }
    handleChange(event); // Call Formik's handleChange to update form values
  };

  // Handle change in prefrence options
  const handlePreferencesChange = (event, handleChange) => {
    const value = event.target.value;
    // Check if the option is already selected, then remove it, otherwise add it
    if (selectedPreferences.includes(value)) {
      SetselectedPreferences(
        selectedPreferences.filter((option) => option !== value)
      );
    } else {
      SetselectedPreferences([...selectedPreferences, value]);
    }
    handleChange(event); // Call Formik's handleChange to update form values
  };

  // Handle change in goals and types of workout
  const handleWorkoutTypesChange = (event, handleChange) => {
    const value = event.target.value;
    // Check if the option is already selected, then remove it, otherwise add it
    if (selectedWorkoutTypes.includes(value)) {
      setSelectedWorkoutTypes(
        selectedWorkoutTypes.filter((option) => option !== value)
      );
    } else {
      setSelectedWorkoutTypes([...selectedWorkoutTypes, value]);
    }
    handleChange(event); // Call Formik's handleChange to update form values
  };

  const validateAddressFn = (address) => {
    if(validateAddress){
      setLat("");
      setLng("");
    }
  };
  const onPlaceSelected = (place, formik) => {
    if (place?.formatted_address !== "") {
      setLat(place?.geometry?.location?.lat());
      setLng(place?.geometry?.location?.lng());
      // Update the address field in the form values

      formik?.setFieldValue("address", place?.formatted_address);
      setValidateAdress(place?.formatted_address)
    }
  };

  // if for update data
  // useEffect(() => {
  //   if (editData?.estimatedBudget) {
  //     setselectedEstimatedBudget(editData?.estimatedBudget);
  //     setPreferredGender(editData?.preferredGender);
  //     setSelectedWorkoutTypes(editData?.goal);
  //     setLat(editData?.latitude);
  //     setLng(editData?.longitude);
  //   }
  // }, []);

  return (
    <div className="form-control py-4">
      {isLoading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      <p className="mb-5">
        Thank you for using FitMatch! We want to match you with the best suited
        trainer! With this, please complete each field below. Also, before
        submitting your request, please confirm that the phone number on your
        account is correct. Trainers may contact you via text/ call.
      </p>

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
              <div className="mb-4">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control ${
                    errors.title && touched.title && "input-error"
                  }`}
                />
                {errors.title && touched.title && (
                  <p className="error">{errors.title}</p>
                )}
              </div>

              <div className="input-group d-block mb-4">
                <label htmlFor="inputGroupSelect01">
                  Is this your first time working with a trainer?
                </label>
                <div className="w-50 d-block">
                  <Form.Select
                    aria-label="Default select example"
                    name="firstTimeWithTrainer"
                    placeholder="firstTimeWithTrainer"
                    value={values.firstTimeWithTrainer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.firstTimeWithTrainer &&
                      touched.firstTimeWithTrainer &&
                      "input-error"
                    }`}
                  >
                    <option value={""}>Choose...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Form.Select>
                  {errors.firstTimeWithTrainer &&
                    touched.firstTimeWithTrainer && (
                      <p className="error">{errors.firstTimeWithTrainer}</p>
                    )}
                </div>
              </div>

              <div className="trainerGender mb-4">
                <label htmlFor="floatingPassword">
                  {" "}
                  Do you prefer a specific gender for your personal trainer?
                </label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="male-option"
                      name="preferredGender"
                      value="Male"
                      checked={preferredGender === "Male"}
                      onChange={(event) =>
                        handleGenderChange(event, handleChange)
                      }
                    />
                    <label htmlFor="male-option">Male</label>
                    <div className="check"></div>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="female-option"
                      name="preferredGender"
                      value="Female"
                      checked={preferredGender === "Female"}
                      onChange={(event) =>
                        handleGenderChange(event, handleChange)
                      }
                    />
                    <label htmlFor="female-option">Female</label>
                    <div className="check"></div>
                  </li>

                  <li>
                    <input
                      type="radio"
                      id="DoesNotMatter"
                      name="preferredGender"
                      value="DoesNotMatter"
                      checked={preferredGender === "DoesNotMatter"}
                      onChange={(event) =>
                        handleGenderChange(event, handleChange)
                      }
                    />
                    <label htmlFor="DoesNotMatter">It does not matter</label>
                    <div className="check"></div>
                  </li>
                </ul>
                {errors.preferredGender && touched.preferredGender && (
                  <p className="error">{errors.preferredGender}</p>
                )}
              </div>
              <div className="mb-4">
                <label>Address</label>
                <GoogleComponent
                  apiKey={config?.APP_GOOGLE_API}
                  language="en"
                  country="us"
                  types={["geocode"]}
                  options={{
                    types: ["address"],
                  }}
                  onPlaceSelected={(place) => onPlaceSelected(place, formik)}
                  name="address"
                  placeholder="address"
                  value={values.address}
                  onChange={handleChange}
                  
                  onBlur={(e) => {
                    handleBlur(e);
                    validateAddressFn(values.address);
                  }}
                  className={`form-control ${
                    errors.address && touched.address && "input-error"
                  }`}
                />
                {errors.address && touched.address && (
                  <p className="error">{errors.address}</p>
                )}
                {values?.address && !lat && !lng && (
                  <p className="error">
                    Invalid address. Please select your address from the Google
                    Maps dropdown below.
                  </p>
                )}
              </div>

              <div className="input-group d-block mb-4">
                <label htmlFor="inputGroupSelect01">
                  How often do you want to train?
                </label>
                <div className="w-50 d-block">
                  <Form.Select
                    aria-label="Train"
                    name="trainingFrequency"
                    placeholder="train"
                    value={values.trainingFrequency}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.trainingFrequency &&
                      touched.trainingFrequency &&
                      "input-error"
                    }`}
                  >
                    <option value={""}>Choose...</option>
                    <option value={"Once_Per_Week"}>Once per week</option>
                    <option value={"Twice_Per_Week"}>Twice per week</option>
                    <option value={"ThreeTimes_Per_Week"}>
                      Three times per week
                    </option>
                    <option value={"More_Than_ThreeTimes_Per_Week"}>
                      More than three times per week
                    </option>
                  </Form.Select>
                  {errors.trainingFrequency && touched.trainingFrequency && (
                    <p className="error">{errors.trainingFrequency}</p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label>
                  What is your budget per session (select all that apply)?
                </label>
                <div className="trainerBudget ps-2">
                  <input
                    id="Range_50_75"
                    type="checkbox"
                    name="estimatedBudget"
                    value="Range_50_75"
                    checked={selectedEstimatedBudget.includes("Range_50_75")}
                    onChange={(event) =>
                      handleBudgetChange(event, handleChange)
                    }
                  />
                  <label htmlFor="Range_50_75">$50-75</label>
                  <input
                    id="Range_75_100"
                    type="checkbox"
                    name="estimatedBudget"
                    value="Range_75_100"
                    checked={selectedEstimatedBudget.includes("Range_75_100")}
                    onChange={(event) =>
                      handleBudgetChange(event, handleChange)
                    }
                  />
                  <label htmlFor="Range_75_100">$75-100</label>
                  <input
                    id="Range_100_Plus"
                    type="checkbox"
                    name="estimatedBudget"
                    value="Range_100_Plus"
                    checked={selectedEstimatedBudget.includes("Range_100_Plus")}
                    onChange={(event) =>
                      handleBudgetChange(event, handleChange)
                    }
                  />
                  <label htmlFor="Range_100_Plus">$100+</label>
                </div>
                <p className="text_italics text-sm">
                  Personal trainers determine their session prices as well as
                  additional fees, that may apply, for travel and/or parking
                  fees.
                </p>
                {errors.estimatedBudget && (
                  <p className="error">{errors.estimatedBudget}</p>
                )}
              </div>

              <div className="mb-4">
                <label>What are your time preference(s) for sessions?</label>
                <div className="trainerBudget ps-2">
                  <input
                    id="Early_Morning"
                    type="checkbox"
                    name="timePreferences"
                    value="Early_Morning"
                    checked={selectedPreferences?.includes("Early_Morning")}
                    onChange={(event) =>
                      handlePreferencesChange(event, handleChange)
                    }
                  />
                  <label htmlFor="Early_Morning">
                    Early morning (before 9 AM)
                  </label>
                  <input
                    id="Morning"
                    type="checkbox"
                    name="timePreferences"
                    value="Morning"
                    checked={selectedPreferences?.includes("Morning")}
                    onChange={(event) =>
                      handlePreferencesChange(event, handleChange)
                    }
                  />
                  <label htmlFor="Morning">Morning</label>
                  <input
                    id="AfterNoon"
                    type="checkbox"
                    name="timePreferences"
                    value="AfterNoon"
                    checked={selectedPreferences?.includes("AfterNoon")}
                    onChange={(event) =>
                      handlePreferencesChange(event, handleChange)
                    }
                  />
                  <label htmlFor="AfterNoon">Afternoon</label>

                  <input
                    id="Evening"
                    type="checkbox"
                    name="timePreferences"
                    value="Evening"
                    checked={selectedPreferences?.includes("Evening")}
                    onChange={(event) =>
                      handlePreferencesChange(event, handleChange)
                    }
                  />
                  <label htmlFor="Evening">Evening</label>
                </div>

                {errors?.timePreferences && (
                  <p className="error">{errors?.timePreferences}</p>
                )}
              </div>
              <div className="mb-3">
                <label>
                  What are your goals and/type of workout you are looking for?
                </label>
                <div className="row">
                  <div className="col-md-6">
                    <div className="trainerBudget ">
                      <input
                        id="Group Personal Training"
                        type="checkbox"
                        name="goal"
                        value="Group Personal Training"
                        checked={selectedWorkoutTypes.includes(
                          "Group Personal Training"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Group Personal Training">
                        Group Personal Training
                      </label>

                      <input
                        id="At-Home Personal Training"
                        type="checkbox"
                        name="goal"
                        value="At-Home Personal Training"
                        checked={selectedWorkoutTypes.includes(
                          "At-Home Personal Training"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="At-Home Personal Training">
                        At-Home Personal Training
                      </label>

                      <input
                        id="Mobility Training Nutrition (General)"
                        type="checkbox"
                        name="goal"
                        value="Mobility Training Nutrition (General)"
                        checked={selectedWorkoutTypes.includes(
                          "Mobility Training Nutrition (General)"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Mobility Training Nutrition (General)">
                        Mobility Training Nutrition (General)
                      </label>

                      <input
                        id="Physique and Bodybuilding"
                        type="checkbox"
                        name="goal"
                        value="Physique and Bodybuilding"
                        checked={selectedWorkoutTypes.includes(
                          "Physique and Bodybuilding"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Physique and Bodybuilding">
                        Physique and Bodybuilding
                      </label>

                      <input
                        id="Pilates"
                        type="checkbox"
                        name="goal"
                        value="Pilates"
                        checked={selectedWorkoutTypes.includes("Pilates")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Pilates">Pilates</label>

                      <input
                        id="Powerlifting"
                        type="checkbox"
                        name="goal"
                        value="Powerlifting"
                        checked={selectedWorkoutTypes.includes("Powerlifting")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Powerlifting">Powerlifting</label>

                      <input
                        id="Prenatal and Postpartum"
                        type="checkbox"
                        name="goal"
                        value="Prenatal and Postpartum"
                        checked={selectedWorkoutTypes.includes(
                          "Prenatal and Postpartum"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Prenatal and Postpartum">
                        Prenatal and Postpartum
                      </label>

                      <input
                        id="Running Coach"
                        type="checkbox"
                        name="goal"
                        value="Running Coach"
                        checked={selectedWorkoutTypes.includes("Running Coach")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Running Coach">Running Coach</label>

                      <input
                        id="Senior Fitness"
                        type="checkbox"
                        name="goal"
                        value="Senior Fitness"
                        checked={selectedWorkoutTypes.includes(
                          "Senior Fitness"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Senior Fitness">Senior Fitness</label>

                      <input
                        id="Youth Exercise"
                        type="checkbox"
                        name="goal"
                        value="Youth Exercise"
                        checked={selectedWorkoutTypes.includes(
                          "Youth Exercise"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Youth Exercise">Youth Exercise</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="trainerBudget ps-2">
                      <input
                        id="Sports Nutrition"
                        type="checkbox"
                        name="goal"
                        value="Sports Nutrition"
                        checked={selectedWorkoutTypes.includes(
                          "Sports Nutrition"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Sports Nutrition">Sports Nutrition</label>

                      <input
                        id="Sports Performance Enhancement Coaching"
                        type="checkbox"
                        name="goal"
                        value="Sports Performance Enhancement Coaching"
                        checked={selectedWorkoutTypes.includes(
                          "Sports Performance Enhancement Coaching"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Sports Performance Enhancement Coaching">
                        Sports Performance Enhancement Coaching
                      </label>

                      <input
                        id="Strength and Conditioning"
                        type="checkbox"
                        name="goal"
                        value="Strength and Conditioning"
                        checked={selectedWorkoutTypes.includes(
                          "Strength and Conditioning"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Strength and Conditioning">
                        Strength and Conditioning
                      </label>

                      <input
                        id="Stretching and Flexibility"
                        type="checkbox"
                        name="goal"
                        value="Stretching and Flexibility"
                        checked={selectedWorkoutTypes.includes(
                          "Stretching and Flexibility"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Stretching and Flexibility">
                        Stretching and Flexibility
                      </label>

                      <input
                        id="Virtual Coaching"
                        type="checkbox"
                        name="goal"
                        value="Virtual Coaching"
                        checked={selectedWorkoutTypes.includes(
                          "Virtual Coaching"
                        )}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Virtual Coaching">Virtual Coaching</label>

                      <input
                        id="Weight Loss"
                        type="checkbox"
                        name="goal"
                        value="Weight Loss"
                        checked={selectedWorkoutTypes.includes("Weight Loss")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Weight Loss">Weight Loss</label>

                      <input
                        id="Weightlifting"
                        type="checkbox"
                        name="goal"
                        value="Weightlifting"
                        checked={selectedWorkoutTypes.includes("Weightlifting")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Weightlifting">Weightlifting</label>

                      <input
                        id="Wellness"
                        type="checkbox"
                        name="goal"
                        value="Wellness"
                        checked={selectedWorkoutTypes.includes("Wellness")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Wellness">Wellness</label>

                      <input
                        id="Yoga"
                        type="checkbox"
                        name="goal"
                        value="Yoga"
                        checked={selectedWorkoutTypes.includes("Yoga")}
                        onChange={(event) =>
                          handleWorkoutTypesChange(event, handleChange)
                        }
                      />
                      <label htmlFor="Yoga">Yoga</label>
                    </div>
                  </div>
                </div>
                {errors.goal && <p className="error">{errors.goal}</p>}
              </div>

              <Form.Group className="mt-4">
                <label className="mb-0">
                  Are there any additional details you'd like the trainer to
                  know?
                </label>
                <Form.Control
                  id="description"
                  name="description"
                  value={values.description}
                  checked={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              <div className="btn_block mt-4">
                <button
                  type="submit"
                  className={`btn puprple_btn ms-0 ${
                    !(dirty && isValid && lat ) && "disabledBtn"
                  }`}
                  disabled={!(dirty && isValid && lat) || isLoading }
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
  );
}
