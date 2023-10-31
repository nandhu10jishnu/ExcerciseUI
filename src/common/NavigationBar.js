import { useStore } from "vuex";
import { computed } from "vue";


export default {
  name: "navbar",
  setup() {

    const store = useStore();

    let getNavbarstatus = computed(() => {
      return store.getters.getNavbarstatus;
    });
    return {
      getNavbarstatus,
     
    }
  },
  
};

