import React, { useEffect, useState } from 'react'
import CommentContent from './CommentContent';
import axios from 'axios';
const CommentList = (props) => {
    const [commentList, setCommentList] = useState([]);


    useEffect(() => {
        let body = {
            comment: comment,
            nickName: nickName,
            password: password,
            commentId: props.comment._id,
        }
        axios.post("/api/comment/getComments", body).then((response) => {
            if (response.data.success) {
                setCommentList([...response.data.comments])
                console.log([...response.data.comments])
            }
        })
        const fetchData = async () => {
            try {
                const response = await axios.post("/api/comment/getComments");
                if (response.data.success) {
                    setCommentList([...response.data.comments]);
                }
            } catch (error) {
                console.error("댓글 불러오기 실패:", error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 4000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className="comment_wrap">
            {commentList.map((comment) => {
                return (
                    <CommentContent comment={comment} key={comment._id} />
                )
            })}
        </div>
    )
}

export default CommentList