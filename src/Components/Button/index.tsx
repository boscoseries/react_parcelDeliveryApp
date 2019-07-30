import React from "react";
import { NavLink } from "react-router-dom"
import "./styles.css";

export default function Button({ title, className,to }: any) {
  return (
    <div>
      <NavLink to={to} className={className}>{title}</NavLink>
    </div>
  )
}