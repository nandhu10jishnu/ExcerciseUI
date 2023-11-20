/* eslint-disable */
import axios from "axios";
import store from '@/store';

export default {
  name: "ListCountry",

  data() {
    return {

      baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/country/`,                       // Local Url
      countrylist: "",
      idtoken: "",
      head: "",

    };

  },
  async mounted() {

    this.idtoken = store.getters.getToken;
    this.head = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.idtoken,
      }
    };
    this.getallCountry();
  },
  methods: {

    async getallCountry() {

      await axios.get(this.baseUrl, this.head)
        .then(res => {

          console.log(" Country List", res);
          this.countrylist = res.data;
        })
        .catch(err => {
          alert(err);
        })
    },
    async createpage() {
      this.$router.push(`/createCountry`);
    },
    async editCountry(id) {
      this.$router.push(`/updatecountry/` + id);
    },
    async deleteCountry(id) {
      var confirmed = confirm("Are you sure you want to delete this  country?");
      if (confirmed == true) {
        await axios.delete(this.baseUrl + id, this.head)
          .then(res => {

            console.log(" Country Deleted Successfully", res);
            alert("Country Deleted Successfully")
            this.getallCountry();
          })
          .catch(err => {
            alert(err);
          })

      }
    }


  }

}

