import React, { useEffect, useState } from 'react'
import CommentContent from './CommentContent';
import axios from 'axios';
const CommentList = () => {
    const [commentList, setCommentList] = useState([]);


    async function fetchData() {
        try {
            if ((await axios.post("/api/comment/getComments")).data.success) {
                setCommentList([...(await axios.post("/api/comment/getComments")).data.comments]);
            }
        } catch (error) {
            console.error("댓글 불러오기 실패:", error);
        }
    }

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(fetchData, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="comment_wrap">
            {commentList.map((comment) => {
                return (
                    <CommentContent comment={comment} />
                )
            })}
        </div>
    )
}

export default CommentList 