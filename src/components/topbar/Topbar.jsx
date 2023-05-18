
import React from 'react'
import "./Topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"

export default function Topbar(){
    return (
        <div className="topbarcontainer">
         <div className="topbarLeft">
         <span className="logo">Lamasocial</span>
         </div>  
         <div className="topbarCenter">
            <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="search for friends,post or video" className="searchInput" />
         </div>
         </div>
         <div className="topbarRight">
         <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
         </div>
         <div className="topbarIcons">
         <div className="topbarIconItems">
         <Person/>
         <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIconItems">
         <Chat/>
         <span className="topbarIconBadge">2</span>
         </div>
         <div className="topbarIconItems">
         <Notifications/>
         <span className="topbarIconBadge">1</span>
         </div>
         </div>
         <img src="Asset/Asset/index1.jpg" alt="" className="topbarImg"></img>
        </div>
        </div>
    )
}