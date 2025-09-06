import React from "react";
import { useAuth } from "@/services/authContext";
import Signout from "../authComponent/Signout"; 

const ProfileFloater = () => {
  const { userLoggedIn, currentUser } = useAuth();

  if (!userLoggedIn) return null; // don’t render if not logged in

  return (
    <div className="fixed right-12 top-15 z-50 w-70 border border-border shadow-md bg-white rounded-md p-4">
      <h1 className="font-semibold pb-5">
        {currentUser?.email ? currentUser.email.slice(0, 30) : ""}
      </h1>
      <Signout />
    </div>
  );
};

export default ProfileFloater;
