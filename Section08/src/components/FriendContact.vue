<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(true 이면 Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <!-- 템플릿에서 바로 emit 호출하기 
        이때 삭제를 하려면 식별자가 필요하니 props의 id 값도 넘겨준다.
    -->
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  /**
   * 컴포넌트에서는 카멜케이스를 사용해야 한다.
   */
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],

  // props를 객체로 사용해보자
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // function도 가능
      default: false, 
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    },
  },

  // emits의 활용
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if(id) {
  //       return true;
  //     } else {
  //       console.warn('Id is Missing');
  //       return false;
  //     }
  //   }
  // }, 
  
  emits: ['toggle-favorite', 'delete'],
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
      /**
       * 자식 데이터를 이런식으로도 쓸수있음.
       * isFavorite 은 부모의 prop
       */ 
      // friendIsFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;

      // 부모 컴포넌트 data에서 수신한다.
      // 이떄 this.id 값도 넘겨준다.
      this.$emit('toggle-favorite', this.id);
    },
  }
};
</script>