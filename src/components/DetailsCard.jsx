import React from "react";
import Tabs from "./Tabs";
import Card from "./customComponents/Card";

const DetailsCard = () => {
  return (
    <Card>
      <Tabs tabs={["About", "Skills & Certificates", "Posts", "Spaces"]} />
    </Card>
  );
};

export default DetailsCard;
