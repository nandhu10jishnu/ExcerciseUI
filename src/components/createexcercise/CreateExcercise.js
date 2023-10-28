/* eslint-disable */
import axios from "axios";
//import store from "../../store/index";

export default {
  name: "createExcercise",
  data() {
    return {
      //baseUrl: `${process.env.VUE_APP_HOSTED_URL}api/users/`,                        // Hosted Url
      baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/users/`,                       // Local Url
      createUser: {
        username: ""
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
          alert(1);
          await axios.post(this.baseUrl + `add`, this.createUser, this.head
          )
              .then(res => {

                  console.log("User created successfully", res);
                
                  alert("User created successfully.")
              })
              .catch(err => {

                  console.log("error in creating User", err.response.data.detail);
                  if (err.response.data.errors.DomainValidations[0].includes("Username is already taken")) {
                      alert("A User with same User name already exists.");
                  }
                  else {
                      alert(err.response.data.detail);
                  }
              })
      }
  },
};
