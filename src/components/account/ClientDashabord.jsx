"use client";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { FaCogs, FaSearch } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

import FindPersonalTrainerCustomer from "@/components/account/FindPersonalTrainerCustomer";
import { GetAllUserRequest } from "@/services/client/clientSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import AccountInformation from "../../components/account/AccountInformation";
import ChangePassword from "../../components/account/ChangePassword";
import RequireAuth from "../../components/RequireAuth";
import { Tooltip } from "react-tooltip";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";

export default function ClientDashabord() {
  const dispatch = useDispatch();
  const [isMenuClose, setIsMenuClose] = useState(false);

  const sendRequestToTrainers = useSelector(
    (state) => state?.clientSlice?.sendRequestToTrainers
  );
  const updateRequest = useSelector(
    (state) => state?.clientSlice?.updateRequest
  );

  const createRequest = useSelector(
    (state) => state?.clientSlice?.createRequest
  );

  const deleteRequest = useSelector(
    (state) => state?.clientSlice?.deleteRequest
  );

  const updateCustomerRequestStatus = useSelector(
    (state) => state?.clientSlice?.updateCustomerRequestStatus
  );

  const getMatchedTrainersForRequest = useSelector(
    (state) => state?.clientSlice?.getMatchedTrainersForRequest
  );

  const getUserById = useSelector((state) => state?.authSlice?.getUserById);
  const router = useRouter();

  const userData = Cookies?.get("userData");

  const handleMenuCollapse = (value) => {
    if (value === "close") {
      setIsMenuClose(true);
    } else if (value === "open") {
      setIsMenuClose(false);
    } else {
      setIsMenuClose(true);
    }
  };

  // get all request
  useEffect(() => {
    if (getUserById?.userId) {
      dispatch(GetAllUserRequest(getUserById?.userId));
    }
  }, [
    updateCustomerRequestStatus,
    getUserById?.userId,
    deleteRequest,
    createRequest,
    updateRequest,
    getMatchedTrainersForRequest,
    sendRequestToTrainers,
  ]);

  return (
    <RequireAuth>
      <div className="sub-banner">
        <div className="banner_text sub-banner-content">
          <h2> My Account</h2>
          <p>Home / My Account</p>
        </div>
      </div>
      <div className="container my-5 py-5">
        <Tabs>
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
                  <Tab className="vertical-tab">
                    <FaSearch
                      size={isMenuClose && 25}
                      data-tooltip-id="Find Personal Trainer"
                      data-tooltip-content={
                        isMenuClose ? "Find Personal Trainer" : ""
                      }
                    />

                    {!isMenuClose && " Find Personal Trainer"}
                  </Tab>
                  <Tab className="vertical-tab">
                    <FaCogs
                      size={isMenuClose && 25}
                      data-tooltip-id="Account Information"
                      data-tooltip-content={
                        isMenuClose ? "Account Information" : ""
                      }
                    />
                    {!isMenuClose && "Account Information"}
                  </Tab>
                  <Tab className="vertical-tab">
                    <RiLockPasswordLine
                      size={isMenuClose && 25}
                      data-tooltip-id="Change Password"
                      data-tooltip-content={
                        isMenuClose ? "Change Password" : ""
                      }
                    />

                    {!isMenuClose && "Change Password"}
                  </Tab>
                </div>
              </TabList>
            </div>
            <div className={isMenuClose ? "col-md-11" : "col-md-9"}>
              <TabPanel>
                <FindPersonalTrainerCustomer />
              </TabPanel>
              <TabPanel>
                <AccountInformation />
              </TabPanel>
              <TabPanel>
                <ChangePassword />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
      <Tooltip id="Find Personal Trainer" place="left" />
      <Tooltip id="Account Information" place="left" />
      <Tooltip id="Change Password" place="left" />
    </RequireAuth>
  );
}
