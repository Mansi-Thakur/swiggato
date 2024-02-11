import React from "react";
import foodLogo from "./../Assets/foodLogo.png";

export const Header = () => {
  return (
    <div className="globalNav">
      <div className="headerContainer">
        <a href="/_" className="logoImageContainer">
          <img src={foodLogo} alt="FoodLogo" className="headerLogo" />
        </a>
        <ul className="headerList">
        <li className="headerListItem">Cart</li>
        <li className="headerListItem">Contact Us</li>
        <li className="headerListItem">About Us</li>
          <li className="headerListItem">Home</li>
        </ul>
      </div>
    </div>
  );
};
