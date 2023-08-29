<!-- /Home 페이지 -->

<template>
    <p> My Home Page </p>

    <!-- roomdCard 메인 페이지 - 방 미리보기 : 컴포넌트 -->
    <Card style="float:center;" class="rounded mx-auto d-block" @openModal="is_open=true;
    press_room_num = $event" :rooms="rooms" :press_room_num="press_room_num" :is_open="is_open"
    v-for="(rooms, i) in rooms" :key="i"/><br>

    <div class="text-success">
        <hr>
    </div>
    <hr class="nav hr">

    <hr>
    <div class="text-success">
        <hr>
    </div>

</template>

<script>
export default {
    name: 'MyHome',

}
</script>

<style>

</style>