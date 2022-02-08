import mongoose from "mongoose";

//Setting the DB structure
const instance = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  comments: [],
  //comments: { type: [String], default: [] },
});

export default mongoose.model("posts", instance);
