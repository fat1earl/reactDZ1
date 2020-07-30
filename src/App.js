import React from "react";

import Header from "./components/Header";
import AddBtn from "./components/AddBtn";
import EditBtn from "./components/EditBtn";
import Input from "./components/Input";
import List from "./components/List";
import DelBtn from "./components/DelBtn";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <AddBtn />
      <EditBtn />
      <Input />
      <List />
      <DelBtn />
    </React.Fragment>
  );
};
