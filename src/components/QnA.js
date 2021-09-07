import React from 'react'
import "../css/QnA.css"
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'
function QnA() {
    return (
        <div className="qna">
            <Navbar />
            <div className="qna_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default QnA
