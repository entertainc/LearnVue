<script setup lang='ts'>
  import { defineProps } from 'vue';
  interface memoDataItemProps {
    text: string;
    date: any;
    time: string;
    handleClick: (e: any) => void;
  }

  defineProps<memoDataItemProps>()

</script>

<template>
  <div class='container'>
    <div class='content'>
      <div>
        {{ text }}
      </div>
      <div>
        {{ date }}
        {{ time }}
      </div>
    </div>
    <div>
      <button @click='handleClick' class='btn'> 删除 </button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    width: 400px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .btn {
    background-color: deepskyblue;
    text-align: center;
  }
</style>