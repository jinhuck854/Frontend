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
      <input v-model.number="month">
      <p> 입력한 {{ month }} 개월 : {{ (rooms[press_room_num].price / 10000) * month  }} 만 원</p>

      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>


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