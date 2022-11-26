<script setup lang='ts'>
  import { ref } from 'vue';

  const placeHolder: string = 'jxr';
  const inputValue = ref<string | undefined>(undefined);

  const handleFoucs = (): void => {
    inputValue.value = placeHolder;
  };

  const handleBlur = (): void => {
    inputValue.value = "";
  };

</script>

<template>
  <div>
    <span>
      这是一个输入框
    </span>
    <input
      :value='inputValue'
      @focus='handleFoucs'
      @blur='handleBlur'
      :placeholder='placeHolder'/>
  </div>
</template>

<style scoped>

</style>