const app = Vue.createApp({
  data() {
    return {
      count: 0

    }
  },
  methods: {
    add(num) {
      this.count = this.count + num;
    }
  },

  computed: {
    result() {
      if (this.count < 37) {
        return 'Not there yet';
      } else if (this.count === 37) {
        return this.count;
      } else {
        return 'Too much!';
      }
    }
  },

  /**
   * result 변경시 동작한다.
   */
  watch: {
    result() {
      const that = this;
      setTimeout(function() {
        that.count = 0;
      }, 2000);
    }
  }
})

app.mount('#assignment');