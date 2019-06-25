import axios from 'axios'

const API_ROUTE = '/api/employee';
const EmployeeService = {
    get: function () {
        return axios.get(API_ROUTE);
    },

    add: function(query) {
        return axios.post(API_ROUTE, query);
    },

    update: function () {
        
    },
    
    del: function () {
        
    }
};

export default EmployeeService;