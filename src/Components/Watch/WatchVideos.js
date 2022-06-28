import React from "react";
import { useContext } from "react";
import ReactPlayer from "react-player";
import "./WatchVideos.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import { Avatar } from "@mui/material";
import setContext from "../../Context/Context";
import Comments from "./Comments";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function WatchVideos() {
  let id = localStorage.getItem("id");
  console.log("id" + id);
  let title = localStorage.getItem("title");
  let views = localStorage.getItem("views");
  let view = numberWithCommas(views);
  let likes = localStorage.getItem("likes");
  let description = localStorage.getItem("description");
  console.log(likes);

  const { showMore, setShowMore } = useContext(setContext);

  return (
    <div className="watchVideos">
      <div className="watchVideo">
        <ReactPlayer
          className="video"
          url={`https://www.youtube.com/embed/${id}`}
          playing={true}
          width="730px"
          height="410px"
          controls
        />
      </div>

      <div className="title">{title}</div>
      <div className="videoInfo">
        <div className="videoData">{view} views </div>
        <div className="interactiveIcons">
          <ThumbUpOutlinedIcon className="icons" /> <span>{likes}</span>
          <ThumbDownOffAltOutlinedIcon className="icons" />
          <span>DISLIKE</span>
          <ReplySharpIcon className="icons share" /> <span>SHARE</span>
          <ContentCutOutlinedIcon className="icons" /> <span>CLIP</span>
          <PlaylistAddOutlinedIcon className="icons" /> <span>SAVE</span>
          <MoreHorizSharpIcon className="icons" />
        </div>
      </div>
      <div className="channelInfo">
        <div className="channelName">
          <Avatar className="avatarIcon" />
          <div className="channelSubCount">
            <p className="channel">Channel Name</p>
            <p className="subsCount">100 subscribers</p>
          </div>
        </div>
        <div className="interect">
          <button className="subscribe">SUBSCRIBE</button>
          {/* <NotificationsNoneOutlinedIcon /> */}
        </div>
      </div>
      <div className="description">
        {showMore ? description.substr(0, 180) : description}
      </div>
      <div className="button">
        {showMore ? (
          <button
            className="showMore"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            SHOW MORE
          </button>
        ) : (
          <button
            className="showMore"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            SHOW LESS
          </button>
        )}
      </div>
      <Comments />
    </div>
  );
}

export default WatchVideos;
