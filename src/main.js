import Vue from 'vue'
import App from './App.vue'
import './assets/sass/main.scss'
import './assets/css/style.css'
import router from './router'
import SimpleVueValidation from 'simple-vue-validator';
import VSocket from 'vue-socket.io'
import * as VueGoogleMaps from 'vue2-google-maps'
import store from './store'
import { auth } from './firebase'
import vuetify from './plugins/vuetify';

Vue.use(SimpleVueValidation);
Vue.use(
  new VSocket({
    debug: true,
    connection: 'http://localhost:4001',
  })
);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCDWzDeSgFcUDhRJOiDgFRYwlBxSCDLqPk',
    libraries: 'geometry', 
  },
});

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})

