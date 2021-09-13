import { Avatar} from '@material-ui/core'
import {MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'
import React, { useEffect, useState } from 'react'
import "../css/Post.css"
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {selectQuestionId, selectQuestionName, setQuestionInfo} from "../features/questionSlice"
import { selectUser } from '../features/userSlice'
import db from '../firebase'
import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
import 'firebase/compat/firestore';

Modal.setAppElement("#root");

function Post({Id,question,imageUrl, timestamp,ques_user,answer_count}) {

    const user = useSelector(selectUser);
    const [modalOpen,setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName);
    const [answer, setAnswer] = useState("");
    const [getAnswer, setGetAnswer] = useState([]);
    const [checkAnswer, setcheckAnswer] = useState(false);
    const [answerCount, setAnswerCount] = useState(answer_count);
    const increment = firebase.firestore.FieldValue.increment(1);

    useEffect(() => {
        if (questionId) {
            db.collection('questions').doc(questionId).collection('answer')
            .orderBy('timestamp', 'desc').onSnapshot 
            (snapshot => setGetAnswer(snapshot.docs.map((doc) => ({
                id : doc.id,
                answers: doc.data()
            }))
            )
            );
            setcheckAnswer(true);
        }
    }, [questionId]);

    const handleAnswer = async (e) => {
        e.preventDefault();

        if (questionId) {
            db.collection('questions').doc(questionId).collection('answer').add({
                answer: answer,
                user: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                questionId: questionId,
            });
            setAnswerCount(answerCount+1);
            const res = await db.collection('questions').doc(questionId).update({
                answer_count: increment
            }).then(() => {setAnswerCount(answerCount+1)});
            console.log(questionId, questionName);
            console.log(res);
            setAnswer("");
            setModalOpen(false);
        }
    }
    return (
        <div className="post" onClick = {() =>
            {
                if (checkAnswer === false)
                {
                    dispatch(setQuestionInfo({
                        questionId: Id,
                        questionName: question
                    }));
                }
                else {
                    setcheckAnswer(false);
                }
            } 
        }
        >
            <div className="post_info">
                <Avatar src={ques_user.photo}/>
                <h5>{ques_user.displayName ? ques_user.displayName : ques_user.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>{question}</p>
                    <button className="post_btnAnswer" onClick={() => setModalOpen(true)}>Answer</button>
                    <Modal 
                        isOpen={modalOpen}
                        onRequestClose={() => setModalOpen(false)}
                        shouldCloseOnOverlayClick={false}
                        style={{
                            overlay: {
                              width: 680,
                              height: 550,
                              backgroundColor: "rgba(0,0,0,0.8)",
                              zIndex: "1000",
                              top: "50%",
                              left: "50%",
                              marginTop: "-250px",
                              marginLeft: "-350px",
                            },
                          }}
                    >
                        <div className="modal_question">
                            <h1> {question} </h1> 
                            <p>
                                asked by{" "}
                                <span className="name">
                                {ques_user.displayName ? ques_user.displayName : ques_user.email}
                                </span>{" "}
                                {""}
                                on{" "}
                                <span className="name">
                                    {new Date(timestamp?.toDate()).toLocaleString()}
                                </span>
                            </p>
                        </div>
                        <div className="modal_answer">
                            <textarea value={answer} onChange = {(e) => setAnswer(e.target.value)} type="text" placeholder="Enter Your Answer" />
                        </div>
                        <div className="modal_button">
                            <button className="cancel" onClick={() => setModalOpen(false)}>Cancel</button>
                            <button className="add" type="submit" onClick={handleAnswer}>Add Answer</button>
                        </div>
                    </Modal>
                </div>
                
                <img src={imageUrl} alt="" />
            </div>
            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className="post_footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
            <div className="post_answer_count"
                onClick = {() =>
                    {
                        if (checkAnswer === false)
                        {
                            dispatch(setQuestionInfo({
                                questionId: Id,
                                questionName: question
                            }));
                        }
                        else {
                            setcheckAnswer(false);
                        }
                    } 
                }
            >
                {answerCount} Answers
            </div>
            {checkAnswer &&
                    <div className="post_answers">
                        {
                            getAnswer.map(({id,answers}) => (
                                <div key={id} className="post_answer">
                                    {
                                        Id === answers.questionId ? (
                                            <div className="post_ans_text">
                                                <div className="txt">{answers.answer}</div>
                                            
                                                <div className="ans_info">
                                                        {answers.user.displayName ? answers.user.displayName : answers.user.email}{" "}
                                                        on {" "}
                                                        {new Date(answers.timestamp?.toDate()).toLocaleString()}
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Post
