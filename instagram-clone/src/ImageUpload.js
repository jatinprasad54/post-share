import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import {storage, db } from './Firebase';
import firebase from 'firebase';
import './ImageUpload.css';
import axios from './axios';

function ImageUpload({username}) {
    const [caption,setCaption] = useState('');
    const [image,setImage] = useState(null);
    const [progress,setProgress] = useState(0);
    const [url,setUrl] = useState("");
    
    const handleChange = (e) => {       //this select the file to be uploaded and stored in image
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    
    //this upload the image on firebase databse
    const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);    //here we get into storage and ref and then uploading the image on firebase DB

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            //progress function ...
            //belowed line is just copied
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes)*100
            );
            setProgress(progress);
        },
        (error) => {
            //Error function...
            console.log(error);
            alert(error.message);
        },
        () => {
            storage
             .ref("images")
             .child(image.name)
             .getDownloadURL()
             .then((url) => {      //Getting the link of image uploaded on firebase DB

                setUrl(url);

                axios.post('/upload',{         
                  caption: caption,
                  user: username,
                  image: url
                });
                 //this gets the link of image uploaded on firebase 
                 db.collection("posts").add({                       //adding the image with caption on firebase Collections DB
                     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                     caption: caption,
                     imageURL: url,
                     username: username,
                 })
                 setProgress(0);
                 setCaption("");
                 setImage(null);
             });
             //above code gets the link of image uploaded on firebase

            
        }
    );
    };

    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100" />
            <input type="text" placeholder="Enter a Caption..." onChange={event => setCaption(event.target.value)} value={caption}/>
            <div>   
            <input type="file" onChange={handleChange}/>
            <Button className="imageUpload__button" onClick={handleUpload}>
                Upload
            </Button>
            </div>
        </div>
    )
}

export default ImageUpload
