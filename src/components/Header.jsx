import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdNotificationsOutline, IoMdMenu, IoMdSearch } from "react-icons/io";

import IconButton from "./customComponents/IconButton";

const Header = ({ showSidebar, setShowSidebar }) => {
  const [nav, setNav] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleNavBar = () => {
    setNav(!nav);
    setShowSidebar(!nav ? "left-0" : "-left-80");
  };
  const handleProfileClick = () => {
    setProfile(!profile);
  };
  return (
    <nav className="border-b-2 border-violet-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center"></div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-500 border-r-2 border-slate-300">
                  <IoMdSearch size={"1.5rem"} />
                </span>
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search"
                  type="text"
                  name="search"
                />
              </label>

              <IconButton>
                <IoMdNotificationsOutline size={"1.5rem"} />
              </IconButton>
              <IconButton>
                <AiOutlineMail size={"1.5rem"} />
              </IconButton>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => {
                      handleProfileClick();
                      setShowSidebar("-left-64");
                    }}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>

                {profile && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-violet-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-violet-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-violet-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden w-full justify-between flex">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              onClick={() => handleProfileClick()}
            />
            <button
              type="button"
              className="inline-flex items-center justify-center border-2 rounded-md text-lg p-2 text-black-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => handleNavBar()}
            >
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div>

      {profile && (
        <div
          className="md:hidden transition-opacity ease-in-out "
          id="mobile-menu"
        >
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-violet-700 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-violet-700 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-violet-700 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
