import axios from "axios";
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      if(res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black p-6">
      <img
        className="w-52"
        src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.jpg"
        alt="netflix-logo"
      />
      {
        user && (
          <div className="flex items-center">
        <div className="flex items-center">
        <IoIosArrowDropdown size={"24px"} color="white"/>
        <h1 className="text-lg font-semibold text-white capitalize">{user.fullname}</h1>
        </div>
        <div className="ml-4 flex gap-2">
          <button onClick={logoutHandler} className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button className="bg-red-800 text-white px-4 py-2">Search Movie</button>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default Header;
