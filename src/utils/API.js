import axios from "axios";

const BASEURL = "https://randomuser.me/api?results=20";


const API = {
    getUsers: function() {
    return axios.get(BASEURL);
    
  },
};

export default API;