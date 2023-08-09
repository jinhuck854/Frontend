<!-- 방 미리보기 화면 -->
<!-- 필요한 데이터 : rooms, is_open, press_room_num, -->
<template>
  <div>
    <img :src="rooms.image" class="room-img" alt="Room Images">  <!-- :src 주의 !-->
    <h2 @click="$emit('openModal', rooms.id)" press_room_num = rooms.id> {{ rooms.id + 1}} : {{ rooms.title }} </h2>
    <p> 월세 : {{ rooms.price / 10000}} 만 원</p><br>
  </div>
</template>

<!-- $emit : rooms.id-->

<script>
export default {
    name: 'MyCard',
    props: {
        rooms : Object,
        is_open : Boolean,
        press_room_num : Number,
    },
}
</script>


<style>

</style>