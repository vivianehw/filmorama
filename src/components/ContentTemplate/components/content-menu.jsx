import React from "react";
import useStyles from "./content-menu-style";

function ContentMenu() {
  const classes = useStyles();

  const menuItemsArray = ["Home", "Sobre", "Pesquisar"];

  function getYearMonthDay(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return {year, month, day};
  }

  const {year, month, day} = getYearMonthDay(new Date());

  return (
    <ul className={classes.container}>
      <li className={classes.menuItems}>teste</li>
      {menuItemsArray.map((item) => (
        <li
          variant={"a"}
          className={[classes.menuItems, classes.clickableItems].join(" ")}>
          {item}
        </li>
      ))}
      <li className={classes.menuItems}>teste</li>
    </ul>
  );
}

export default ContentMenu;
