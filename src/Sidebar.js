import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerIcon">
                {/* <IconButton> to make the icon clickable */}
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>

                <IconButton>
                    <ChatIcon />
                </IconButton>
 
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
            </div>

            <div className="sidebar__search">

                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"></input> 
                </div>
                
            </div>
            
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar;
