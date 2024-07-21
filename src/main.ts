import Lara from "@primevue/themes/lara";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Lara } });
app.component("Button", Button);

app.mount("#app");
