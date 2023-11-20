import axios from "axios";
import store from '@/store';

export default {
  name: "loginExcersice",

  data() {
    return {

      baseUrl: `${process.env.VUE_APP_LOCAL_URL}api/userinfo/`,                       // Local Url
      userlist: "",
      createuser: {
        Username: "",
        Password: ""
      },
      idtoken: "",
      head: "",
      errors: [false, false],
      errormessage: [],
    };

  },
  async mounted() {
    //this.idtoken = store.getters.getToken;
    this.head = {
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + this.idtoken,
      }
    };
    await store.dispatch("setNavbar", false);

  },
  async beforeUnmount() {
    await store.dispatch("setNavbar", true);
  },
  methods: {
    validate() {
      this.validateNull(this.createuser.Username, 0);
      this.validateNull(this.createuser.Password, 1);
    },
    validateNull(value, errorindex) {
      let defaultErrorMessage = [
        "Please enter Username",
        "Please enter Password"
      ];
      console.log(value.trim(), "trim fun ", value)
      if (value.trim() == "" || value.trim() == null) {
        this.errors[errorindex] = true;
        this.errormessage[errorindex] = defaultErrorMessage[errorindex];
      }
      else {
        this.errors[errorindex] = false;
      }

    },
    async loginclick() {

      this.validate();

      if (!this.errors.includes(true)) {
        
        await axios.post(this.baseUrl + `login`, this.createuser, this.head
        )
          .then(res => {

            console.log(res);

            store.dispatch("setToken", res.data.token);

            console.log("Token", store.getters.getToken);

            this.$router.push(`/listcountry`);

          })
          .catch(err => {

            alert(err);
          })
      }
    },

  }

}