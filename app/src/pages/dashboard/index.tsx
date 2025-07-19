import BusinessLayout from "@components/business-layout";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <BusinessLayout
      title="Dashboard"
      description="Welcome back! Here's your document review."
    >
      <div className="container-fluid"></div>
    </BusinessLayout>
  );
};

export default Dashboard;
