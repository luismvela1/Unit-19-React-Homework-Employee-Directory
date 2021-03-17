import React from "react";

function employeeSearch(props){
    return(
        <div className="d-flex justify-content-center mx-auto">
          <form>
            <input
              placeholder="Search here"
              name="search"
              type="text"
              className="form-control-lg search-font mx-auto"
              onChange={(event) => props.startSort(event)}
            />
          </form>
        </div>
      );
    
    }
    export default employeeSearch;


