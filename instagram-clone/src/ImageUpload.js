import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { storage, db } from "./Firebase";
import firebase from "firebase";
import "./ImageUpload.css";

import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "./actions/posts";

function ImageUpload({ user }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    caption: "",
    user: "",
    image: "",
  });
  console.log(user?.displayName);
  const handleChange = (e) => {
    //this select the file to be uploaded and stored in image
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  //this upload the image on firebase databse
  const handleUpload = async (e) => {
    //e.preventDefault();
    console.log(postData);
    dispatch(createPost({ ...postData, user: user?.displayName }));

    //timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    //setProgress(0);
    setPostData({
      caption: "",
      user: "",
      image: "",
    });
  };

  return (
    <div className="imageupload">
      {/* <progress className="imageupload__progress" value={progress} max="100" /> */}

      <input
        type="text"
        placeholder="Enter a Caption..."
        onChange={(event) =>
          setPostData({ ...postData, caption: event.target.value })
        }
        value={postData.caption}
      />
      {/* <input
        type="text"
        placeholder="Enter a UserName"
        onChange={(event) =>
          setPostData({ ...postData, user: event.target.value })
        }
        value={postData.user}
      /> */}
      <div>
        {/* <input type="file" onChange={handleChange} /> */}
        <div>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </div>
        <Button
          className="imageUpload__button"
          color="primary"
          variant="contained"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}

export default ImageUpload;
