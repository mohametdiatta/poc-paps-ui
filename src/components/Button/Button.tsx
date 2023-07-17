import React from "react";
import "../../tailwind.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className=" text-teal-100 bg-gray-950">{props.label}</button>;
};

export default Button;
