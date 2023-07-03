const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    /**
     * data 프로퍼티에 있는 값을 그대로 사용한다면..
     * name 프로퍼티를 감시(watch)한다는 느낌이다.
     */
    // name이 바뀔 때마다 자동으로 실행!
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + 'Cho';
    //   }
    // }

    // watch의 이상적인 사용 예
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  computed: {
    // 함수처럼 사용하지 않고 변수처럼 사용한다.
    // 의존성중 하나가 변경된 경우에만 실행된다.
    // 이 경우에는 this.name 이 의존성이다.
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Cho';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
