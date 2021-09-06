import { Add } from '@material-ui/icons'
import React from 'react'
import "../css/SidebarOptions.css"
function SidebarOptions() {
    return (
        <div className="sidebarOptions">
            <div className="sidebarOption">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1586767-100-yfigqysabqajdvdrbpfsjbsjuxhpigbd.jpeg" alt = ""/>
                <p>Data Structures</p>
            </div>
            <div className="sidebarOption">
                <img src="	https://qphs.fs.quoracdn.net/main-thumb-t-1513-100-ktlxdyfyihixtydnlisznwdcywqmteyp.jpeg" alt = ""/>
                <p>Algorithms</p>
            </div>
            <div className="sidebarOption">
                <img src="	https://qphs.fs.quoracdn.net/main-thumb-t-1162-100-4eoeIXYIiEDd6u22xlsrUnul3iiHgejb.jpeg" alt = ""/>
                <p>Web Development</p>
            </div>
            <div className="sidebarOption">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1803315-100-derbbjonlffysdjmbgrmfjdoabyncxlu.jpeg" alt = ""/>
                <p>Android Development</p>
            </div>
            <div className="sidebarOption">
                <img src="https://qphs.fs.quoracdn.net/main-thumb-ti-1578925-100-uuwzdwypcemayqdmalravrpgjynopmnt.jpeg" alt = ""/>
                <p>Machine Learning</p>
            </div>
            <div className="sidebarOption">
                <Add />
                <p className="text">Discover Technologies</p>
            </div>
        </div>
    )
}

export default SidebarOptions
