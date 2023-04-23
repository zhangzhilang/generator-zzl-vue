import { createApp } from "vue";
import App from "./app.vue";
import ElementPlus from 'element-plus'

import "./style.css";
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.mount("#app");
