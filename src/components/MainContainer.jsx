import React from "react";
import ProfileCard from "./ProfileCard";

const MainContainer = () => {
  return (
    <div>
      <div className="bg-blue-500 px-3 md:px-8 h-40" />
      <div className="mt-0">
        <div className=" h-auto mt-0">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-6">
              <div className="xl:col-start-1 xl:col-end-3 pr-4 mb-16 ">
                <ProfileCard />
              </div>
              <div className="xl:col-start-3 xl:col-end-7 px-4 mb-16">
                {/* <SettingsForm /> */}
                sett
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
