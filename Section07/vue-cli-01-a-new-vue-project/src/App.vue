<template>
  <header><h1>My friends</h1></header>
  <ul>
    <!-- 
      컴포넌트 사용
     -->
    <friend-contact></friend-contact>
    <friend-contact></friend-contact>
    <friend-contact></friend-contact>
  </ul>
</template>

<script>
// App.vue 파일의 default export 임을 알려준다.
export default {
  data() {
    return {
      friends: [
        {
          id: 'a',
          name: 'ddd',
          phone: '20202020',
          email: 'dahfk@nadsfm.com'
        },
        {
          id: 'b',
          name: 'dbbbdd',
          phone: '20231202020',
          email: 'dbbbb@nadsfm.com'
        }
      ]
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
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

#app li {
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

</style>