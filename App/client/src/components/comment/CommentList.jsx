import React, { useEffect, useState } from 'react'
import CommentContent from './CommentContent';
import axios from 'axios';
const CommentList = () => {
    const [commentList, setCommentList] = useState([]);


    useEffect(() => {
        axios.post("/api/comment/getComments").then((response) => {
            if (response.data.success) {
                setCommentList([...response.data.comments]);
            }
        })

    }, []);

    // useEffect(() => {
    //     fetchData();

    //     const intervalId = setInterval(fetchData, 4000);
    //     return () => clearInterval(intervalId);
    // }, []);

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