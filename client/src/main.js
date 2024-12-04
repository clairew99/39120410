import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * [ Vuetify ]
*
* npm install vuetify
* https://vuetifyjs.com/en/getting-started/installation/#existing-projects
*/
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'md',
      },
})

/**
 * [ axios ]
 * npm install axios
 * 
 * https://axios-http.com/kr/docs/intro
 */
import { instance } from "@/api/axios";

app.provide('axios', instance);

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
