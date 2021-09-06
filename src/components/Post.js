import { Avatar} from '@material-ui/core'
import {MoreHorizOutlined, ShareOutlined } from '@material-ui/icons'
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'

import React from 'react'
import "../css/Post.css"

function Post() {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h5>Email</h5>
                <small>1/29/2021, 7:29:25 PM</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className="post_btnAnswer">Answer</button>
                </div>
                <div className="post_answer">
                    <p></p>
                </div>
                <img src="	https://qphs.fs.quoracdn.net/main-qimg-d538f5a097a60f58ef696a6d756a8c7b-mzj" alt="" />
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
        </div>
    )
}

export default Post
