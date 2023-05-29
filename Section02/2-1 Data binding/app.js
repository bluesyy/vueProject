const app = Vue.createApp({
  data() {

    // 항상 객체의 property를 반환한다.
    return {
      courseGoal: 'Finish the course and learn Vue!',
      courseGoal2: '<h2>Master Vue and build amazing apps!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  // 메소드 함수로 실행 할 함수를 정의
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // 여기서 this는 data내의 객체를 참조!
        return this.courseGoal;
      } else {
        return this.courseGoal2;
      }
    }
  }
});

// mount 메소드는 제어하고자 하는 html 코드 내의 DOM 요소를 고유하게 식별한다.
// 자식 요소도 제어할 수 있게된다.55ㄹ454ㅇㅇㄹㄹㅇㄹ
app.mount('#user-goal')