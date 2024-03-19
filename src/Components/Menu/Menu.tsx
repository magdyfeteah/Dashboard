import "./menu.scss";
import { NavLink } from "react-router-dom";

import { menu } from "../../data";
function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <NavLink
              to={listItem.url}
              className={({ isActive }) => (isActive ? "listItem active" : "listItem")}
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
