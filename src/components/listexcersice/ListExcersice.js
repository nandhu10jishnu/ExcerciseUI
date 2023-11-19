/* eslint-disable */
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "ListExcersice",
  
  data() {
    return {
      
      baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/exercises/`,                       // Local Url
      excersicelist:"",
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
     this.getallExcersice();
   },
   methods: {
    
    async getallExcersice(){

      await axios.get(this.baseUrl,this.head)
      .then(res => {

        console.log(" Excersice List", res);
        this.excersicelist=res.data;
    })
    .catch(err => {
            alert(err); 
    })
    },
    async deleteExcersice(id){
        var confirmed = confirm("Are you sure you want to delete this excersice?");
      if (confirmed == true){
        await axios.delete(this.baseUrl+id,this.head)
      .then(res => {

        console.log(" Excersice Deleted Successfully", res);
        alert("Excersice Deleted Successfully")
        this.getallExcersice();
    })
    .catch(err => {
            alert(err); 
    })
        
      }
        
    },
    
    }


   }

