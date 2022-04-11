<template>
  <div>
    <CounterComp />
    <HistoryComp />
  </div>
</template>

<script>
import HistoryComp from './HistoryComp.vue'
import CounterComp from './CounterComp.vue'
export default {
  name:'CompEmpat',
  components:{
    CounterComp,
    HistoryComp
  }
};
</script>

<style lang="scss" scoped></style>
