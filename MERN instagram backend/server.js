import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";
import dbModel from "./dbModel.js";

//app.config
const app = express();
const port = process.env.PORT || 8080;

const pusher = new Pusher({
  appId: "1228972",
  key: "69305f7a54611f242df4",
  secret: "c0f32f180e67e2eb8605",
  cluster: "mt1",
  usetls: true,
});

//middleware
app.use(express.json());
app.use(cors());

//DB config
const connection_url =
  "mongodb+srv://admin-jatin:test123@cluster0.0euul.mongodb.net/instaDB?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB Connected");

  const changeStream = mongoose.connection.collection("posts").watch();

  changeStream.on("change", (change) => {
    console.log("Change Triggered on pusher...");
    console.log(change);
    console.log("End of Change");

    if (change.operationType === "insert") {
      console.log("Triggering Pusher ***IMG UPLOAD***");

      const postDetails = change.fullDocument;
      pusher.trigger("posts", "inserted", {
        user: postDetails.user,
        caption: postDetails.caption,
        image: postDetails.image,
      });
    } else {
      console.log("Unknown trigger from Pusher");
    }
  });
});

//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

//this allow us to upload an post
app.post("/upload", (req, res) => {
  const body = req.body;
  dbModel.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/sync", (req, res) => {
  dbModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/update", (req, res) => {
  const { _id, comment } = req.body;
  console.log(_id);
  console.log(comment);
  //const { value } = req.body;

  const post = dbModel.findById(_id);

  post.comments.push(comment);

  const updatedPost = dbModel.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
});

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));
