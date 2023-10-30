/* eslint-disable */
import axios from "axios";

export default {
  name: "ListDesignation",
  data() {
    return {
      //baseUrl: `${process.env.VUE_APP_HOSTED_URL}api/designation/`,                        // Hosted Url
       baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/designation/`,                       // Local Url
       employees: [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Bob Johnson', email: 'bob@example.com' }
        ],
    };
  },
  async mounted() {
 
  },
  methods: {
    editEmployee(index) {
        // Implement your edit logic here
       
    },
    deleteEmployee(index) {
        // Implement your delete logic here
       
    }
  },
};
