var app = Vue.createApp({

  data() {
    return {
      myName: 'Sujin Cho',
      myAge: 31,
      img: 'https://st2.depositphotos.com/2166845/9454/i/950/depositphotos_94542424-stock-photo-three-golden-retriever-puppies-walking.jpg'
    };
  },

  methods: {
    plusFive() {
      return this.myAge + 5;
    },
    fNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');