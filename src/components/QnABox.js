import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/QnABox.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
function QnABox() {
    const user = useSelector(selectUser);
    return (
        <div className="qnaBox">
            <div className="qnaBox_info">
                <Avatar src = {user.photo}/>
                <h5>{user.displayName}</h5>
            </div>
            <div className="qnaBox_qna">
                <p>What is your question or link?</p>
            </div>
        </div>

    )
}

export default QnABox