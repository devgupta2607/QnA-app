import React from 'react'
import "../css/QnA.css"
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function QnA() {
    return (
        <div className="qna">
            <Navbar />
            <div className="qna_content">
                <Sidebar />
            </div>
        </div>
    )
}

export default QnA
