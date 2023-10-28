/* eslint-disable */
import axios from "axios";
//import store from "../../store/index";

export default {
  name: "EditDesignation",
  props: { dId: String },
  data() {
    return {
      //baseUrl: `${process.env.VUE_APP_HOSTED_URL}api/designation/`,                        // Hosted Url
       baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/designation/`,                       // Local Url
      updatedesignation: {
        Name: "",
        Description:"",
        Active:"",
      },
      idtoken: "",
      head: "",
      designationid:"",
      
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
    this.designationid = this.$route.params.dId;
    await this.binddesignation();
  },
  methods: {
    async designationupdate() {
         
          await axios.put(this.baseUrl + `update/`+this.designationid, this.updatedesignation, this.head
          )
              .then(res => {

                  console.log("Designation  updated successfully", res);
                
                  alert("Designation updated successfully.")
              })
              .catch(err => {

                  console.log("error in updating Designation", err.response.data.detail);
                 
                   alert(err.response.data.detail);
                  
              })
      },
      async binddesignation() {
       
        await axios.get(this.baseUrl + `${this.designationid}`,this.head
        )
            .then(res => {
                

                this.updatedesignation = res.data;
            })
            .catch(err => {

                console.log(" Designation detail", err.response.data.detail);
            
                
                    alert(err.response.data.detail);
                
            })
    },

  },
};