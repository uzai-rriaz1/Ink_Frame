import React from "react";
import { logout } from "../../Store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";

function Logout_Btn() {
  const Dispatch = useDispatch();

  const Logout_handler = () => {
    authService.logout().then(Dispatch(logout()));
  };

  return (
    <button
      onClick={Logout_handler}
      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:text-teal-600 hover:border-teal-500 transition-colors duration-200"
    >
      Logout
    </button>
  );
}

export default Logout_Btn;
