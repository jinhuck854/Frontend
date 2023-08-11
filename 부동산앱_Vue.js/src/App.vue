<!-- HTML 영역 -->
<template> <!-- html이랑 비슷함 !-->

  <!-- 상세 페이지 : 컴포넌트 -->
  <Transition name="fade">
    <Modal @closeModal="is_open=false" :rooms = "rooms" :press_room_num ="press_room_num" :is_open = "is_open"/>
  </Transition>

  <!-- 상단 메뉴 -->
  <div class="menu">
    <a v-for="name in menus" :key="name"> {{name}} {{i}}</a>
  </div>

  <!-- 할인 배너 : 컴포넌트 -->
  <Discount @discounting="discountNum=discountNum" :discountNum = "discountNum"/>

  <!-- 정렬 버튼 : select 버튼으로 정렬 순서 구분하기가 안되나?
  <select>
    <option> 기본 정렬 </option>
    <option @click="priceSort"> 가격순 정렬 </option>
  </select>
  -->

  <!-- Vue 로고 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <h1> 원룸샵 </h1>
  <button @click="priceSortUp" class="roomSortButton"> 가격 낮은순 정렬 </button>
  <button @click="priceSortDown" class="roomSortButton"> 가격 높은순 정렬 </button>
  <button @click="nameSortUp" class="roomSortButton"> 이름순 정렬 </button>
  <button @click="nameSortDown" class="roomSortButton"> 이름 역순 정렬 </button>
  <button @click="rollBack" class="roomSortButton"> 원래대로 </button>

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
      press_room_num : 1,
      roomsOrigin: [...room_data], // 데이터 원본 : 데이터 변경 X // Deep Copy : [...Array 변수명] 사본을 별개로 가짐
      rooms : room_data, // 데이터 사본 : 데이터 변경 O
      is_open : false,
      menus : ['Home', 'Shop', 'About', 'Call'],
      report_cnt : [0, 0, 0, 0, 0],
      discountNum : 10, // 할인율 초기값 : 30%
    }
  },

  methods : {
    priceSortUp(){ // 가격 오름차순 정렬 : sort(function(a,b) { return a-b })를 사용
      this.rooms.sort(function(a,b){
        return a.price - b.price;
      });      
    },

    priceSortDown(){ // 가격 내림차순 정렬
      this.rooms.sort(function(a,b){
        return b.price - a.price;
      });
    },

    nameSortUp(){ // 이름순 정렬
      this.rooms.sort(function(a,b){
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
    },

    nameSortDown(){ // 이름 역순 정렬
      this.rooms.sort(function(a,b){
        return b.title < a.title ? -1 : b.title > a.title ? 1 : 0;
      });
    },

    rollBack(){ // 원래대로
      this.rooms = [...this.roomsOrigin]; // 안되려나?
    },
  },

  mounted(){ // LifeCycle : 1초마다 discountNum을 1%씩 감소시킴
    setInterval(()=> { // arrow function 구문을 써야 this 문법을 제대로 사용할 수 있다
      if(this.discountNum > 1)
        this.discountNum -= 1;
    }, 1000);
  },

  // 숙제1 : 메인페이지 로드 후(mount) 부터 30%할인 문구가 1초마다 1%씩 감소됨. setInterval(() => {}, 1000)
  // -> props로 상위-하위 컴포넌트 데이터 연결.
  // 커스텀 이벤트로 하위 컴포넌트에서 데이터 변경될 때마다, 상위 컴포넌트에 요청.
  // when? 1초마다

  // 숙제2 : Modal 입력 기입 후 재렌더링함. lifecycle용어로 update라고 말함. update 전에 hook 걸어보기.

  components: { // Component
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>


<!-- CSS 영역 -->
<!-- 
  (애니메이션 만드는 방법 3단계)
1. 시작전 class명 만들어서 초기설정
2. 끝난후 class명 만들어서 애니메이션 설정
3. 원할때, 2번 클래스명 넣어서 사용하기

Object형으로 클래스명 :
{ 클래스명 : 조건 } // class : true/false
코드 : <div class="start" :class="{ end : is_open }">
</div>

근데, Vue에서는 <transition>문법을 이용하여 쉽게 가능
1. 원하는 위치에 <transition name="작명"></transition>을 사용하여 감싸기
2. 3가지 클래스(또는 네임) 명이 필요함
  :: .fade-enter-from, .fade-enter-to, .fade-enter-active
  cf. (fade)는 transition의 name에서 작명한 것

-->

<style>
.fade-enter-from{ /* 시작 */
  opacity: 0;
}

.fade-enter-active{ /* 동작 과정 */
  transition: all 1s;
}

.fade-enter-to{ /* 끝 */
  opacity: 1;
}

/* 퇴장 애니메이션은 (작명)-leave-from/active/to{} 
  위치 이동은 transfrom: translateY(-1000px);
             transfrom: translateY(0px);
*/

.start{
  opacity: 0; /* 불투명도 */
  transition: all 1s; /* transition : 모든 속성(opacity)이 변할 때 1초에 걸쳐서 변경하게 됨 */
}

.end{
  opacity: 1;
}

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
