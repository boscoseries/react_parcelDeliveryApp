import React from "react";
import "./styles.css";

export default function Card({ header, footer, body }) {
  return (
    <div className="top-margin">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">
            <h5>{header}</h5>
          </div>
          <div className="card-body">{body}</div>
          <div className="card-footer bg-transparent ">{footer}</div>
        </div>
      </div>
    </div>
  );
}