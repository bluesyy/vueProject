const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '', 
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      // 인덱스에서 1개의 요소만 삭제
      this.goals.splice(idx, 1);
    },
  }
});

app.mount('#user-goals');
