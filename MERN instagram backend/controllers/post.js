import Posts from "../models/posts.js";
import mongoose from "mongoose";
import express from "express";
const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await Posts.find().sort({ _id: -1 });

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Posts.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { user, caption, image } = req.body;

  const newPostMessage = new Posts({ user, caption, image });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const post = await Posts.findById(id);

  post.comments.push(value);

  const updatedPost = await Posts.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(updatedPost);
};
export default router;
