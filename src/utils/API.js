import axios from "axios";


export default {
    populateEmployees: function(results){
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
  }; 
  