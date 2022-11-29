<script setup lang='ts'>
import { ref, defineProps } from 'vue';
import { API } from '../../../constant/APIConstant';
import { setData } from '../../../utils/Network';
import MemoFormItem from './MemoFormItem/MemoFormItem.vue';
import { v4 as uuidv4 } from 'uuid';

interface memoFormProps {
  forceUpdate: () => void;
}
defineProps<memoFormProps>()
const reqData = ref<any>({
  text: '',
  date: '',
  time: '',
});

console.warn('value = ', reqData.value)
const labelArr: string[] = ['内容', '日期', '时间'];
const typeArr: string[] = ['text', 'date', 'time']
const handleClick = (e: any, id: string): void => {
  const value = {id: uuidv4(), ...reqData.value};
  console.warn('提交value = ', value);
  setData(API, value);
}

const handleItemValueChoose = (e: any, type: string): void => {
  reqData.value[type] = e.target.value;
  console.warn(reqData.value[type]);
}

</script>

<template>
  <div>
    <div v-for='i in 3'>
      <MemoFormItem :label='labelArr[i - 1]' :type='typeArr[i - 1]' :reqData='reqData' :handleItemValueChoose='e => handleItemValueChoose(e, typeArr[i - 1])'/>
    </div>
    <button class='btn' @click='() => { handleClick(), forceUpdate() }'>
      新增
    </button>
    <hr />
  </div>
</template>

<style scoped>
  .btn {
    width: 100%;
    height: 30px;
    color: white;
    background-color: black;
  }
</style>