import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Mailto = ({ email, title, ...props }) => {
  return (
    <a href={`mailto:${email}?subject=InfoGesture Inquiry: ${title || ""}`}>
      {props.children}
      <BsFillEnvelopeFill size={24} />
    </a>
  );
};

export default Mailto;
