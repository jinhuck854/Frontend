<!-- 방 미리보기 화면 -->
<!-- 필요한 데이터 : rooms, is_open, press_room_num, -->
<template>
  <div>
    <img :src="rooms.image" class="room-img" alt="Room Images">  <!-- :src 주의 !-->
    <h2 @click="$emit('openModal', rooms.id)" press_room_num = rooms.id> {{ rooms.id + 1}} : {{ rooms.title }} </h2>
    <p> 월세 : {{ rooms.price / 10000}} 만 원</p><br>
  </div>
</template>

<!-- 
  커스텀 이벤트(custom event) : 하위 컴포넌트에서 상위 컴포넌트의 데이터를 수정해달라고 요청을 보냄
  1. 사용법
    1) $emit : 하위 컴포넌트가 상위 컴포넌트에게 데이터 수정을 요청함
      a) 자식이 부모에게 메시지 보냄 : @click="$emit('변수명', 데이터)" // 데이터는 생략 가능
      b) 부모가 자식이 보낸 메시지 받음 : @변수명=""
    2) $event : 항위 컴포넌트의 데이터를 보내서 데이터 수정을 요청함
      a) 
-->

<script>
export default {
    name: 'MyCard',
    props: {
        rooms : Object, // Object 인지 Array인지?
        is_open : Boolean,
        press_room_num : Number,
    },
    
    /*
    methods:{ // 함수를 커스텀 이벤트로 묶는 방법
      send(){
        this.emit('openModal', this.rooms_info.id)
      }
    },
    */
}

</script>

<style>

</style>