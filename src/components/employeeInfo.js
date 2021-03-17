import React from "react";

function employeeInfo(props) {
  return (
      <div className="text area">
    <ul className="list-group">
    <li className="list-group-item"><img alt={props.name} src={props.pictuure}/></li>
    <li className="list-group-item">{props.name.first} {props.name.last}</li>
    <li className="list-group-item">{props.phone}</li>
    <li className="list-group-item">{props.email}</li>
  </ul>
  </div>
  );
  
}

export default employeeInfo;
