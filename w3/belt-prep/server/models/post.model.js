const mongoose = require("mongoose");

// to represent a forum post, do not confuse this with an HTTP post request, like axios.post
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [2, "{PATH} must be at leaset {MINLENGTH} characters"],
    },
    description: {
      type: String,
    },
    imgUrl: {
      type: String,
      required: [true, "{PATH} is required"],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      default: 0,
    },
    primaryCategory: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [2, "{PATH} must be at leaset {MINLENGTH} characters"],
    },
    secondaryCategory: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [2, "{PATH} must be at leaset {MINLENGTH} characters"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
