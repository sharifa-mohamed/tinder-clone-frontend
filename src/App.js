import './App.css';
import Chat from './Components/Chat';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
import TinderCards from './Components/TinderCards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useState } from 'react';
import { SwipedContext } from './Context/SwipedContext';

function App() {

  const [selectedProfile, setSelectedProfile] = useState('');
  const [swipedRight, setSwipedRight] = useState(false);
  return (
    <Router>
      <div className="app">
        <SwipedContext.Provider value={{ selectedProfile, setSelectedProfile, swipedRight, setSwipedRight }}>
          <Routes>
            <Route exact path="/" element={
              <React.Fragment>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </React.Fragment>} />


            <Route exact path="/chats" element={
              <React.Fragment>
                <Header />
                <Chat />
              </React.Fragment>} />
          </Routes>
        </SwipedContext.Provider>
      </div>
    </Router>
  );
}

export default App;
