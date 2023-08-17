<!-- 글 목록? 방명록? 컴포넌트 -->

<template>
  <h1> Blog 실험용 </h1>
  <div>
    <p> 안녕하세요!! </p>
    
    <p> {{ blogs[0].title }} </p>
    <p> {{ blogs[0].content }}</p>
    <p> {{ blogs[0].date }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'MyList',
  
  props: {
    blogs : Object,
  },
}
</script>

<style>

</style>