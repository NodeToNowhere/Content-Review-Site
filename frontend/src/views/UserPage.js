import React from "react";
import Header from "../components/Header";
import BlankBody from "../components/BlankBody";
import Sidebar from "../components/SideBar";
import "./UserPage.css";

function UserPage({users, channels}) {
  return (
    <div className="userPage">
      <Header />
      <div className="user__main">
        <Sidebar channels={channels} users={users}/>
        <BlankBody />
      </div>
    </div>
  );
}

export default UserPage;
