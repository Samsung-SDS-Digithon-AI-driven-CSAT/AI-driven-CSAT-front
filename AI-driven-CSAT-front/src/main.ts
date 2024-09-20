import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify CSS

// Import Vuetify Icon styles
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import router from './router';   // Import the router

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });

createApp(App).use(vuetify).use(router).mount('#app');
