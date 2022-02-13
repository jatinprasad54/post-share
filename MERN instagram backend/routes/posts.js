import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  commentPost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.post("/:id/commentPost", commentPost);
export default router;
