import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import Comment from "./Comment";
function Post({ user }) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div className="post">
          <div className="post__header">
            <Avatar
              className="post__avatar"
              alt={post.user}
              src="/static/images/avatar/1.jpg"
            />
            <h3>{post.user}</h3>
          </div>
          <img className="post__image" src={post.image} alt="post" />
          <h4 className="post__text">
            <strong>Caption: </strong>
            <span className="post__caption">{post.caption}</span>{" "}
          </h4>

          <Comment user={user} post={post} />
        </div>
      ))}
    </div>
  );
}

export default Post;
