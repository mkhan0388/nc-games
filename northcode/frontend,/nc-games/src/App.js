import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Welcome from './components/welcome'
import Catergories from './components/catergories'
import SingleReview from "./components/singleReview";
import User from "./components/users.comp";
import { UserProvider } from "./contexts/user";
import UserProfile from "./contexts/userProfile";

function App() {
 
  const [loggedInUser, setLoggedInUser] = useState('tickle122');

  return (
   <UserProvider value={loggedInUser}>
    <BrowserRouter>
      <div className="App">
        <UserProfile />
        <Header></Header>
        <Nav />
          <Routes>
          <Route path="/" element={<Welcome />}>Home</Route>
          <Route path="/reviews" element={<Reviews />}> 
          Reviews</Route>
          <Route path='/categories' element={<Catergories />}></Route>
          <Route path='/reviews/:review_id' element={<SingleReview />}></Route>
          <Route path='/user/:username' element={<User /> } ></Route>

        </Routes>

        
      </div>
    </BrowserRouter>
   </UserProvider>
  );
}

export default App;
