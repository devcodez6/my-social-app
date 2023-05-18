import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from  "../../components/Feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"


export default function Profile() {
  return (
        <>  
        <Topbar/>
        <div className= "profile">
        <Sidebar/>
        <div className="profileRight">
           <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" 
            src="Asset/Asset/natural3.jpg" 
            alt=""
            />
            <img className="profileUserImg" 
            src="Asset/Asset/index11.jpg" 
            alt=""
            />
            </div>
            <div className="profileInfo">
             <h4 className="profileInfoName">Oniyide Abdurrazzaaq</h4>
             <span className="profileInfoDesc">Hello friends</span>
            </div>
           </div>
           <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
        </div>
        </div>
        </>
  )
}
