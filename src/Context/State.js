import setContext from "./Context";
import { useState } from "react";
import React from "react";

function State({ children }) {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [views, setViews] = useState(null);
  const [likes, setLikes] = useState(null);
  const [description, setDescription]=useState(null);
  const[showMore, setShowMore]=useState(true);
  const [commentCount, setCommentCount]=useState(null);

  if (id !== null) {
    localStorage.setItem("id", id);
  }
  if (title !== null) {
    localStorage.setItem("title", title);
  }
  if (views !== null) {
    // console.log(views);
    localStorage.setItem("views", views);
  }
  if (likes !== null) {
    // console.log(views);
    localStorage.setItem("likes", likes);
  }
  if(description !== null){
    localStorage.setItem("description", description);
  }
  if(commentCount !== null){
    localStorage.setItem("commentCount", commentCount);
  }

  return (
    <setContext.Provider
      value={{
        menu,
        setMenu,
        data,
        setData,
        id,
        setId,
        channelData,
        setChannelData,
        setTitle,
        setViews,
        setLikes,
        setDescription,
        showMore,
        setShowMore,
        setCommentCount,
      }}
    >
      {children}
    </setContext.Provider>
  );
}

export default State;
