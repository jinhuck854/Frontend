<template>
  <div class="discount">
    <h4> !! 지금 결제하면 {{ discount }}% 할인 이벤트 !!</h4>
  </div>
</template>

<script>
export default {
  name: 'MyDiscount',
  props:{
    discount : Number,
  },
}
</script>


<style>

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
}

</style>