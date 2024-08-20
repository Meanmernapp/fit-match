"use client";
import {
  GetTrainerCredit,
  GetTrainerProfile,
} from "@/services/trainer/trainerSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  RiArrowDropDownLine,
  RiArrowDropUpLine,
  RiLockPasswordLine,
} from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RequireAuth from "../../components/RequireAuth";
import AccountDetail from "./AccountDetail";
import CreditInformation from "./CreditInformation";
import TrainerProfile from "./TrainerProfile";
import TrainerTable from "./TrainerTable";
import ChangePassword from "../account/ChangePassword";
import { RiBodyScanFill } from "react-icons/ri";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { ImProfile } from "react-icons/im";

export default function TrainerDashboard() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const buyCredits = searchParams?.get("buyCredits");
  const [isMenuClose, setIsMenuClose] = useState(false);

  const regiterTrainerProfile = useSelector(
    (state) => state?.trainerSlice?.regiterTrainerProfile
  );

  const getTrainerProfile = useSelector(
    (state) => state?.trainerSlice?.getTrainerProfile
  );
  const updateTrainerProfile = useSelector(
    (state) => state?.trainerSlice?.updateTrainerProfile
  );
  const responseToRequest = useSelector(
    (state) => state?.trainerSlice?.responseToRequest
  );

  const updateCompanyLogo = useSelector(
    (state) => state?.authSlice?.updateCompanyLogo
  );
  const updateProfilePhoto = useSelector(
    (state) => state?.authSlice?.updateProfilePhoto
  );
  const getUserById = useSelector((state) => state?.authSlice?.getUserById);
  const [tabIndex, setTabIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedTabIndex, setNestedTabIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();

  const params = getUserById?.trainerId;

  const handleMenuCollapse = (value) => {
    if (value === "close") {
      setIsMenuClose(true);
    } else if (value === "open") {
      setIsMenuClose(false);
    } else {
      setIsMenuClose(true);
    }
  };

  useEffect(() => {
    if (params) {
      dispatch(GetTrainerProfile(params));
      dispatch(GetTrainerCredit(params));
    }
  }, [
    updateTrainerProfile,
    updateProfilePhoto,
    updateCompanyLogo,
    regiterTrainerProfile,
    responseToRequest,
    params,
  ]);

  useEffect(() => {
    if (success || buyCredits) {
      setNestedTabIndex(1);
      setTabIndex(2);
    }
  }, [success, buyCredits]);
  return (
    <RequireAuth>
      <div className="sub-banner">
        <div className="banner_text sub-banner-content">
          <h2> Trainer Account</h2>
          <p>Home / Trainer Account</p>
        </div>
      </div>
      <div className="container my-5 py-5">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="row">
            <div
              className={`relative ${isMenuClose ? "col-md-1" : "col-md-3"}`}
            >
              {isMenuClose ? (
                <TbLayoutSidebarRightCollapse
                  className="tab_collapse"
                  onClick={() => handleMenuCollapse("open")}
                />
              ) : (
                <TbLayoutSidebarLeftCollapse
                  className="tab_collapse"
                  onClick={() => handleMenuCollapse("close")}
                />
              )}
              <TabList className="vertical-tab-list">
                <div>
                  <Tab className="vertical-tab d-flex align-items-center gap-2 ">
                    <div className="d-flex gap-2 align-items-center">
                      <RiBodyScanFill
                        size={isMenuClose && 25}
                        data-tooltip-id="trainer"
                        data-tooltip-content={isMenuClose ? "Trainer" : ""}
                      />
                      {!isMenuClose && "Trainer"}
                    </div>
                  </Tab>

                  <Tab className="vertical-tab d-flex align-items-center gap-2 ">
                    {getTrainerProfile?.trainerId ? (
                      <div className="d-flex gap-2 align-items-center">
                        <ImProfile
                          size={isMenuClose && 25}
                          data-tooltip-id="profile"
                          data-tooltip-content={isMenuClose ? "Profile" : ""}
                        />
                        {!isMenuClose && "Profile"}
                      </div>
                    ) : (
                      <div>
                        <ImProfile
                          size={isMenuClose && 25}
                          data-tooltip-id="profile"
                          data-tooltip-content={isMenuClose ? "Profile" : ""}
                        />
                        {!isMenuClose && "Create Profile"}
                        {!getTrainerProfile?.trainerId && !isMenuClose && (
                          <p className="create_profile_info">
                            In order to accept requests from prospective
                            clients, you must create a profile.
                          </p>
                        )}
                      </div>
                    )}
                  </Tab>

                  <Tab
                    className="vertical-tab d-flex align-items-center gap-2 "
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div className="sub_menu_container">
                      <div className="d-flex gap-2 align-items-center">
                        <MdOutlineAccountTree
                          size={isMenuClose && 28}
                          data-tooltip-id="accountDetails"
                          data-tooltip-content={
                            isMenuClose ? "Account Details" : ""
                          }
                        />
                        {!isMenuClose && "Account Details"}
                      </div>
                      {dropdownOpen ? (
                        <RiArrowDropUpLine size={28} />
                      ) : (
                        <RiArrowDropDownLine size={28} />
                      )}
                    </div>
                  </Tab>
                  {dropdownOpen && (
                    <div className="nested-tabs">
                      <div
                        className={`vertical-tab ${
                          isMenuClose ? "" : " nested-tab"
                        } d-flex align-items-center gap-2`}
                        onClick={() => {
                          setNestedTabIndex(0);
                          setTabIndex(2);
                        }}
                      >
                        <div
                          className={`${
                            nestedTabIndex === 0
                              ? "active_cirle"
                              : "in_active_cirle"
                          }`}
                        ></div>

                        {!isMenuClose ? (
                          "Account Information"
                        ) : (
                          <div>
                            <MdAccountBalanceWallet
                              size={isMenuClose && 18}
                              data-tooltip-id="accountInfo"
                              data-tooltip-content={
                                isMenuClose ? "Account Information" : ""
                              }
                            />
                          </div>
                        )}
                      </div>
                      <div
                        className={`vertical-tab ${
                          isMenuClose ? "" : " nested-tab"
                        } d-flex align-items-center gap-2 `}
                        onClick={() => {
                          setNestedTabIndex(1);
                          setTabIndex(2);
                        }}
                      >
                        <div
                          className={`${
                            nestedTabIndex === 1
                              ? "active_cirle"
                              : "in_active_cirle"
                          }`}
                        ></div>

                        {!isMenuClose ? (
                          "Credit Information"
                        ) : (
                          <div>
                            <FaRegCreditCard
                              size={isMenuClose && 18}
                              data-tooltip-id="creditInfo"
                              data-tooltip-content={
                                isMenuClose ? "Credit Information" : ""
                              }
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <Tab className="vertical-tab d-flex align-items-center gap-2 ">
                    <div className="d-flex gap-2 align-items-center">
                      <RiLockPasswordLine
                        size={isMenuClose && 25}
                        data-tooltip-id="change_password"
                        data-tooltip-content={
                          isMenuClose ? "Change Password" : ""
                        }
                      />
                      {!isMenuClose && "Change Password"}
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
            <div className={isMenuClose ? "col-md-11" : "col-md-9"}>
              <TabPanel>
                <TrainerTable />
              </TabPanel>
              <TabPanel>
                <h3 className="admin-heading bg-offwhite">
                  <div className="d-flex">
                    <p>Profile</p>
                  </div>
                </h3>

                <TrainerProfile />
              </TabPanel>

              {nestedTabIndex === 0 && (
                <TabPanel>
                  <AccountDetail />
                </TabPanel>
              )}

              {nestedTabIndex === 1 && (
                <TabPanel>
                  <h3 className="admin-heading bg-offwhite">
                    <div className="d-flex">
                      <p>Credit Information</p>
                    </div>
                  </h3>
                  <CreditInformation />
                </TabPanel>
              )}
              <TabPanel>
                <ChangePassword />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
      <Tooltip id="trainer" place="left" />
      <Tooltip id="profile" place="left" />
      <Tooltip id="accountDetails" place="left" />
      <Tooltip id="accountInfo" place="left" />
      <Tooltip id="creditInfo" place="left" />
      <Tooltip id="change_password" place="left" />
    </RequireAuth>
  );
}
