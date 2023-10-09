<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  // 함수를 값으로 가져온다.
  inject: ['selectTopic',],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>