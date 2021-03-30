import React from "react";



export function EmployeeList(props) {
    return (
        <div key={props.id}>
      <div className="list-overflow-container">
        
        <img src={props.thumbnail} className="rounded float-start"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.first}</h5>
    <h5 className="card-title">{props.last}</h5>
    <p className="card-text">{props.email}</p>
    <p className="card-text">{props.dob}</p>
      </div>
      </div>
      </div>
    );

  }
                           
    


export default EmployeeList;          
    



