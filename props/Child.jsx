import React from "react";
export default function Child(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img src={props.img} alt="" style={{ width: "200px" }} />
        </div>
        <div className="card-footer">
          <button>{props.btn}</button>
        </div>
      </div>
    </>
  );
}
