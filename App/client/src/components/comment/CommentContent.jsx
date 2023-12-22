import React, { useEffect, useRef, useState } from 'react'
import commentToggle from '../../assets/img/comment_toggle.png';
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from 'axios';

const CommentContent = (props) => {
    const [modalFlag, setModalFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    const [comment, setComment] = useState('');
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');




    useEffect(() => {
        setComment(props.comment.comment);
        setNickName(props.comment.nickName);
        setPassword(props.comment.password);
    }, [props.comment]);

    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));


    const setModalPassword = (e) => {
        const enteredPassword = prompt('비밀번호를 입력해주세요:');
        if (enteredPassword === props.comment.password) {
            // alert("비밀번호 확인")
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            setEditFlag(false);
        }
    }


    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            comment: comment,
            nickName: nickName,
            password: password,
            commentId: props.comment._id,
        }
        axios.post("/api/comment/edit", body)
        .then((response) => {
            if (response.data.success) {
                alert("댓글 수정이 완료되었습니다.");
                props.comment.comment = comment;
            } else {
                alert("댓글 수정이 실패하였습니다.");
            }
            setEditFlag(false); 
            setModalFlag(false); 
        })
        .catch((error) => {
            console.error("댓글 수정 요청 실패:", error);
        });
        // axios.post("/api/comment/edit", body).then((response) => {
        //     if (response.data.success) {
        //         alert("댓글 수정이 완료되었습니다.");
        //     } else {
        //         alert("댓글 수정이 실패하였습니다.");
        //     }
        //     return window.location.reload();
        // })
    }

    const DeleteHandler = (e) => {
    e.preventDefault();
    const enteredPassword = prompt('비밀번호를 입력해주세요:');
    if (enteredPassword === props.comment.password) {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            let body = {
                comment: comment,
                nickName: nickName,
                password: password,
                commentId: props.comment._id,
            };

            axios
                .post('/api/comment/delete', body)
                .then((response) => {
                    if (response.data.success) {
                        alert('댓글이 삭제되었습니다.');
                        // window.location.reload();
                        props.comment.comment = comment;
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('댓글 삭제 실패');
                });
        }
    } else {
        alert('비밀번호가 일치하지 않습니다.');
        setEditFlag(false);
    }
};

    return (
        <div className="comment_view ko">
            <div className="avata"></div>
            <div className="text">
                <span>
                    <span className="author">{props.comment.nickName}</span>
                    <span className="date">{new Date(props.comment.uploadTime).toLocaleString()}</span>
                </span>
                <div className='comment_cont'>
                    {editFlag ? (
                        <form>
                            <input
                                className='comment'
                                type='text'
                                value={comment}
                                onChange={(e) => { setComment(e.currentTarget.value) }}
                            />
                            <div>
                                <button onClick={(e) => { SubmitHandler(e) }}>수정</button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setEditFlag(false);
                                    }}
                                >취소</button>
                            </div>

                        </form>
                    ) : (
                        <p className='comment'>{props.comment.comment}</p>
                    )}

                    <div className='comment_toggle'>
                        <span onClick={() => setModalFlag(true)}><img src={commentToggle} alt='' /></span>
                        {modalFlag && (
                            <div className='view_list' ref={ref}>
                                <button
                                    className="modify"
                                    onClick={() => {
                                        setEditFlag(true);
                                        setModalFlag(false);
                                        setModalPassword();
                                    }}
                                >
                                    <FaPencil />
                                </button>
                                <button
                                    className="delete"
                                    onClick={(e) => {
                                        DeleteHandler(e);
                                    }}
                                >
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default CommentContent