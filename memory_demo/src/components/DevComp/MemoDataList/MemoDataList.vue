<script setup lang='ts'>
import { ref, watchEffect, onMounted } from 'vue';
import MemoDataItem from './MemoDataItem/MemoDataItem.vue'
import { API } from '../../../constant/APIConstant';
import { getData, deleteData } from '../../../utils/Network';
const memoDataList = ref<any>([]);

const handleCilk = (e: any, id: string) => {
  console.warn('id = ', id);
  deleteData(API, id);
}
console.warn('1111');
onMounted(() => {
  async function getListData () {
    memoDataList.value = await getData(API);
  };

  getListData()
})

</script>

<template>
  <div v-for='data in memoDataList'>
    <MemoDataItem :text='data.text' :date='data.date' :handleClick='(e) => handleCilk(e, data?.id)' :time='data.time' />
  </div>
</template>

<style scoped>

</style>