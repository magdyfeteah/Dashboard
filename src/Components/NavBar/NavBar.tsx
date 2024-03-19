import { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import NotificationList from "../Notification/NotificationList";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [readnotification, setReadNotification] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !(notificationRef.current as any).contains(event.target as Node)) {
        setNotificationOpen(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationRef, setNotificationOpen]);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <div className="notification" ref={notificationRef}>
          <img
            src="/notifications.svg"
            alt=""
        
            onClick={() => {setNotificationOpen(prev=>!prev) , setReadNotification(true)}}
          />
          {!readnotification && <span>1</span>}
          {notificationOpen && <NotificationList />}
        </div>
       <Link to={'./users/john'}>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          
            />
          <span>john</span>
        </div>
            </Link>
      </div>
    </div>
  );
};

export default Navbar;
