<script setup lang='ts'>
import { ref } from 'vue';
import MemoDataList from '../DevComp/MemoDataList/MemoDataList.vue'
import MemoForm from '../DevComp/MemoForm/MemoForm.vue'
const update = ref<number>(0);
const forceUpdate = () => {
  update.value += 1;
}

</script>

<template>
  <div class='container'>
    <MemoForm :forceUpdate='forceUpdate'/>
    <MemoDataList :forceUpdate='forceUpdate'/>
  </div>
</template>

<style scoped>
  .container {
    width: 400px;
  }
</style>