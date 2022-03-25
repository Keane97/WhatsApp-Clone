import React, { useEffect, useState } from "react";
import "./Sidebar.css";

import SidebarChat from "./SidebarChat";

// import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from "@material-ui/core";
import DonutlargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import db from "./firebase";
import {useStateValue} from './StateProvider'

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unSubscribe();
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">        
        <Avatar src= {user?.photoURL} />    {/* Accesses the metadata from the user details via login. (Check log for more attributes) */}
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutlargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVerIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
