<template>
  <div>
    <h1>Counter with Vuex</h1>
    <h1 class="counter" >{{ counter }}</h1>
  <button @click="substractFromCounter(value)" >-</button>
    <input type="number" v-model="value">
  <button @click="addToCounter(value)" >+</button>

  <div>
    <button @click="addRandomNumber(value)" class="btn" >Add Random Number</button>
  </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'


export default {
  name: "CounterComp",
  data(){
    return{
      value : 1,
    }
  },
  computed:{
    ...mapState(["counter"])
  },
  methods:{
    ...mapMutations(["addToCounter", "substractFromCounter"]),
    ...mapActions(["addRandomNumber"])
  }
};
</script>

<style scoped>

.counter {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin:0 0.5rem;
  text-align: center;
}
.btn{
  border-radius: 00.5rem;
  width: auto;
  background-color: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}

</style>
