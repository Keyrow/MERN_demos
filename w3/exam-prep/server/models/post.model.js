const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },
    description: {
      type: String
    },
    imgUrl: {
      type: String,
      required: [true, `{PATH} is required.`]
    },
    likeCount: {
      type: Number,
      default: 0
    },
    dislikeCount: {
      type: Number,
      default: 0
    },
    primaryCategory: {
      type: String,
      required: [true, `{PATH} is required.`],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },
    secondaryCategory: {
      type: String,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    }
    // adminPw: {
    //   type: String,
    //   minlength: [8, "{PATH} must be at least {MINLENGTH} characters"]
    // }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
