<script setup lang='ts'>
import MemoDataList from '../DevComp/MemoDataList/MemoDataList.vue'
import MemoForm from '../DevComp/MemoForm/MemoForm.vue'

</script>

<template>
  <div class='container'>
    <MemoForm />
    <MemoDataList />
  </div>
</template>

<style scoped>
  .container {
    width: 400px;
  }
</style>