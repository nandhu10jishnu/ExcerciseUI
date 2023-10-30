import { useStore } from "vuex";
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "loginExcersice",

  // data() {
  //   return {
  //     // Your data properties here
  //   };
  // },

  setup() {
    const store = useStore();
    const router = useRouter();
    
    const loginclick = async () => {
      // Your method logic
      router.push(`/listdesignation`);
    };

    onMounted(async () => {
      await store.dispatch("setNavbar", false);
    });

    onUnmounted(async () => {
      await store.dispatch("setNavbar", true);

    });

    return {
      loginclick, // Expose the function to the template
    };
  },
};
