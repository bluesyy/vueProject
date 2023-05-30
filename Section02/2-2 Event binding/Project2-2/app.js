const app = Vue.createApp({
  data() {
    return {
      userIn: '',
      confirmedInput: ''
    }
  },
  methods: {
    btnEvent() {
      alert('Button Clicked!');
    },
    saveInput(event) {
      this.userIn = event.target.value;
    },
    enterInput() {
      this.confirmedInput = this.userIn;
    }
  }
})

app.mount('#assignment')