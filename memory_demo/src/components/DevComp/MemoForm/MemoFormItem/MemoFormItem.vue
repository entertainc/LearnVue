<script setup lang='ts'>
  import {defineProps} from 'vue';

  interface MemoFormItemProps {
    label: string;
    type: string;
    reqData: any;
    handleItemValueChoose: (e: any) => void;
  };

  defineProps<MemoFormItemProps>();
</script>

<template>
  <div class='container'>
    <div class='label'>
      {{ label }}
    </div>
    <input :type='type' @input='handleItemValueChoose' />
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  }

  .label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 6px;
  }
</style>