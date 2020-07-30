import React from "react";
import ListItem from "./ListItem";

const items = ["Clean room", "Go to shop", "Work", "Eat", "Repeat"];

export default () => {
  return (
    <ul>
      <ListItem label={items[0]} />
      <ListItem label={items[1]} />
      <ListItem label={items[2]} />
      <ListItem label={items[3]} />
      <ListItem label={items[4]} />
    </ul>
  );
};
