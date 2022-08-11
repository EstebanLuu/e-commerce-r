import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ CartItem, user }) => {
  return (
    <>
      <Head />
      <Search CartItem={CartItem} user={user} />
      <Navbar />
    </>
  );
};

export default Header;
