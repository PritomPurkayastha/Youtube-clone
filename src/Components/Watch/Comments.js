import React from 'react'
import SortIcon from "@mui/icons-material/Sort";
import { Avatar } from "@mui/material";
import "./Comments.css"

let commentCount = localStorage.getItem("commentCount");

function Comments() {
  return (
    <div className='comments'>
         <div className="commentCount">
        {commentCount} <span>Comments</span>
        <SortIcon /> <p>SORT BY</p>
      </div>
      <div className="commentSection">
        <div className="addComment">
          <Avatar />
          <form>
            <input type="text" placeholder="Add a comment"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Comments