import React, { useState } from "react";
import { FcNext, FcInvite } from "react-icons/fc";
import { MdOutlineHome, MdPerson2, MdOutlineExplore } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";

import Header from "./Header";
import Gamer from "../assets/profileImages/gamer.png";
import Hacker from "../assets/profileImages/hacker.png";
import Man1 from "../assets/profileImages/man-1.png";
import Man from "../assets/profileImages/man.png";

const menu = [
  {
    name: "Home",
    link: "#",
    icon: <MdOutlineHome size={"2rem"} color="violet" />,
  },
  {
    name: "Job Invites",
    link: "#",
    icon: <FcInvite size={"2rem"} color="violet" />,
  },
  {
    name: "Analytics",
    link: "#",
    icon: <DiGoogleAnalytics size={"2rem"} color="violet" />,
  },
  {
    name: "My Profile",
    link: "#",
    icon: <MdPerson2 size={"2rem"} color="violet" />,
  },
  {
    name: "Explore",
    link: "#",
    icon: <MdOutlineExplore size={"2rem"} color="violet" />,
  },
];
const communitiesFeed = [
  {
    name: "India UI Developer",
    profile: Man1,
    link: "#",
    memberCount: "235",
  },
  {
    name: "Frontend Developers",
    profile: Gamer,
    link: "#",
    memberCount: "500",
  },
  {
    name: "React Developers",
    profile: Man,
    link: "#",
    memberCount: "750",
  },
  {
    name: "Full Stack Developers",
    profile: Hacker,
    link: "#",
    memberCount: "999",
  },
];
const footer = [
  { name: "About", link: "#" },
  { name: "Accessibility", link: "#" },
  { name: "Help", link: "#" },
  { name: "Privacy & Terms", link: "#" },
  { name: "Advertise", link: "#" },
  { name: "more", link: "#" },
];
const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState("-left-80");
  return (
    <>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="h-20" />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-80 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <div className="flex items-center h-16 border-b-2 border-violet-100">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <h4 className="block rounded-md px-3 py-2 text-base text-xl text-gray-400   cursor-pointer">
              Lernx
            </h4>
          </div>
          <div className="flex flex-col">
            <ul className="flex-col min-w-full flex list-none">
              {menu.map((item) => (
                <li
                  className="rounded-lg mb-4 hover:bg-slate-200 text-blue-100 flex gap-x-2 items-center"
                  key={item.name}
                >
                  {item.icon}
                  <a
                    href={item.link}
                    className="flex items-center gap-4 text-lg font-black text-violet-300 px-2 py-3 rounded-lg leading-4 focus:text-violet-950 lg:leading-7 lg:py-3"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <hr />
            </ul>
            <h6 className="flex items-center gap-4 text-lg font-black text-violet-900 px-4 py-4 pt-6">
              Communities Feed
            </h6>

            <ul className="flex-col min-w-full flex list-none">
              {communitiesFeed.slice(0, 3).map((item) => (
                <li
                  className="rounded-lg mb-4 hover:bg-slate-200 text-blue-100 flex"
                  key={item.name}
                >
                  <div>
                    <img src={item.profile} className="h-12 w-12" />
                  </div>
                  <div className="">
                    <a
                      href={item.link}
                      className="flex items-center gap-4 text-xs font-black text-violet-800 px-4 pt-3 rounded-lg "
                    >
                      {item.name}
                    </a>
                    <span className="flex items-center gap-4 text-xs font-black text-violet-400 px-4  rounded-lg ">
                      {item.memberCount} members
                    </span>
                  </div>
                </li>
              ))}
              {communitiesFeed.length > 3 && (
                <div className="flex items-center justify-center">
                  <a className="text-violet-500 cursor-pointer">
                    show more <FcNext className="inline-flex" />
                  </a>
                </div>
              )}
            </ul>

            <div className="flex-col min-w-full flex list-none absolute bottom-0 pb-10">
              <hr />
              <div className="flex items-center justify-center flex-wrap text-xs gap-y-4 pt-5">
                {footer.map((item) => (
                  <a
                    key={item.name + item.link}
                    className="font-black text-violet-400 px-3 "
                  >
                    {item.name}
                  </a>
                ))}
                <span className="text-lg text-violet-400">
                  <b className="text-violet-500 mr-2">Lernx</b>
                  &copy;2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
