import React from "react";

const Button = ({
  btnClass,
  children,
  btnText,
}: {
  btnClass: string;
  children?: any;
  btnText: string;
}) => {
  return <button className={btnClass}>{btnText}</button>;
};

export default Button;
