const express = require("express");
const router = express.Router();

const { Comment } = require("../model/Comment.js");

router.post("/submit", async (req, res) => {
    const { commentNum, comment, nickName, password } = req.body;

    try {
        const newComment = new Comment({
            commentNum,
            comment,
            nickName,
            password,
        });

        await newComment.save();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

router.post("/getComments", async (req, res) => {

    try {
        const comments = await Comment.find().exec();

        return res.status(200).json({ success: true, comments });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
})


router.post("/edit", async (req, res) => {
    const { commentId, comment, nickName, password } = req.body;

    try {
        await Comment.findOneAndUpdate(
            { _id: commentId },
            { comment, nickName, password }
        ).exec();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
})

router.post("/delete", async (req, res) => {
    const { commentId } = req.body;

    try {
        await Comment.deleteOne({ _id: commentId }).exec();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

module.exports = router;