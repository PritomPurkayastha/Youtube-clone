import React from "react";
import SuggestedVideos from "./SuggestedVideos";
import WatchVideos from "./WatchVideos";
import Comments from "./Comments";
import "./Watch.css";
import SortIcon from "@mui/icons-material/Sort";
import { Avatar } from "@mui/material";


let commentCount = localStorage.getItem("commentCount");
function Watch() {
  // console.log(id);
  // console.log(views);
  return (
    <div className="watch">
      <div className="watchPage">
        <WatchVideos className="video"/>
        <SuggestedVideos className="suggestedVideos"/>
      </div>
      <Comments/>
    </div>
  );
}

export default Watch;
