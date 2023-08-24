<template>
    <a> 상세페이지 </a>
    <hr>

    <div>
        <button @click="priceSortUp" class="roomSortButton"> 가격 낮은순 정렬 </button>
        <button @click="priceSortDown" class="roomSortButton"> 가격 높은순 정렬 </button>
        <button @click="nameSortUp" class="roomSortButton"> 이름순 정렬 </button>
        <button @click="nameSortDown" class="roomSortButton"> 이름 역순 정렬 </button>
        <button @click="rollBack" class="roomSortButton"> 원래대로 </button>
    </div>
    
    <!-- 정렬 버튼 모음
    <button @click="priceSortUp" class="roomSortButton"> 가격 낮은순 정렬 </button>
    <button @click="priceSortDown" class="roomSortButton"> 가격 높은순 정렬 </button>
    <button @click="nameSortUp" class="roomSortButton"> 이름순 정렬 </button>
    <button @click="nameSortDown" class="roomSortButton"> 이름 역순 정렬 </button>
    <button @click="rollBack" class="roomSortButton"> 원래대로 </button>
    !-->

    <!-- Card 방 설명 -->
    <div class="house-container">
        <div class="card-outer">
            <div class="card" v-for="(room, i) in rooms" :key="i">
                <img :src="room.image" alt="img">
                <div class="card-inner">
                    <h5 class="card-title"> {{ room.title }}</h5>
                    <p class="card-text"> {{ room.content }}</p>
                    <p class="card-price"> {{  room.price }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import room_data from '@/assets/room_data.js';

export default {
    name: 'MyDetail',

    data(){
        return{
            rooms: room_data,
        }
    },
};
</script>

<style>
/* */
.roomSortButton{
    float: right;
    width: 150px;
    padding: 0;
    margin: 0px 5px 20px 8px;
    font-weight: 800;
    text-align: center;
    line-height: 50px;
    color: #FFF;
    border-radius: 8px;


    background-color: #5dc8cd;
    transition: all 0.2s;
}

.roomsSortButton:hover{
    background: #01939A;
    
}

/* card 클래스 */
.card{
    max-height: 500px;
    max-width: 500px;
    object-fit: cover;
    justify-content: space-evenly;
    margin : 20px 20px 20px 30px;
    float: left;
}

/* Card 내용 */
.card-inner{
    padding : 5px 2px 0px 2px;
    margin : 20px 50px 20px 50px;

    justify-content: center;
    max-height: 1000px;
    object-fit: cover;
    height: 150px;
}

</style>