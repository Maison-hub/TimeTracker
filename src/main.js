import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import Aura from "@primevue/themes/aura";
import "./assets/main.css";
import ToastService from "primevue/toastservice";
import GetProjectsComponnent from "@/components/GetProjectsComponnent.vue";
import GetActiviteComponnent from "@/components/GetActiviteComponnent.vue";
import TimeEntries from "@/components/TimeEntries/TimeEntries.vue";
import NewActiviteComponnent from "./components/NewActiviteComponnent.vue";
import NewProjectsComponent from "./components/NewProjectsComponent.vue";
import LoginComponent from "./components/Profil/LoginComponent.vue";
import RegisterComponent from "./components/Profil/RegisterComponent.vue";


const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);
app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

//need to register all component here in order to use them in the widget store
//otherwise they trigger warnings
app.component("GetProjectsComponnent", GetProjectsComponnent);
app.component("GetActiviteComponnent", GetActiviteComponnent);
app.component("newActiviteComponnent", NewActiviteComponnent);
app.component("newProjectsComponnet", NewProjectsComponent);
app.component("LoginComponent", LoginComponent);
app.component("RegisterComponent", RegisterComponent);  
app.component("TimeEntries", TimeEntries);

//--------------------
app.use(ToastService);
app.directive("tooltip", Tooltip);

app.mount("#app");
