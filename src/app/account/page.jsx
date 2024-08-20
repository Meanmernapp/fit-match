"use client";
import ClientDashabord from "@/components/account/ClientDashabord";
import AdminDashboard from "@/components/admin-dashboard/AdminDashboard";
import TrainerDashboard from "@/components/trainer-dashboard/TrainerDashboard";
import UnAuthorized from "@/components/UnAuthorized";
import { GetUserById, LogOut, logoutAll } from "@/services/auth/authSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [roleUser, setRoleUser] = useState();

  const isLoading = useSelector((state) => state?.commonSlice?.isLoading);
  const regiterTrainerProfile = useSelector(
    (state) => state?.trainerSlice?.regiterTrainerProfile);
  const updateUser = useSelector((state) => state?.authSlice?.updateUser);
  const router = useRouter();

  const userDataFromCookie = Cookies?.get("userData");

  useEffect(() => {
    if (userDataFromCookie) {
      const userObject = JSON?.parse(userDataFromCookie);
      setRoleUser(userObject);
      dispatch(GetUserById(userObject?.userId));
    } else {
      Cookies.set("userData", []);
      router.push("/signin", { scroll: true });
      dispatch(LogOut());
      dispatch(logoutAll());
    }
  }, [setRoleUser, regiterTrainerProfile, userDataFromCookie,updateUser]);

  let dashboardContent;
  switch (roleUser?.usertype) {
    case "Customer":
      dashboardContent = <ClientDashabord />;
      break;
    case "Admin":
      dashboardContent = <AdminDashboard />;
      break;
    case "Trainer":
      dashboardContent = <TrainerDashboard />;
      break;
    default:
      dashboardContent = <UnAuthorized />;
      break;
  }

  return (
    <>
      {isLoading && (
        <div id="preloader" style={{ zIndex: 9999999 }}>
          <div id="loader"></div>
        </div>
      )}
      {dashboardContent}
    </>
  );
};

export default Dashboard;
