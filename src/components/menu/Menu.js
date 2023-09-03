import React, { useState } from "react";
import "./Menu.css";
import Knife from "./icons/Knife";
import MenuOptions from "./MenuOptions";
import { drinksMenu, sandwichMenu } from "./TheShoreMenu";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Drinks");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="menu-container">
        <h3 className="menu-try">TRY & DISCOVER</h3>
        <div className="menu-title-box">
          <Knife />
          <h1 className="menu-title">OUR MENU</h1>
          <Knife />
        </div>
        <hr className="menu-deco" />

        <div className="menu-toggle">
          <h3
            onClick={() => handleCategoryClick("Breakfast")}
            className={activeCategory === "Breakfast" ? "active-category" : ""}
          >
            Breakfast
          </h3>
          <h3
            onClick={() => handleCategoryClick("Lunch")}
            className={activeCategory === "Lunch" ? "active-category" : ""}
          >
            Lunch
          </h3>
          <h3
            onClick={() => handleCategoryClick("Drinks")}
            className={activeCategory === "Drinks" ? "active-category" : ""}
          >
            Drinks
          </h3>
        </div>

        <MenuOptions
          activeCategory={activeCategory}
          drinksMenu={drinksMenu}
          sandwichMenu={sandwichMenu}
        />
      </div>
    </>
  );
};

export default Menu;




