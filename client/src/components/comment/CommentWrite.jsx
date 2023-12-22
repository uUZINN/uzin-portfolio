import React, { useState } from 'react'
import axios from 'axios';

const CommentWrite = () => {
    const [comment, setComment] = useState("");
    const [nickName, setNickName] = useState("");
    const [password, setPassword] = useState("");



    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!comment || !nickName || !password) {
            return alert("이름, 비밀번호, 내용을 모두 적어주세요✨");
        }

        let body = {
            comment: comment,
            nickName: nickName,
            password: password
        }

        
        axios.post("/api/comment/submit", body).then((response) => {
            if (response.data.success) {
                response.data.comment = comment;
                console.log(comment)
                
                alert("소중한 댓글 감사합니다! 😎")
                //window.location.reload();

                
                setComment('');
                setNickName('');
                setPassword('');
            } else {
                alert("댓글 작성 실패!!!!")
            }
        })
    }

    return (
        <div className="contact_input">
            <div className='comment_write_info'>
                <label htmlFor="" className="ko">
                    <input
                        type="text"
                        placeholder="NAME"
                        value={nickName}
                        onChange={(e) => { setNickName(e.currentTarget.value) }}
                    />
                    <span>01</span>
                </label>
                <label htmlFor="" className="ko">
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => { setPassword(e.currentTarget.value) }}
                    />
                    <span>02</span>
                </label>
            </div>
            <label htmlFor="" className="ko">
                <input
                    placeholder="ANY MESSAGE"
                    type='text'
                    value={comment}
                    onChange={(e) => { setComment(e.currentTarget.value) }}
                />
                <span>03</span>
            </label>
            <button 
            onClick={(e) => { 
                SubmitHandler(e)
                }}>
                    SEND IT!
            </button>
        </div>
    )
}

export default CommentWrite