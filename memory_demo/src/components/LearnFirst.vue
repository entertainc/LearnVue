<script setup lang='ts'>
  import { ref } from 'vue';
  const num = ref<number>(0);
  const addNum = (): void => {
    num.value ++;
  }

</script>


<template>
  <MyTestJSXComp />
  <div>
    点击次数: {{ num }}
  </div>
  <button @click="addNum" class='btn'>点击 + 1</button>
</template>

<style scoped>
  .btn {
    border: 1px solid black;
    border-radius: 5px;
  }
</style>