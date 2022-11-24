<script setup lang='ts'>
  import { ref } from 'vue';
  const num = ref<number>(0);
  const addNum = (): void => {
    num.value ++;
  }
</script>

<template>
  <div>
    点击次数: {{ num }}}
  </div>
  <button onclick="addNum">点击 + 1</button>
</template>

<style scoped>

</style>