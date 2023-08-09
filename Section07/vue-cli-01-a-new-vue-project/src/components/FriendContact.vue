<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <!-- 아래와 같이 Hide Show 를 Details와 붙혀서 사용도 가능  -->
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
          id: 'a',
          name: 'ddd',
          phone: '20202020',
          email: 'dahfk@nadsfm.com'
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
};
</script>