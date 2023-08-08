<!-- 상세페이지 화면 -->
<!-- Props 3번째 단계 : 데이터 사용하기 -->
<!-- 필요한 데이터 : is_open, rooms, press_room_num-->

<template>
  <div class="black-bg" v-if="is_open == true">
    <div class="white-bg">
      <img :src="rooms[press_room_num].image" alt="Room Images">
      <h2> {{ rooms[press_room_num].title }} </h2>
      <p>" {{ rooms[press_room_num].content }} "</p>
      <p> 기본 월세 : {{ rooms[press_room_num].price / 10000 }} 만 원</p>

      <input v-model="month" type="range" min="1" max="12"><br>
      <input v-model.number="month"> <!-- v-model.number : 숫자 자료형으로 변환 -->
      <p> 입력한 {{ month }} 개월 : {{ (rooms[press_room_num].price / 10000) * month  }} 만 원</p>

      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<!--
  (데이터 입력)
    input @input : 사용자가 데이터를 입력하고 확인할 때마다 바뀌는 이벤트 리스너
    input @change : 사용자가 데이터를 입력하고 다른 곳을 클릭할 때마다 바뀌는 이벤트 리스너
    ??? <input @input="month = $event.target.value"> : 
      -> <input v-model="month"> : input에 입력한 데이터를 저장함
      cf. 초기값이 중요함. 초기값을 Number로 하고, 문장ㄹ을 받는다면 끝남

  (원하는 데이터 자료형만 쓰는법)
    watcher // data 감시하는 함수) : month의 데이터가 변할 때마다 자료형 검토함
      -> data(){return{ 변수명 : 자료형 }}
    활용) 이메일 형식, 비밀번호 대문자 또는 특수문자 포함했는지 데이터 검사
    정보) Vue 전용 form validation 라이브러리에서 자료 많이 공유하고 있음.
-->

<script>
export default {
    name: 'MyModal',

    data(){
      return{
        month : "", // 최소 계약 기간 : 6개월
        // month : '', // 초기값 : 문자열
      }
    },

    watch : { // Object 쓰기 : 글자 제한
        month(a){ // month(변경 후 데이터, 변경 전)를 감시하는 함수, 변경 전 데이터는 생략 가능
          if(a >= 13){ // Number 13개월 이상 쓸 수 없도록
            alert('13개월 이상으로 쓰실 수 없습니다.');
            this.month = "";
          }
          else if(isNaN(a) === true){ // NaN 문자열 처리 :(Not a Nmber === true)
            alert('문자는 쓸 수 없습니다');
            this.month = "";
          }
     }
    },

    props : {
        rooms : Array,
        press_room_num : Number,
        is_open : Boolean,
    }
}
</script>

<style>

</style>