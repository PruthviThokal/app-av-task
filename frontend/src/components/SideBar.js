import React from "react";

const SideBar = () => {
  const handleClick = () => {
    localStorage.removeItem("url");
  };
  return (
    <div className="sidebar open">
      <ul className="nav-list">
        <li>
          <a href="/#">
            <i className="bx bx-list-plus"></i>
            <span className="links_name" onClick={handleClick}>
              New Connection
            </span>
          </a>
          <span className="tooltip">New Connection</span>
        </li>
        <li>
          <a href="/#">
            <i className="bx bx-star"></i>
            <span className="links_name">Favorite</span>
          </a>
          <span className="tooltip">Favorite</span>
        </li>
        <li>
          <a href="/#">
            <i className="bx bx-time-five"></i>
            <span className="links_name">Recent</span>
          </a>
          <span className="tooltip">Recent</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
