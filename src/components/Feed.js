import React from 'react'
import "../css/Feed.css"
import Post from './Post'
import QnABox from './QnABox'
function Feed() {
    return (
        <div className="feed">
            <QnABox />
            <Post />
        </div>
    )
}

export default Feed