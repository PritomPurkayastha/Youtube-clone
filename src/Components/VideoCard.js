import React, { useEffect, useContext } from "react";
import { Avatar } from "@mui/material";
import "./VideoCard.css";
import setContext from "../Context/Context";
import Watch from "./Watch/Watch";
import { useNavigate } from "react-router-dom";

let API_key = "AIzaSyBn5QE9YxTqUIZJD8d0bY4E3rlOe2ja7RQ";
let channel_Url = "https://www.googleapis.com/youtube/v3/channels?";

function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// function getRequest(id) {
//   return fetch(
//     channel_Url +
//       new URLSearchParams({
//         key: API_key,
//         part: "snippet",
//         id: id,
//         maxResults: 1,
//         regionCode: "IN"
//       })
//   ).then((res) => res.json());
// }

function VideoCard({
  image,
  title,
  channel,
  views,
  likes,
  time,
  channelLogo,
  channelId,
  id,
  description,
  NumberOfComments,
}) {
  const {
    setId,
    setTitle,
    channelData,
    setChannelData,
    setViews,
    setLikes,
    setDescription,
    setShowMore,
    setCommentCount,
  } = useContext(setContext);

  let view = numberWithCommas(views);
  let like = nFormatter(likes);
  let comment=numberWithCommas(NumberOfComments);
  let navigate = useNavigate();
  // console.log(like)

  // useEffect(function(){
  //   getRequest(channelId).then((ytchannelData)=>{
  //     setChannelData(ytchannelData);
  //   })
  // },[channelId])

  // console.log(channelData);

  return (
    <div className="videoCard">
      {/* <img src={channelData.items[0].snippet.thumbnails.medium.url}/> */}
      <img
        className="thumbnail"
        src={image}
        alt="Thumbnail"
        onClick={() => {
          navigate(`/watch?v=${id}`);
          setId(id);
          setTitle(title);
          setViews(view);
          setLikes(like);
          setDescription(description);
          setShowMore(true);
          setCommentCount(comment);
        }}
      />
      <div className="videoCardInfo">
        <Avatar className="avatar" src={channelLogo} alt={channel} />
        <div className="videoTitle">
          <h4>{title}</h4>
          <span className="details">{channel}</span>
          <div className="details">
            {view} · {time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
