import React from "react";
import Card from "./customComponents/Card";
import { IoIosPeople } from "react-icons/io";
import ProfilePicture from "../assets/profileImages/man.png";

const ProfileCard = () => {
  return (
    <Card>
      <div className="flex flex-wrap justify-center">
        <div className="w-40 h-40 px-4 -mt-24 rounded-full border-8 border-white flex justify-center items-center  max-w-xs">
          <img
            className="rounded-full shadow-lg max-w-full h-auto align-middle border-none "
            src={ProfilePicture}
          />
        </div>
      </div>
      <div className="text-center">
        <h5 className="text-violet-700 text-2xl font-bold leading-normal mt-0 mb-0">
          Girish Manchineeru
        </h5>
        <p className="text-violet-400 mb-2 text-base ">Developer</p>
        <div className="mt-0 mb-2 text-violet-600 flex items-center justify-center gap-2">
          <IoIosPeople />
          50 follower, 120 following
        </div>
        1
      </div>

      <div>
        <div className="flex justify-between">
          <h6>Make my profile visible to employer</h6>
          <div>
            <label
              htmlFor="toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input id="toggle" type="checkbox" className="sr-only" />
                <div className="block bg-gray-400 w-10 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
              </div>
            </label>
          </div>
        </div>
        <div></div>
      </div>
    </Card>
  );
};

export default ProfileCard;
