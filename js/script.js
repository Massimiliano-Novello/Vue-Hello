const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: 'Benvenuto vue js',
        immagine: "https://www.sportoutdoor24.it/app/uploads/2015/06/pexels-jaime-reimer-2662116-670x470.jpg",
        classCss: "blue"
      }
    },
    methods: {
        changeColor() {

            if(this.classCss === "blue") {
                this.classCss = "red";
            } else {
                this.classCss = "blue";
            }
        }
    }
  }).mount('#app')
