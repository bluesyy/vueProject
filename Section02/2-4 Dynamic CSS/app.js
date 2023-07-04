const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },

  methods: {
    boxSelected(box) {
      if (box === 'A') {
        /**
         * !this.boxASelected로 바꾸면
         * 간단하게 토글 기능이 추가된다.
         */
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
});

app.mount('#styling');