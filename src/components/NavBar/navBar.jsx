import React from "react";
import Logo from "../Logo/logo.jsx";
import SearchBar from "../SearchBar/search.jsx";
import Button from "../Button/button.jsx";

const NavBar = () => {
  return (
    <nav class="Navigation">
      <Logo />
      <SearchBar placeholderText="Search a album of your choice" />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
