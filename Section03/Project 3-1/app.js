const app = Vue.createApp({
  data() {
    return {
      inputValue: '',
      tasks: [],
      taskListIsVisible: true
    }
  },

  computed: {
    ButtonCaption() {
      return this.taskListIsVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputValue);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  }

})

app.mount('#assignment')