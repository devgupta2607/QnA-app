import { Avatar } from '@material-ui/core'
import React from 'react'
import "../css/QnABox.css"

function QnABox() {
    return (
        <div className="qnaBox">
            <div className="qnaBox_info">
                <Avatar />
                <h5>Username</h5>
            </div>
            <div className="qnaBox_qna">
                <p>What is your question or link?</p>
            </div>
        </div>

    )
}

export default QnABox