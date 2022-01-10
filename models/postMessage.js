import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  location: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    type: Time,
    default: new Time(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
