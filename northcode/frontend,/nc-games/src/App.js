import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Welcome from './components/welcome'
import Catergories from './components/catergories'
import SingleReview from "./components/singleReview";

import User from "./components/users.comp";

function App() {
 
 
  return (
 
    <BrowserRouter>
      <div className="main">
        
        <Header></Header>
        <Nav />
          <Routes>
          <Route path="/" element={<Welcome />}>Home</Route>
          <Route path="/reviews" element={<Reviews />}> 
          Reviews</Route>
          <Route path='/categories' element={<Catergories />}></Route>
          <Route  path='/reviews/:review_id' element={<SingleReview value={'tickle122'} />}></Route>
          <Route path='/users/:username' element={<User /> } ></Route>
         

        </Routes>
          

        
      </div>
    </BrowserRouter>
   
  )
}

export default App;
