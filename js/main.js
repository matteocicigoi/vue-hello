const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo: 'Vue Hello',
      image : 'img/01.jpg'
    }
  }
}).mount('#app');