import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// http://localhost:3000/po//sts
// "THIS WORKS, YAY!" message doesn't work using the exp// ress application using local host 3000"
// the code below has been removed from "router.get("/");
// , (req, res) => {
//  res.send("THIS WORKS, YAY!");
// }

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/LikePost", likePost);

export default router;
