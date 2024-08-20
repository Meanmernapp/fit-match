"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { FaUsers } from "react-icons/fa";

import { useRouter } from "next/navigation";
import RequireAuth from "../../components/RequireAuth";
import UserTableAdmin from "./UserTableAdmin";

export default function AdminDashboard() {
  const router = useRouter();



  return (
    <RequireAuth>
   
      <div className="sub-banner">
        <div className="banner_text sub-banner-content">
          <h2> Admin Account</h2>
          <p>Home / Admin Account</p>
        </div>
      </div>
      <div className="container my-5 py-5">
        <Tabs>
          <div className="row">
            <div className="col-md-3">
              <TabList className="vertical-tab-list">
                <div>
                  <Tab className="vertical-tab d-flex align-items-center gap-2 ">
                    <FaUsers /> User Lists
                  </Tab>
                </div>
             
              </TabList>
            </div>
            <div className="col-md-9">
              <TabPanel>
                <UserTableAdmin />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </RequireAuth>
  );
}
