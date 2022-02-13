import React, { useState } from "react";
import "./Post.css";
import { Input, TextField, Button, Typography } from "@material-ui/core";
import { commentPost } from "./actions/posts";
import { useDispatch } from "react-redux";
const Comment = ({ user, post }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState(post?.comments);

  const postComment = async () => {
    //e.preventDefault();
    const newComments = await dispatch(
      commentPost(`${user?.displayName}: ${comment}`, post._id)
    );
    setComment("");
    setComments(newComments);
  };

  return (
    <div className="post__comments">
      <div>
        {comments?.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1">
            <strong>{c.split(":")[0]}</strong> {c.split(":")[1]}
          </Typography>
        ))}
        {/* {comments?.map((c) => (
          <p>
            <b>{c}</b>
          </p>
        ))} */}
      </div>
      {user?.displayName && (
        <div>
          <TextField
            fullWidth
            rows={1}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment.length}
            color="primary"
            variant="contained"
            onClick={postComment}
          >
            Comment
          </Button>
        </div>
      )}
    </div>
  );
};

export default Comment;
