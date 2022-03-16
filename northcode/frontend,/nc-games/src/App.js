import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Welcome from './components/welcome'
import Catergories from './components/catergories'
import SingleReview from "./components/singleReview";
// import { UserContext } from "./contexts/userContext";
import Profile from "./contexts/userProfile";

function App() {
 
  // const [user, setUser] = useState({
	// 	username: '',
	// 	avatar_url: '',
	// });

  return (
  //  <UserContext.Provider value={{ user, setUser } }>
    <BrowserRouter>
      <div className="main">
        
        <Header></Header>
        <Nav />
          <Routes>
          <Route path="/" element={<Welcome />}>Home</Route>
          <Route path="/reviews" element={<Reviews />}> 
          Reviews</Route>
          <Route path='/categories' element={<Catergories />}></Route>
          <Route path='/reviews/:review_id' element={<SingleReview />}></Route>
          <Route path='/users/:username' element={<Profile /> } ></Route>

        </Routes>
          

        
      </div>
    </BrowserRouter>
   
  )
}

export default App;
