import { createApp } from 'vue';

// 커스텀 파일에서 불러오는 경우에는 경로를 써줘야한다.
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

// 아래에 넣어주는거 잊지 말기
const app = createApp(App);

// 컴포넌트 사용
app.component('friend-contact', FriendContact);

app.mount('#app');
