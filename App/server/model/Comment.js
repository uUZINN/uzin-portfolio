const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        commentNum: Number,
        comment: String,
        nickName: String,
        password: String,
        uploadTime: {
            type: Date,
            default: Date.now
        }
    },
    { collection: "comments" }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };