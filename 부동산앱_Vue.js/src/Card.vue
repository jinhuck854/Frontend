<!-- 필요한 데이터 : rooms, is_open, press_room_num, -->
<template>
  <div v-for="(rooms_info, i) in rooms" :key="i">
    <img :src="rooms_info.image" class="room-img" alt="Room Images">  <!-- :src 주의 !-->
    <h2 press_room_num = i> {{ rooms_info.id + 1}} : {{ rooms_info.title }} </h2>
    <p> 월세 : {{ rooms_info.price / 10000}} 만 원</p><br>
  </div>
</template>

<script>
export default {
    name: 'MyCard',
    props: {
        rooms : Array, // Object 인가?
        is_open : Boolean,
        press_room_num : Number,
    }
}
</script>

<style>

</style>