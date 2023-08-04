const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');
/**
 *  [뷰가 DOM을 업데이트 하는 방법]
 *  데이터에 업데이트가 발생하면 새로운 가상 DOM을 생성해서
 *  새로운 가상 DOM과 기존 가상 DOM을 비교한다.
 *  비교 후 차이점만 실제 DOM에 쓰인다.
 * 
 * 
 *  [뷰 생명주기 이론]
 *  자료 참고
 * 
 */
