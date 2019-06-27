import axios from 'axios'

const API_ROUTE = '/api/employee';
const EmployeeService = {
    get: function () {
        return axios.get(API_ROUTE);
    },

    getById: function (id) {
        const route = API_ROUTE + "/" + id;
        return axios.get(route);
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