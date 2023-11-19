import axios from "axios";
export default {
    name: "CreateCountry",
    data() {
      return {
                                
         baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/country/`,                       // Local Url
         country: {
          Name: "",
          Description:"",
          
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
        async saveCountry() {
              await axios.post(this.baseUrl + `add`, this.country, this.head
              )
                  .then(res => {
    
                      console.log("Country  created successfully", res);
                    
                      alert("Country created successfully.");
                      
                  })
                  .catch(err => {
    
                      console.log("error in creating Country", err.response.data.detail);
                      
                          alert(err.response.data.detail);
                      
                  })
          }
      },
    };