import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
function Index(props) {
  return (
    <div>
      <Sidebar header={<Header />} />
    </div>
  );
}

export default Index;
