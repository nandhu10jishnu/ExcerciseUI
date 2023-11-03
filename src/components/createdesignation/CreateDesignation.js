/* eslint-disable */
import axios from "axios";
//import store from "../../store/index";

export default {
  name: "CreateDesignation",
  data() {
    return {
      //baseUrl: `${process.env.VUE_APP_HOSTED_URL}api/designation/`,                        // Hosted Url
       baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/designation/`,                       // Local Url
      createname: {
        Name: "",
        Description:"",
        Active:"",
      },
      idtoken: "",
      head: "",
      
    };
  },
  async mounted() {
   // this.idtoken = store.getters.getToken;
    this.head = {
        headers: {
           // Authorization: "Bearer " + this.idtoken,
            "Content-Type": "application/json",
        },
    };
  },
  methods: {
    async saveDesignation() {
          await axios.post(this.baseUrl + `add`, this.createname, this.head
          )
              .then(res => {

                  console.log("Designation  created successfully", res);
                
                  alert("Designation created successfully.");
                  this.$router.push(`/listdesignation`);
              })
              .catch(err => {

                  console.log("error in creating Designation", err.response.data.detail);
                  
                      alert(err.response.data.detail);
                  
              })
      }
  },
};
