const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01022223333',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Lorenz',
          phone: '01025555533',
          email: 'julie@localhost.com',
        },
      ],
    }
  }
})

/**
 * 컴포넌트 생성
 * 컴포넌트의 이름은 항상 - 가 포함된 복수의 단어로 구성되어야 한다.(충돌을 피하기 위해)
 * 
 */
app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01022223333',
        email: 'manuel@localhost.com',
      }
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');