import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';
//in VUE3 this syntax only works 
const app = createApp(App);
app.component('hello-world', HelloWorld);
//also we have to mount like this for it to work
app.mount('#app');
