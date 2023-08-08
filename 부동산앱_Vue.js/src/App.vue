<!-- HTML 영역 -->
<template> <!-- html이랑 비슷함 !-->
  <!-- 상세 페이지 : 컴포넌트 -->
  <Modal @closeModal="is_open=false" :rooms = "rooms" :press_room_num ="press_room_num" :is_open = "is_open"/>

  <!-- 상단 메뉴 -->
  <div class="menu">
    <a v-for="name in menus" :key="name"> {{name}} {{i}}</a>
  </div>

  <!-- 할인 배너 : 컴포넌트 -->
  <Discount/>

  <!-- Vue 로고 -->
  <img alt="Vue logo" src="./assets/logo.png">

  <h1> 원룸샵 </h1>

  <!-- 메인 페이지 - 방 미리보기 : 컴포넌트 -->
  <Card @openModal="is_open=true;
  press_room_num = $event" :rooms="rooms" :press_room_num="press_room_num" :is_open="is_open"
  v-for="(rooms, i) in rooms" :key="i"/>

  <!-- 하단 메뉴 -->
  <div class="menu">
    <div class="white-bg" v-if="is_open == true"></div>
  </div>
</template>


<!-- JS 영역 -->
<script>
import Modal from './Modal.vue';
import room_data from './assets/room_data.js';
import Discount from './Discount.vue';
import Card from './Card.vue';

export default {
  name: 'App',

  data(){ // 데이터바인딩 : 데이터 보관함
    return{
      // images : ["room0.jpg", 'room1.jpg', 'room2.jpg'], // img src를 배열에 넣어서 쓰려고 했는데, 인코딩 때 안됨
      press_room_num : 1, 
      rooms : room_data, // 집에 대한 데이터 import 함
      is_open : false, // UI 상태 열린/닫힌 상태 구분
      menus : ['Home', 'Shop', 'About', 'Call'],
      report_cnt : [0, 0, 0, 0, 0],
    }
  },

  methods : {
    increase(i){
     this.report_cnt[i] ++; 
    }
  },

  components: { // Component 단계 2. 컴포넌트 등록
    Discount : Discount, // (변수명) : (import 한 파일 내용) // Discount, 로 함축 가능
    Modal : Modal,
    Card : Card,
  }
}
</script>


<!-- CSS 영역 -->
<style>

body{
  margin : 0;
}

div{
  box-sizing: border-box;
}

.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}

.white-bg{
  width: 100%;
  background: white;
  border-radius: 10px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   /*
   margin-top: 60px;
   */
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 7px;
}

.menu a{
  color: white;
  padding: 10px;
}

.room-img{
  width: 60%;
  margin-top: 40px;
}

</style>



<!-- 
1. Node.js 설치한 이유 = npm(Node package manager) 사용하기 위함
   1.1) npm : 각종 라이브러리를 이용하기 위해 도와주는 패키지 관리자

2. npm으로 @vue/cli 설치
   2.1) 명령어 : $ npm install -g @vue.cli
   2.1) @vue/cli : vue 프로젝트를 빠르게 생성해주는 라이브러리

3. 작업용 프로젝트 파일 생성 // 파일명 : Vue

4. VS CODE에서 '파일-폴더 열기-생성한 프로젝트(Vue)' 해당 경로를 통해 파일 열었음

5. 프로젝트 폴더를 열고 터미널을 통해 명령어 입력
   5.1) 명령어 : $ vue create (프로젝트명) // 프로젝트명 : vuedongsan

6. 프로젝트 폴더를 에디터 폴더로 열어야함
   6.1) 경로 : '파일-폴더 열기-생성한 프로젝트 폴더'

7. 프로젝트 이름(Vue) 아래에 있는 'src - App.vue'에서 코드 작성함. // 메인 페이지. HTML과 문법 같음

8. 코드 미리보기
   8.1) 명령어 : $ npm run serve
   8.2) Local: http://localhost:8080/ // Ctrl + 클릭


!-->