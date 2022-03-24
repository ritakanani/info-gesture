import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Mailto = ({ email, subject, body, ...props }) => {
  return (
    <a
      class="mail-link"
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
    >
      {props.children}
      <BsFillEnvelopeFill />
    </a>
  );
};

export default Mailto;
