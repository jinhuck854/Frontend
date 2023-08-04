<template> <!-- Props 3번째 단계 : 데이터 사용하기 -->
<!-- 필요한 데이터 : is_open, rooms, press_room_num-->
  <div class="black-bg" v-if="is_open == true">
    <div class="white-bg">
      <img :src="rooms[press_room_num].image" alt="Room Images">
      <h2> {{ rooms[press_room_num].title }} </h2>
      <p> {{ rooms[press_room_num].content }} </p>
      <p> 월 {{ rooms[press_room_num].price / 10000 }} 만 원</p>
      <!-- <button @click="is_open = false"> 닫기</button> !-->
    </div>
  </div>
</template>

<script>
export default {
    name: 'MyModal',
    props : {
        rooms : Array, // Props 2번째 단계 : Array, Object, String, Number 등 data type을 적어줘야함
        press_room_num : Number,
        is_open : Boolean, // Props 주의할점 : Read-only라서 값 재정의 또는 재할당 안됨. => 오류 발생의 원인
    } // Props 주의할점 2 : 데이터를 저장할 때, 사용하는 컴포넌트 중 최상위 컴포넌트에 저장하는 것이 가장 좋은 위치임.
}
</script>

<style>

</style>