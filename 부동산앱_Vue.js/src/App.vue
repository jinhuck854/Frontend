<template> <!-- html이랑 비슷함 !-->
  <div class="menu">
    <a v-for="name in menus" :key="name"> {{name}} {{i}}</a>
  </div>

  <img alt="Vue logo" src="./assets/logo.png">

  <h1> 원룸샵 </h1>

  <div v-for="(products, i) in products" :key="i">
    <h4>{{products}} </h4>
    <p> {{price[i]}} </p>
    <button v-on:click="increase(i)">허위매물신고</button> <span>신고 : {{report_cnt[i]}}</span><br>
    <!-- <button @mouseover="report_cnt ++">재미매물신고</button> <span>재미 : {{report_cnt[0]}}</span> !-->
  </div>

</template>

<script>

export default {
  name: 'App',

/* 
  (데이터바인딩을 하는 이유)
   1. 유지보수 및 확장성
   2. Vue의 강점인 실시간 자동 렌더링을 사용하기 위해
      2.1) 실시간 자동 렌더링 : data()를 변경하면 관련되어 있는 data를 변경하여 HTML에 실시간으로 렌더링함.
           -> Web app(Sigle Wep)에 적용하기 좋음
   
   데이터바인딩 사용하는 방법
   1. Object
      1) 위치 : <script> data(){ return{ !! 여기 !! } }
      2) 코드 : {자료이름 : 자료내용},
      3) <template> 원하는 위치에 {{ 자료이름 }} 사용</template>
   
   2. HTML 속성
      1) 위치 : <script> data(){ return{ style: 'color:red', }
      2) 코드 : <h1 class="red" :style="style">

  (Array 배열)
  1. 초기화 : var array = [10, 20, 30];
  2. 사용 : array[0];
  3. 응용 : 배열 + 데이터바인딩-> {{Array[0]}}

  (v-for 반복문)
  1. 사용 : <a v-for="(변수명) in (반복 횟수)" : key ="(변수명)"> {{ (변수명) }} </a>
     1.1) key의 역할 : 반복문을 쓸 때 꼭 필요함. 반복문을 돌린 요소를 컴퓨터가 구분하기 위해 사용함.
     1.2) 사용 : <a v-for"="(변수명, i) in (횟수)" :key="i"> {{변수명}} {{i}} </a>
          -> i는 0부터 시작해서 1씩 증가하는 변수로, 반복문을 돌린 요소를 파악하기 위한 용도. 보통 0,1,2...를 씀
  2. 응용 : 반복문 + 데이터바인딩 -> v-for="name in menus" :key="name"
     1.1) 사용하는 이유 : menues[] 배열에 들어가있는 index만큼 반복문 돌아감
     1.2) {{ (변수명) }} 을 사용하여 출력하면 변수명에 배열의 모든 index를 순서대로 넣어서 출력하게 됨.

  (이벤트 리스너)
  1. 사용 : <button v-on:click="(클릭 후 이벤트)">  또는 <button @click="(클릭 후 이벤트)">
  
  (함수)
  1. 용도 : 긴 코드를 함축하여 여러번 사용하기 위함
  2. Js와 같이, function() => {}
  3. <script> 안에 methods : {} 를 넣고, 함수명(){} 사용.
  
*/
  data(){ // 데이터바인딩 : 데이터 보관함
    return{ // Objext 자료로 저장 {자료이름 : 자료내용}
      menus : ['Home', 'Shop', 'About', 'Call'], // v-for 예제
      products : ['역삼동건물', '천호동원룸', '마포구원룸'], // 데이터 바인딩 + 배열 + 반복문 예제
      price : [50, 60, 70], // 데이터바인딩 + 배열 + 반복문 예제
      report_cnt : [0, 0, 0],
    }
  },

  methods : {
    increase(i){ // 신고 횟수 증가
     this.report_cnt[i] ++; 
    }

  },

  components: {
    
  }
}
</script>

<style>
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
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
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