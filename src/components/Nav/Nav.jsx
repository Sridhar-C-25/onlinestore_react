import React from "react";
import { Button, Logo, MyLink, Navbar } from "./Nav.styled";

const Nav = () => {
  const Links = [
    { name: "HOME", link: "#" },
    { name: "PRODUCTS", link: "#" },
    { name: "ABOUT US", link: "#" },
    { name: "CONTACT US", link: "#" },
  ];
  return (
    <Navbar>
      <Logo src="./src/assets/logo.png" />
      <ul>
        {Links.map((link) => (
          <MyLink key={link.name} active={link.name === "HOME"}>
            <a href={link.link}>{link.name}</a>
          </MyLink>
        ))}
      </ul>
      <Button>
        <box-icon name="cart" color="#fff"></box-icon>
        SHOP NOW
      </Button>
    </Navbar>
  );
};

export default Nav;
