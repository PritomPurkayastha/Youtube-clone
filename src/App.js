// import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Videos from "./Components/Videos";
// import Filter from "./Components/Filter";
import SearchPage from "./Components/SearchPage";
import Watch from "./Components/Watch/Watch";
import { Routes, Route } from "react-router-dom";
import State from "./Context/State";
import Search from "@mui/icons-material/Search";

function App() {

  return (
    <State>
      <div className="App">
        <Header/>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main">
                <Sidebar />
                <div className="main-section">
                  {/* <Filter className="filterComponent"/> */}
                  <Videos />
                </div>
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div className="main">
                <Sidebar/>
                <SearchPage />
              </div>
            }
          />
          <Route path="/watch" element={<Watch/>} />
        </Routes>
      </div>
    </State>
  );
}

export default App;
