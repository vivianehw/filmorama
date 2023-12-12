import React from "react";
import useStyles from "./content-menu-style";
import { Typography } from "@mui/material";

function ContentMenu() {
  const classes = useStyles();

  const menuItemsArray = [
    "Home",
    "Lista de Filmes",
    "Pesquisar",
    "Sobre",
  ];

  const lastItem = menuItemsArray.length - 1;

  return (
    <ul className={classes.container}>
      {menuItemsArray.map((item) => (
        <li
          key={menuItemsArray.indexOf(item)}
          className={classes.menuItemsContainer}
          style={
            menuItemsArray.indexOf(item) === lastItem ? { marginRight: 0 } : {}
          }>
          <Typography variant="button" className={classes.menuItems}>
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default ContentMenu;
