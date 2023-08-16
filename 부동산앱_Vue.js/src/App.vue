<!-- HTML 영역 -->
<template> <!-- html이랑 비슷함 !-->

  <!-- 상세 페이지 : 컴포넌트 -->
  <Transition name="fade">
    <Modal @closeModal="is_open=false" :rooms = "rooms" :press_room_num ="press_room_num" :is_open = "is_open"/>
  </Transition>

  <!-- Nav bar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Housing</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main Photo 캐러셀 -->
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://github.com/jinhuck854/Frontend/assets/121598818/e9826c3e-8515-42d2-a8e0-6a7397fdf2fa" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://github.com/jinhuck854/Frontend/assets/121598818/3b308ad1-f5d2-45d1-be31-1a22f5565b18" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="https://github.com/jinhuck854/Frontend/assets/121598818/ec78c9c4-e834-4253-93e8-4e1c7bc5d44e" class="d-block w-100" alt="...">
      </div>
    </div>
    
    <!-- 이전/다음 버튼 -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- 소개창 -->
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>

  <!-- 검색창 -->
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  
  <!-- 할인 배너 : 컴포넌트
  <Discount @discounting="discountNum=discountNum" :discountNum = "discountNum"/>
  -->

  <!-- 정렬 버튼 모음
  <button @click="priceSortUp" class="roomSortButton"> 가격 낮은순 정렬 </button>
  <button @click="priceSortDown" class="roomSortButton"> 가격 높은순 정렬 </button>
  <button @click="nameSortUp" class="roomSortButton"> 이름순 정렬 </button>
  <button @click="nameSortDown" class="roomSortButton"> 이름 역순 정렬 </button>
  <button @click="rollBack" class="roomSortButton"> 원래대로 </button>
  !-->

  <!-- roomdCard 메인 페이지 - 방 미리보기 : 컴포넌트 -->
  <Card class="roomCard" @openModal="is_open=true;
  press_room_num = $event" :rooms="rooms" :press_room_num="press_room_num" :is_open="is_open"
  v-for="(rooms, i) in rooms" :key="i"/><br>

  <!-- 
  <div class="menu">
    <div class="white-bg" v-if="is_open == true"></div>
  </div>
  -->
  
</template>


<!-- JS 영역 -->
<script>
import Modal from './Modal.vue';
import room_data from './assets/room_data.js';
//import Discount from './Discount.vue';
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
    //Discount : Discount,
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

/* 상세 페이지 */
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

/* 전체 */
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

/* 메인 사진 전체 캐러셀 */ 
.carousel slide{
  padding-left: 5%; /* 양옆 여백 */
  padding-right: 5%;
  max-height: 700px;
  max-width: 1700px;
}


/* 메인 사진 캐러셀 */
.carousel-inner{
  padding-left: 5%; /* 양옆 여백 */
  padding-right: 5%;
  max-height: 700px;
  max-width: 1700px;
}

/* 가이드 라인 */
.nav justify-content-center{
  line-height: normal;
  margin-top: 60px;
}

/*  카드 */
.roomCard{
  justify-content: center;
  align-items: center;
  align-content: space-between;
  float:left;
}

/* ? */
.card{
  justify-content: center;
  /*
  
  align-items: center;
  align-content: space-between;
  */
  max-height: 300px;
  max-width: 300px;
}

/* 하단 메뉴 */
.menu{
  background: darkslateblue;
  color: white;
  padding: 30px;
  border-radius: 7px;
}

.room-img{
  width: 60%;
  margin-top: 40px;
}

</style>
