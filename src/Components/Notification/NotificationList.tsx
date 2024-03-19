
import "./notificationList.scss";

interface Notification {
  id: string; 
  message: string; 

  timestamp: string; 
}
const NotificationsMessages: Notification[] = [
  {
    id: "1",
    message: "Your profile has been updated successfully.",

    timestamp: "5 hours ago", // 10 seconds ago
  },
  {
    id: "2",
    message: "Your subscription has expired. Renew now!",

    timestamp: "1 day ago", // 5 minutes ago
  },
  {
    id: "3",
    message: "A new order has been placed.",

    timestamp: "4 days ago", // 2 hours ago
  },
  {
    id: "4",
    message: "Your latest blog post has been shared on social media.",

    timestamp: "2 weeks ago", // 1 day ago
  },
];
function NotificationList() {
  
  return (
    <div className="notificationsList">
      <h2>Notifications</h2>
      <hr />
      <div className="lists">
        {NotificationsMessages.map((notification) => (
          <div className="list" key={notification.id}>
            <div className="message">{notification.message}</div>
            <div className="time">{notification.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationList;
