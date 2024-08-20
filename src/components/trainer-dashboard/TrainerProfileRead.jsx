import { GetCompanyLogo, GetProfileLogo } from "@/services/auth/authSlice";
import { formatPriceRange } from "@/utils/formatPriceRange";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const TrainerProfileRead = () => {
  const dispatch = useDispatch();
  const { getTrainerProfile } = useSelector(
    (state) => state?.trainerSlice || {}
  );

  const { getCompanyLogo, getProfileLogo } = useSelector(
    (state) => state?.authSlice || {}
  );

  useEffect(() => {
    if (getTrainerProfile?.userId) {
      dispatch(GetCompanyLogo(getTrainerProfile?.userId));
      dispatch(GetProfileLogo(getTrainerProfile?.userId));
    }
  }, [getTrainerProfile?.userId]);

  return (
    <div className="trainer_profile">
      <div className="grid_container">
        <div className="profile">
          <p>
            Year of Experience:{" "}
            <span className="fw-bold ">
              {getTrainerProfile?.yearsOfExperience}
            </span>
          </p>
          <p>
            Session Price Range:{" "}
            <span className="fw-bold ">
              {formatPriceRange(getTrainerProfile?.sessionPriceRange)}
            </span>
          </p>
          <p>
            Gender:{" "}
            <span className="fw-bold ">{getTrainerProfile?.gender}</span>
          </p>
          <br />
          <h4>Specialties/Skill</h4>
          {getTrainerProfile?.skills?.map((skill) => {
            return <p>{skill}</p>;
          })}
          <p>
            Offer Offsite Training:{" "}
            <span className="fw-bold">
              {getTrainerProfile?.trainOffSite ? "Yes" : "No"}
            </span>
          </p>

          <div className="social_icon_read">
            <Link
              href={
                getTrainerProfile?.twitterURL
                  ? getTrainerProfile?.twitterURL
                  : "https://twitter.com/"
              }
              target="_blank"
            >
              <FaTwitterSquare />
            </Link>
            <Link
              href={
                getTrainerProfile?.instagramURL
                  ? getTrainerProfile?.instagramURL
                  : "https://www.instagram.com/"
              }
              target="_blank"
            >
              {" "}
              <FaInstagramSquare />{" "}
            </Link>
            <Link
              href={
                getTrainerProfile?.facebookURL
                  ? getTrainerProfile?.facebookURL
                  : "https://www.facebook.com/"
              }
              target="_blank"
            >
              {" "}
              <FaFacebookSquare />{" "}
            </Link>
          </div>
        </div>
        <div className="avatar">
          <div className="avatar_profile_read">
            <div className="avatar_logo">
              {getProfileLogo?.fileData ? (
                <Image
                  src={`data:image/png;base64,${getProfileLogo?.fileData}`}
                  alt="Profile Photo Preview"
                  width={120}
                  height={120}
                  className="profile-photo"
                />
              ) : (
                <FaUser className="camera-icon" />
              )}
            </div>
          </div>
          <p>
            Full Name:{" "}
            <span className="fw-bold">
              {getTrainerProfile?.firstName +
                " " +
                getTrainerProfile?.lastInitialName}
            </span>
          </p>
          <p>
            Description:{" "}
            <span className="fw-bold">{getTrainerProfile?.about}</span>
          </p>
        </div>
        <div className="company">
          <p>
            company name :
            <span className="fw-bold">{getTrainerProfile?.companyName}</span>
          </p>

          <p>
            Description:{" "}
            <span className="fw-bold">
              {getTrainerProfile?.companyDescription}
            </span>
          </p>
          <div className="avatar_logo">
            {getCompanyLogo?.fileData ? (
              <Image
                src={`data:image/png;base64,${getCompanyLogo?.fileData}`}
                alt="company Photo Preview"
                width={120}
                height={120}
                className="profile-photo-company"
              />
            ) : (
              <FaBuildingUser className="camera-icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfileRead;
