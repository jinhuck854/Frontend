<!-- HTML 영역 -->
<template> <!-- html이랑 비슷함 !-->

  <!-- 상세 페이지 : 컴포넌트 -->
  <Transition name="fade">
    <Modal @closeModal="is_open=false" :rooms = "rooms" :press_room_num ="press_room_num" :is_open = "is_open"/>
  </Transition>

  <!-- Nav bar -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/">
        <a class="navbar-brand" href="#">Housing</a>
      </router-link>

      <!-- 비율 일정 크기 이하로 내려가면, 나타나는 스크롤 버튼 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/detail">
              <a class="nav-link active" aria-current="page" href="#">Detail</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list">
              <a class="nav-link" href="#">Blog</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" href="#">Pricing</a> <!-- 모든 가격들 -->
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" href="#">Map</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- login -->
    <div class="login-container" color:black>
      <router-link to="/">
        <a> Login </a>
      </router-link>
      
    </div>
  </nav>

  <!-- 메인페이지 상단 줄 -->
  <div class="text-success">
    <hr>
  </div>
  <hr class="nav hr">

  <!-- Main Photo 캐러셀 -->
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    
    <div class="carousel-inner">
      <div class="carousel-item active"  data-bs-interval="3000">
        <img src="https://github.com/jinhuck854/Frontend/assets/121598818/6b77d068-1cfd-4679-aade-fa1aed565fa6" class="d-block w-100" alt="img1">
      </div>
      <div class="carousel-item"  data-bs-interval="3000">
        <img src="https://github.com/jinhuck854/Frontend/assets/121598818/f93fdfa1-5987-4e9d-a496-ddeceddc5e01" class="d-block w-100" alt="img2">
      </div>
      <div class="carousel-item"  data-bs-interval="3000">
        <img src="https://github.com/jinhuck854/Frontend/assets/121598818/0585a0cb-47b9-45ef-b436-3bb0bb759d23" class="d-block w-100" alt="img3">
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

  <!-- 메인페이지 하단 줄 -->
  <hr>
  <div class="text-success">
    <hr>
  </div>

  <!-- 검색창 -->
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" justify-content:center>Search Address</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <hr>

  <!-- 라우터 -->
  <router-view></router-view>

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

  <!-- 
  <div @click="hidden">
    <router-link to="/detail"> 상세보기 클릭 </router-link>
  </div>
  -->

  
</template>


<!-- JS 영역 -->
<script>
import Modal from './Modal.vue';
import room_data from './assets/room_data.js';
//import Discount from './Discount.vue';
//import Card from './Card.vue';
import blogData from './assets/blog_data.js';
// import List from './components/List.vue'; // Router 쓰기 전, List 끌어오기 (1)

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
      blogs : blogData,
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
    //Card : Card,
    // List : List,
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
/* 데스크톱 화면 폰트 크기 */
@media screen and (min-width: 769px){
  body{
    font-size: 17px;
  }
}

/* 화면 전환 애니메이션 */
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
  font-size: 17px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   /*
   margin-top: 60px;
   */
}

/* 라인 */
.nav hr{
  margin : 10px;
  margin-top :
  /*padding: 0px 0px; */
}

/* 로그인 */
.login-container{
  padding-right: 2%;
}

.navbar bg-body-tertiary{
  position: relative;
}

.container-fluid{
  position: relative;
  left: 2px;
}

/* 전체 캐러셀 */ 
.carousel slide{
  padding-left: 10%; /* 양옆 여백 */
  padding-right: 10%;

  max-height: 700px;
  min-height: 500px;
  max-width: 1800px;
  min-width: 1000px;
  
}

/* 캐러셀 내부 사진 외곽
  !! 여길 수정해야 사진들 크기가 달라짐
*/
.carousel-inner{
  padding: 2% 2% 0% 2%;
  justify-content: center;
  max-height: 1000px;
  object-fit: cover;
  /*
  background-position: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 0%;
  */
}

.carousel-inner img{
  max-height: 1200px;
  object-fit: cover;
}

/* 캐러셀 내부 사진 박스 */
.carousel-item active{
  object-fit: cover;
}

.carousel-item

/* 중앙 검색창 */
.navbar bg-body-tertiary{
  justify-content: center;
}

.blog{
  font-size: 17px;
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
