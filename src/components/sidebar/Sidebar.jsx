import React from 'react'
import "./sidebar.css"
import {RssFeed,} from "@material-ui/icons"
import ChatIcon from '@material-ui/icons/Chat';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupIcon from '@material-ui/icons/Group';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
import { Users } from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';



export default function Sidebar() {
    return (
     <div className="sidebar">
        <div className="sidebarWrapper">
           <ul className="sidebarlist">
            <li className="sidebarListItem">
                <RssFeed clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
            </li>

            <li className="sidebarListItem">
                <ChatIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Chats</span>
            </li>

            <li className="sidebarListItem">
                <PlayCircleFilledIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Videos</span>
            </li>

            <li className= "sidebarListItem" >
                <GroupIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Groups</span>
            </li>
        
            <li className= "sidebarListItem" >
                <BookmarksIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>

            <li className= "sidebarListItem" >
                <HelpOutlineIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Questions</span>
            </li>

            <li className= "sidebarListItem" >
                <WorkOutlineIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Jobs</span>
            </li>

            <li className= "sidebarListItem" >
                <EventIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Event</span>
            </li>
            <li className= "sidebarListItem" >
                <SchoolIcon clasName="sidebarIcon"/>
                <span className="sidebarListItemText">Courses</span>
            </li>
           
            </ul>
            <button className="sidebarButton">Show More</button>
           <hr className="sidebarHr"/>
           <ul className="sidebarFriendList" >
            {Users.map (u=>(
                <CloseFriend key={u.id} user={u}/>
            ))}

           </ul>
            </div>
            </div>
    )
}