import React from "react";
import { IconContainer } from "./SocialIcon.styled";

const SocialIcon = () => {
  const Socials = ["facebook", "instagram", "pinterest", "twitter", "youtube"];
  return (
    <IconContainer>
      {Socials.map((social) => (
        <div key={social}>
          <box-icon type="logo" name={social} color="#fff"></box-icon>
        </div>
      ))}
    </IconContainer>
  );
};

export default SocialIcon;
