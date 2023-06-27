import React, { useState } from "react";
import About from "./About";
import OtherTabs from "./OtherTabs";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const renderSwitch = (tab) => {
    switch (tab) {
      case "About":
        return <About />;
      case "Skills & Certificates":
        return <OtherTabs title={tab} />;
      case "Posts":
        return <OtherTabs title={tab} />;
      case "Spaces":
        return <OtherTabs title={tab} />;
      default:
        break;
    }
  };
  return (
    <div className="mt-4 ">
      <div className="flex flex-col">
        <div className="">
          <div className="flex mb-4 w-full justify-between border-b-2 border-grey-500 p-4 pb-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-t transition bg-white text-xs md:text-lg ${
                  activeTab === tab
                    ? "border-b-4 border-violet-500 text-violet-800"
                    : "text-gray-700"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${activeTab === tab ? "block" : "hidden"} bg-white`}
            >
              {renderSwitch(tab)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
