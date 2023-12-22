import React, { useEffect, useState } from 'react'
import CommentContent from './CommentContent';
import axios from 'axios';
const CommentList = () => {
    const [commentList, setCommentList] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('/api/comment/getComments');
            if (response.data.success) {
                setCommentList([...response.data.comments]);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();

        const intervalId = setInterval(fetchData, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="comment_wrap">
            {commentList.map((comment) => {
                return (
                    <CommentContent key={comment.id} comment={comment} />
                )
            })}
        </div>
    )
}

export default CommentList 