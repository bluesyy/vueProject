<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>

    <new-friend
      @add-contact="addContact"    
    >
    </new-friend>
    <ul>
      <!-- 
        props 를 사용할때는 앵간하면 케밥케이스로 표시
       -->
       <!-- 
        v-for 를 사용해서 표시
        이때는 :key 값이 필수
        -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email" 
        :is-favorite="friend.isFavorite"     
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      >
      </friend-contact>
      
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],
    };
  },
  methods: {

    // friendId 이름은 임의로 정해주면 된다.
    // this.id == friendId
    toggleFavoriteStatus(friendId) {
      console.log(friendId);
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },

    // 매개변수 순서는 emits과 일치해야 한다.
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString,
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(newFriendContact);
    },

    deleteContact(friendId) {
      // 필터로 덮어쓰는 방식으로 구현한다.
      // id 와 friendId 가 같지 않은지 확인
      // vue 가 변경사항을 감지하면 리렌더링 한다.
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>