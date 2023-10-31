/* eslint-disable */
import axios from "axios";

export default {
  name: "ListDesignation",
  data() {
    return {
      //baseUrl: `${process.env.VUE_APP_HOSTED_URL}api/designation/`,                        // Hosted Url
       baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/designation/`,                       // Local Url
       designationlist:"",
       head: "",
    };
  },
  async mounted() {
    this.head = {
      headers: {
          "Content-Type": "application/json",
      },
  };
 this.getallDesignation();
  },
  methods: {
    editEmployee(index) {
        // Implement your edit logic here
       
    },
    deleteEmployee(index) {
        // Implement your delete logic here
       
    },
    async getallDesignation() {

      await axios
          .get(
              this.baseUrl, this.head
          )
          .then((res) => {
              console.log(" get designation", res);
              this.designationlist = res.data;
         
          })
          .catch((err) => {
            console.log(err);
            this.designationList =[]
            alert("No data found!")
          });
  },
  },
};
