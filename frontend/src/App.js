import React, { useState, useEffect } from "react";
import "./App.css";
import ChannelsService from "./services/ChannelService";
import UsersService from "./services/UserService";
import ReviewsService from "./services/ReviewService";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import AllChannelsPage from "./views/AllChannelsPage";
import UserPage from "./views/UserPage";
import ChannelPage from "./views/ChannelPage";

function App() {
  const [channels, setChannels] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  // Have set of images to use for demo

  useEffect(() => {
    retrieveChannels();
    retrieveUsers();
    retrieveReviews();
  }, []);

  const retrieveChannels = () => {
    ChannelsService.getAll().then((response) => {
      setChannels(response.data);
      // console.log(response.data);
    });
  };
  const retrieveUsers = () => {
    UsersService.getAll().then((response) => {
      setUsers(response.data);
      // console.log(response.data);
    });
  };
  const retrieveReviews = () => {
    ReviewsService.getAll().then((response) => {
      setReviews(response.data);
      // console.log(response.data);
    });
  };

  function printUser() {
    console.log(users[0]);
    console.log(channels[0]);
  }
  printUser();

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage channels={channels} users={users} />}
      />
      <Route
        path="/channels"
        element={<AllChannelsPage channels={channels} users={users} />}
      />

      <Route
        path="/channels/:id"
        element={<ChannelPage channels={channels} users={users} />}
      />
      <Route
        path="/User"
        element={<UserPage channels={channels} users={users} />}
      />
    </Routes>
  );
}
export default App;
