/* eslint-disable */
import axios from "axios";
import { useRouter } from "vue-router";
import store from "../../store/index";

export default {
  name: "EditCountry",
  props: { cId: String },
  data() {
    return {
       baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/country/`,                       // Local Url
       updatecountry: {
        Name: "",
        Description:"",
    
      },
      idtoken: "",
      head: "",
      countryid:"",
      
    };
  },
  async mounted() {
    this.idtoken = store.getters.getToken;
    this.head = {
        headers: {
           Authorization: "Bearer " + this.idtoken,
            "Content-Type": "application/json",
        },
    };
    this.countryid = this.$route.params.cId;
    await this.bindcountry();
  },
  methods: {
    async countryupdate() {
         
          await axios.put(this.baseUrl + `update/`+this.countryid, this.updatecountry, this.head
          )
              .then(res => {

                  console.log("Country  updated successfully", res);
                
                  alert("Country updated successfully.")
                  this.$router.push(`/listcountry`);
              })
              .catch(err => {

                  console.log("error in updating Designation", err.response.data.detail);
                 
                   alert(err.response.data.detail);
                  
              })
      },
      async bindcountry() {
       
        await axios.get(this.baseUrl + `${this.countryid}`,this.head
        )
            .then(res => {
                

                this.updatecountry = res.data;
            })
            .catch(err => {

                console.log(" Country detail", err.response.data.detail);
            
                
                    alert(err.response.data.detail);
                
            })
    },

  },
};