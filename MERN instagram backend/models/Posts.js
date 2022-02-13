import mongoose from "mongoose";

//Setting the DB structure
const instance = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  comments: { type: [String], default: [] },
});

const Posts = mongoose.model("posts", instance);

export default Posts;
