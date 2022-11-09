import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import store from "./store/store";

const app = createApp(App);

const components = import.meta.globEager("./components/**/*.vue")

Object.entries(components).forEach(([ path, definition]) => {
  const component = path.split('/').pop().replace(/\.\w+$/, "");
  app.component(component, definition.default);
});

app.use(router);
app.use(store);
app.mount("#app");
