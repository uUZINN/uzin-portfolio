import React from 'react'
import profile from '../../assets/img/profile_blue-min.jpg';
import CommentArea from '../comment/CommentArea';

const MainSection04 = () => {
    return (
        <section id="mainSection" className="mainContact">
            <div className="main_contact">
                <div className="contact_text">
                    <h4>
                        One line of appreciation
                    </h4>
                    <CommentArea />
                    {/* <div className="comment_wrap">
                        <div className="comment_view ko">
                            <div className="avata"></div>
                            <div className="text">
                                <span>
                                    <span className="author">dbwls</span>
                                    <span className="date">2023-10-30 17:47</span>
                                </span>
                                <div className='comment_cont'>
                                    <p className='comment'>댓글 달아주셈</p>
                                    <div className='comment_toggle'>
                                        <img src={commentToggle} alt='' />
                                        <div className='view_list'>
                                            <Link to="#" className="modify">수정</Link>
                                            <Link to="#" className="delete">삭제</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment_view ko">
                            <div className="avata"></div>
                            <div className="text">
                                <span>
                                    <span className="author">dbwls</span>
                                    <span className="date">2023-10-30 17:47</span>
                                </span>
                                <div className='comment_cont'>
                                    <p className='comment'>dbwlsgkdldkdkdkdk</p>
                                    <div className='comment_toggle'>
                                        <img src={commentToggle} alt='' />
                                        <div className='view_list'>
                                            <Link to="#" className="modify">수정</Link>
                                            <Link to="#" className="delete">삭제</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment_view ko">
                            <div className="avata"></div>
                            <div className="text">
                                <span>
                                    <span className="author">dbwls</span>
                                    <span className="date">2023-10-30 17:47</span>
                                </span>
                                <div className='comment_cont'>
                                    <p className='comment'>dbwlsgkdldkdkdkdk</p>
                                    <div className='comment_toggle'>
                                        <img src={commentToggle} alt='' />
                                        <div className='view_list'>
                                            <Link to="#" className="modify">수정</Link>
                                            <Link to="#" className="delete">삭제</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment_view ko">
                            <div className="avata"></div>
                            <div className="text">
                                <span>
                                    <span className="author">dbwls</span>
                                    <span className="date">2023-10-30 17:47</span>
                                </span>
                                <div className='comment_cont'>
                                    <p className='comment'>dbwlsgkdldkdkdkdk</p>
                                    <div className='comment_toggle'>
                                        <img src={commentToggle} alt='' />
                                        <div className='view_list'>
                                            <Link to="#" className="modify">수정</Link>
                                            <Link to="#" className="delete">삭제</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_input">
                        <div className='comment_write_info'>
                            <label for="" className="ko">
                                <input type="text" placeholder="NAME" />
                                <span>01</span>
                            </label>
                            <label for="" className="ko">
                                <input type="text" placeholder="PASSWORD" />
                                <span>02</span>
                            </label>
                        </div>
                        <label for="" className="ko">
                            <textarea name="" id="" cols="30" rows="10" placeholder="ANY MESSAGE"></textarea>
                            <span>03</span>
                        </label>
                        <button>SEND IT!</button>
                    </div> */}
                </div>
                <div className="contact_profile">
                    <img src={profile} alt="" />
                </div>
            </div>
        </section>
    )
}

export default MainSection04