import React from "react";
import ListItem from "./ListItem";

const items = ["Drink Tea 1", "Make homework 1", "Learn React"];

export default () => {
  return (
    <ul>
      <ListItem label={items[0]} />
      <ListItem label={items[1]} />
      <ListItem label={items[2]} />
    </ul>
  );
};
