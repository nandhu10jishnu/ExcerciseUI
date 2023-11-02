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
       update: {
        designationId: "",
        name: "",
        description: "",
      },
      const editEmployee = async (desId) => {
        // Your method logic
        router.push(`/updatedesignation/${desId}`);
    };
    
    export default {
      name: "ListDesignation",
      data() {
        return {
          // ... Your data properties
        };
      },
      mounted() {
        this.head = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        this.getallDesignation();
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
    
    }
  

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
}
