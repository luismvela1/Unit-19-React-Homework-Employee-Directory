import React, { Component } from "react";
import Employees from "./employeeInfo.js";
import Search from "./employeeSearch.js";

class employeeList extends Component {
    state = {
        employees: [],
        search: "",
        employeeSortBy: [],

    }
};
componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture,dob`)
        .then(res => res.json())
        .then(json => {
            this.setState({ employees: json.results })
        })
};
sortByEmployees = () => {
    let { employees, search } = this.state;
    let employeeSortBy = employees.filter(sorted => {
        return (
            sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
            sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
            sorted.email.toLowerCase().includes(search.toLowerCase())
        )
    })
    this.setState({ employeeSortBy })
}
start = event => {
    this.setState({ search: event.target.value }, () => {
        this.sortByEmployees();
        this.setState({ sorted: value });
    });
};
render = () => {

    return (

        <div>
            <div className="jumbotron">
                <h2 className="display-4">
                    Employee Directory
          </h2>
                <p > you can Search below for employees by name or email.
          </p>
                <search
                    name="search"
                    start={this.start}
                    label="Search"
                />
            </div>
            <div className="container">

                <ul>
                    <li>Headshot  </li>
                    <li>Name</li>
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Birthday  </li>
                </ul>

                <body>


                    {!this.state.sorted ? this.state.employees.map(employee => (


                        < employees
                            key={employee.id.value}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            icon={employee.picture.medium}
                            dob={employee.dob.date}

                        />

                    ))
                        : this.state.employeeSortBy.map(employee => (

                            <employees
                                key={employee.id.value}
                                firstName={employee.name.first}
                                lastName={employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                                icon={employee.picture.medium}
                                dob={employee.dob.date}
                            />

                        ))};
          </body>


            </div>

        </div >

    )

};



export default employeeList;