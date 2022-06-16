import React, { useState, useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import logo from "./YouTube-Logo.wine.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import setContext from "../Context/Context";

function Header() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  
  const { menu, setMenu } = useContext(setContext);
  return (
    <div className="header">
      <div className="header-logo">
        <MenuIcon
          className="burgerMenu"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <img
          src={logo}
          alt="logo"
          className="headerLogo"
          onClick={() => {
            navigate("/");
          }}
        ></img>
      </div>
      <div className="search">
        <div className="input">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate(`/search/${input}`);
            }}
          >
            <input
              placeholder="Search"
              type="text"
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </form>
          <SearchIcon
            className="searchicon"
            onClick={() => {
              navigate(`/search/${input}`);
            }}
          />
        </div>
        <KeyboardVoiceIcon className="mic" />
      </div>
      <div className="headerIcons">
        <VideoCallOutlinedIcon className="header_icons" />
        <AppsIcon className="header_icons" onClick={Dropdown} />
        <NotificationsNoneOutlinedIcon className="header_icons" />
        <Button variant="outlined" className="sign-in" onClick={() => {}}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Header;
function Dropdown() {
  return (
    <>
      <select>
        <option></option>
      </select>
    </>
  );
}
