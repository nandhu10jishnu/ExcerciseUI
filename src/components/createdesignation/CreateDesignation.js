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
        name: "",
        description:"",
        active:"",
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
    async saveUser() {
          alert(this.createname);
          await axios.post(this.baseUrl + `add`, this.createname, this.head
          )
              .then(res => {

                  console.log("Designation  created successfully", res);
                
                  alert("Designation created successfully.")
              })
              .catch(err => {

                  console.log("error in creating Designation", err.response.data.detail);
                  if (err.response.data.errors.DomainValidations[0].includes("Designation is already taken")) {
                      alert("A User with same User designation already exists.");
                  }
                  else {
                      alert(err.response.data.detail);
                  }
              })
      }
  },
};
