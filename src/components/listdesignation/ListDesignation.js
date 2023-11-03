/* eslint-disable */
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "ListDesignation",
  
  data() {
    return {
      
      baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/designation/`,                       // Local Url
      designationlist:"",
      idtoken: "",
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
    
    async getallDesignation(){

      await axios.get(this.baseUrl,this.head)
      .then(res => {

        console.log(" Designation List", res);
        this.designationlist=res.data;
    })
    .catch(err => {
            alert(err); 
    })
    },
    async createpage(){
      this.$router.push(`/designation`);
    },
    async editEmployee(id){
      this.$router.push(`/updatedesignation/`+id);
    },
    async deleteEmployee(id){
      var confirmed = confirm("Are you sure you want to delete this designation?");
      if (confirmed == true){
        await axios.delete(this.baseUrl+id,this.head)
      .then(res => {

        console.log(" Designation Deleted Successfully", res);
        alert("Designation Deleted Successfully")
        this.getallDesignation();
    })
    .catch(err => {
            alert(err); 
    })
        
      }
    }


   }

}

