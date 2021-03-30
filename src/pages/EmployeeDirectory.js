import React, { Component } from "react";
import API from "../utils/API";
import { Input } from "../components/employeeSearch";
import EmployeeJumbotron from "../components/employeeJumbotron";
import SubButton from "../components/SubButton"
import EmployeeList from "../components/employeeList"

class EmployeeDirectory extends Component {
    state = {
        resultsList: [],
        search: "",
        
    };
 employeeRender = () =>{
   API.populateEmployees(this.state.search)
   .then(res =>{
   this.setState({
     resultsList:res.data.results
    })})
    .catch(err => console.log(err));
 };

 handleInputChange = event => {
  const {name,value} = event.target;
  this.setState({
      [name]:value
  });
  console.log(value)
};

handleFormSubmit = event =>{
  event.preventDefault();
  this.employeeRender();

}


render(){
    return (
     <div> 
       <EmployeeJumbotron>
       <h1>EMPLOYEE DIRECTORY</h1>
       
       </EmployeeJumbotron>
       <form>
       <Input
 
        value={this.search}
        type="text"
        name="search"
        placeholder="SEARCH FOR EMPLOYEE HERE"
        onChange={this.handleInputChange}
        />
      <SubButton onClick={this.handleFormSubmit}/> 
        </form>
        {this.state.resultsList.map(results => {
                 return(
               <EmployeeList
                key={results._id}
                first={results.name.first}
                last={results.name.last}
                thumbnail={results.picture.thumbnail}
                email={results.email}
                dob={results.dob}
               />
                 )
            })}

</div>
    );
    }
}




export default EmployeeDirectory;