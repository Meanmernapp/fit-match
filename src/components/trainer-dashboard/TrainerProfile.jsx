import {
  GetCompanyLogo,
  GetProfileLogo,
  UpdateCompanyLogo,
  UpdateProfilePhoto,
} from "@/services/auth/authSlice";
import {
  GetTrainerProfile,
  RegisterTrainerProfile,
  UpdateTrainerProfile,
} from "@/services/trainer/trainerSlice";
import { Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import GoogleComponent from "react-google-autocomplete";
import {
  FaCamera,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaBuildingUser, FaUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import MultiSelectDropdown from "./SkillSelector";
import getConfig from "@/config/config";

const SocialInput = ({
  icon: Icon,
  placeholder,
  errors,
  setFieldValue,
  touched,
  values,
  name,
  ...props
}) => {
  return (
    <div className="input-with-icon">
      <Icon className="input-icon" />
      <input
        name={name}
        onChange={(e) => setFieldValue(name, e.target.value)}
        type="text"
        className="social-input form-control"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

// Define the validation schema
const validationSchema = Yup.object({
  yearsOfExperience: Yup.string().required("Required"),
  sessionPriceRange: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  about: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  latitude: Yup.number()
    .min(-90, "Invalid latitude")
    .max(90, "Invalid latitude"),
  longitude: Yup.number()
    .min(-180, "Invalid longitude")
    .max(180, "Invalid longitude"),
  companyName: Yup.string(),
  companyDescription: Yup.string(),
  faceBookURL: Yup.string().url("Invalid URL"),
  instagramURL: Yup.string().url("Invalid URL"),
  twitterURL: Yup.string().url("Invalid URL"),
  skills: Yup.array()
    .of(Yup.string().required("Required"))
    .required("Must have at least one skill")
    .min(1, "Must have at least one skill"),
});

const TrainerProfile = () => {
  const dispatch = useDispatch();
  const { getTrainerProfile, updateTrainerProfile, regiterTrainerProfile } =
    useSelector((state) => state?.trainerSlice || {});
  const {
    updateProfilePhoto,
    updateCompanyLogo,
    getUserById,
    getCompanyLogo,
    getProfileLogo,
  } = useSelector((state) => state?.authSlice || {});

  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [companyPhotoPreview, setCompanyPhotoPreview] = useState(null);
  const [address, setAddress] = useState(getTrainerProfile?.address || "");
  const [trainOffSite, setTrainOffSite] = useState(false);
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
  const config = getConfig(environment);

  const initialValues = getTrainerProfile?.trainerId
    ? getTrainerProfile
    : {
        yearsOfExperience: "",
        sessionPriceRange: "",
        gender: "",
        about: "",
        address: "",
        latitude: lat,
        trainOffSite: trainOffSite,
        longitude: lng,
        companyName: "",
        companyDescription: "",
        faceBookURL: "",
        instagramURL: "",
        twitterURL: "",
        profilePhoto: "",
        companyLogo: "",
        skills: [""],
        firstName: "",
        lastInitialName: "",
      };

  const userData = Cookies?.get("userData");

  const handleProfilePhotoChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      if (file.size > 2097152) {
        toast.warn("File too large < 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader?.result.split(",")[1];
        const objectUrl = URL.createObjectURL(file);
        setProfilePhotoPreview(objectUrl);
        const params = {
          userId: getUserById?.userId,
          fileName: file?.name,
          fileData: base64String,
        };
        dispatch(UpdateProfilePhoto(params));
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePhotoPreview(null);
    }
  };

  const handleCompanyPhotoChange = (event) => {
    const file = event.currentTarget.files[0];

    if (file) {
      if (file.size > 2097152) {
        toast.warn("File too large < 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        const objectUrl = URL.createObjectURL(file);
        setCompanyPhotoPreview(objectUrl);

        const params = {
          userId: getUserById?.userId,
          fileName: file?.name,
          fileData: base64String,
        };
        dispatch(UpdateCompanyLogo(params));
      };
      reader.readAsDataURL(file);
    } else {
      setCompanyPhotoPreview(null);
    }
  };

  const handlePlaceSelected = (place, setFieldValue) => {
    const address = place?.formatted_address;
    const lat = place?.geometry?.location?.lat();
    const lng = place?.geometry?.location?.lng();

    setAddress(address);
    setFieldValue("address", address);
    setFieldValue("latitude", lat);
    setLat(lat);
    setFieldValue("longitude", lng);
    setLng(lng);
  };

  const validateAddressFn = (fieldAdress) => {
    if (address) {
      setLat("");
      setLng("");
    }
  };
  const params = getUserById?.trainerId;
  useEffect(() => {
    if (params) {
      dispatch(GetTrainerProfile(params));
      dispatch(GetCompanyLogo(getUserById?.userId));
      dispatch(GetProfileLogo(getUserById?.userId));
    }
  }, [
    updateTrainerProfile,
    updateProfilePhoto,
    updateCompanyLogo,
    regiterTrainerProfile,
    params,
  ]);

  useEffect(() => {
    if (getTrainerProfile?.address) {
      setAddress(getTrainerProfile?.address);
      setLat(getTrainerProfile?.latitude);
      setLng(getTrainerProfile?.logitude);
      setTrainOffSite(getTrainerProfile?.trainOffSite);
    }
  }, [getTrainerProfile?.address]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (getTrainerProfile?.trainerId) {
            const payload = {
              trainerId: getTrainerProfile?.trainerId,
              data: values,
            };

            dispatch(UpdateTrainerProfile(payload));
          } else {
            const payload = {
              userId: getUserById?.userId,
              data: values,
            };
            dispatch(RegisterTrainerProfile(payload));
          }
        }}
      >
        {({
          setFieldValue,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => {
          return (
            <Form className="trainer_profile">
              <div className="grid_container">
                <div className="profile">
                  <div>
                    <label htmlFor="yearsOfExperience">
                      Year of Experience:
                    </label>
                    <Field
                      as="select"
                      name="yearsOfExperience"
                      value={values?.yearsOfExperience}
                      className={`form-control ${
                        errors.yearsOfExperience &&
                        touched.yearsOfExperience &&
                        "input-error"
                      }`}
                    >
                      <option value="" label="Select Experience" />
                      <option value="Less_than_5" label="Less than 5" />
                      <option value="5-10" label="5-10" />
                      <option value="10-15" label="10-15" />
                      <option value="15+" label="15+" />
                    </Field>
                    {errors.yearsOfExperience && touched.yearsOfExperience ? (
                      <div className="error">{errors.yearsOfExperience}</div>
                    ) : null}
                  </div>

                  <div className="pt-2">
                    <label htmlFor="sessionPriceRange">
                      Session Price Range:
                    </label>
                    <Field
                      as="select"
                      name="sessionPriceRange"
                      value={values?.sessionPriceRange}
                      className={`form-control ${
                        errors.sessionPriceRange &&
                        touched.sessionPriceRange &&
                        "input-error"
                      }`}
                    >
                      <option value="" label="Select Range" />
                      <option value="Range_50_75" label="$50-75" />
                      <option value="Range_75_100" label="$75-100" />
                      <option value="Range_100_Plus" label="$100+" />
                    </Field>
                    {errors.sessionPriceRange && touched.sessionPriceRange ? (
                      <div className="error">{errors.sessionPriceRange}</div>
                    ) : null}
                  </div>

                  <div className="pt-2">
                    <label htmlFor="gender">Gender:</label>
                    <Field
                      as="select"
                      name="gender"
                      value={values?.gender}
                      className={`form-control ${
                        errors.gender && touched.gender && "input-error"
                      }`}
                    >
                      <option value="" label="Select gender" />
                      <option value="Male" label="Male" />
                      <option value="Female" label="Female" />
                    </Field>
                    {errors.gender && touched.gender ? (
                      <div className="error">{errors.gender}</div>
                    ) : null}
                  </div>

                  <br />
                  <h4>Specialties/Skill</h4>

                  <MultiSelectDropdown
                    errors={errors}
                    setFieldValue={setFieldValue}
                    touched={touched}
                    values={values}
                  />

                  <p className="pt-4">
                    Offer Offsite Training:{" "}
                    <label className="switch">
                      <Field
                        name="trainOffSite"
                        type="checkbox"
                        className="switch-input"
                        defaultValue={trainOffSite}
                      />
                      <span className="switch-slider"></span>
                    </label>
                    {errors.trainOffSite && touched.trainOffSite ? (
                      <div className="error">{errors.trainOffSite}</div>
                    ) : null}
                  </p>

                  <div className="social_icon">
                    <SocialInput
                      icon={FaTwitterSquare}
                      placeholder="Twitter URL"
                      errors={errors}
                      value={values?.twitterURL}
                      setFieldValue={setFieldValue}
                      touched={touched}
                      name="twitterURL"
                    />
                    {errors.twitterURL && touched.twitterURL ? (
                      <div className="error">{errors.twitterURL}</div>
                    ) : null}

                    <SocialInput
                      icon={FaInstagramSquare}
                      placeholder="Instagram URL"
                      value={values?.instagramURL}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      touched={touched}
                      name="instagramURL"
                    />
                    {errors.instagramURL && touched.instagramURL ? (
                      <div className="error">{errors.instagramURL}</div>
                    ) : null}
                    <SocialInput
                      icon={FaFacebookSquare}
                      placeholder="faceBook URL"
                      errors={errors}
                      value={values?.faceBookURL}
                      setFieldValue={setFieldValue}
                      touched={touched}
                      name="faceBookURL"
                    />
                    {errors.faceBookURL && touched.faceBookURL ? (
                      <div className="error">{errors.faceBookURL}</div>
                    ) : null}
                  </div>
                </div>

                <div className="avatar">
                  <div className="avatar_container">
                    <div className="avatar_logo">
                      {profilePhotoPreview || getProfileLogo?.fileData ? (
                        <Image
                          src={
                            profilePhotoPreview
                              ? profilePhotoPreview
                              : `data:image/png;base64,${getProfileLogo?.fileData}`
                          }
                          alt="Profile Photo Preview"
                          width={120}
                          height={120}
                          className="profile-photo"
                        />
                      ) : (
                        <FaUser className="camera-icon" />
                      )}
                      <input
                        type="file"
                        onChange={(event) => handleProfilePhotoChange(event)}
                        style={{ display: "none" }}
                        id="profilePhotoInput"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("profilePhotoInput").click()
                        }
                        className="camera-button color_primary"
                      >
                        <FaCamera />
                      </button>
                    </div>
                  </div>

                  {/* <div className="">
                    <p className="pt-2">First Name:</p>
                    <Field
                      name="firstName"
                      type="text"
                      disabled
                      // disabled={getTrainerProfile?.trainerId}
                      value={getUserById?.firstName}
                      className="form-control avatar_input"
                    />

                    {errors.firstName && touched.firstName ? (
                      <div className="error">{errors.firstName}</div>
                    ) : null}

                    <p className="pt-2">Last Name Initial:</p>
                    <Field
                      name="lastInitialName"
                      type="text"
                      disabled
                      value={getUserById?.lastName}
                      className="form-control avatar_input"
                    />
                  {errors.lastInitialName && touched.lastInitialName ? (
                    <div className="error">{errors.lastInitialName}</div>
                  ) : null}
                  </div> */}

                  <p className="pt-2">
                    About:{" "}
                    <Field
                      as="textarea"
                      name="about"
                      placeholder="In this field, in addition to describing your background and offerings, also list any specialties/skills not listed in the field below and certifications. Be sure to also highlight what you feel sets you apart from other trainers!"
                      value={values?.about}
                      id="about"
                      rows={8}
                      className="form-control w-100 min-h-[100px] avatar_input"
                    />
                    {errors.about && touched.about ? (
                      <div className="error">{errors.about}</div>
                    ) : null}
                  </p>
                </div>

                <div className="company">
                  <p>
                    Company Name:{" "}
                    <Field
                      name="companyName"
                      type="text"
                      className="form-control"
                      value={values?.companyName}
                    />
                    {errors.companyName && touched.companyName ? (
                      <div className="error">{errors.companyName}</div>
                    ) : null}
                  </p>

                  <p className="pt-2">
                    Description:{" "}
                    <Field
                      as="textarea"
                      name="companyDescription"
                      id="companyDescription"
                      value={values?.companyDescription}
                      rows={8}
                      className="form-control w-100 h-100  avatar_input"
                    />
                    {errors.companyDescription && touched.companyDescription ? (
                      <div className="error">{errors.companyDescription}</div>
                    ) : null}
                  </p>

                  <div className="avatar_logo">
                    {companyPhotoPreview ||
                    getTrainerProfile?.companyLogo?.fileData ? (
                      <Image
                        src={
                          companyPhotoPreview
                            ? companyPhotoPreview
                            : `data:image/png;base64,${getCompanyLogo?.fileData}`
                        }
                        alt="Profile Photo Preview"
                        width={120}
                        height={120}
                        className="profile-photo-company"
                      />
                    ) : (
                      <FaBuildingUser className="camera-icon" />
                    )}
                    <input
                      type="file"
                      onChange={(event) => handleCompanyPhotoChange(event)}
                      style={{ display: "none" }}
                      id="companyPhotoInput"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("companyPhotoInput").click()
                      }
                      className="camera-button color_primary"
                    >
                      <FaCamera />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-2 pb-4">
                <p>Training Facility Address:</p>
                {/* <Autocomplete
                  apiKey="AIzaSyABX4LTqTLQGg_b3jFOH8Z6_H5CDqn8tbc"
                  onPlaceSelected={(place) =>
                    handlePlaceSelected(place, setFieldValue)
                  }
                  options={{
                    types: ["address"],
                    componentRestrictions: { country: "us" },
                  }}
                  defaultValue={address}
                  className="form-control"
                /> */}
                <GoogleComponent
                  apiKey={config?.APP_GOOGLE_API}
                  language="en"
                  country="us"
                  types={["geocode"]}
                  options={{
                    types: ["address"],
                  }}
                  onPlaceSelected={(place) =>
                    handlePlaceSelected(place, setFieldValue)
                  }
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
                {errors.address && touched.address ? (
                  <div className="error">{errors.address}</div>
                ) : null}

                {values?.address && !lat && !lng && (
                  <p className="error">
                    Invalid address. Please select your address from the Google
                    Maps dropdown below.
                  </p>
                )}
              </div>

              <div className="footer">
                <Button
                  type="submit"
                  className="submit"
                  disabled={!getTrainerProfile || !lat}
                >
                  {getTrainerProfile?.trainerId
                    ? "Update Profile"
                    : "Create Profile"}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default TrainerProfile;
