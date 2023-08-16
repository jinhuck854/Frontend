<template>
  <div class="discount">
    <h4> !! 지금 결제하면 {{ discountNum }}% 할인 이벤트 !!</h4>
  </div>
</template>

<script>
export default {
  name: 'MyDiscount',
  props:{
    discountNum : Number,
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