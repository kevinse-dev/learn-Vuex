import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import axios from "axios";

const store = createStore({
  state() {
    return {
      counter: 10,
      history:[0]
    };
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter = state.counter + payload;
      console.log(payload);
      console.log(state);
      state.history.push(state.counter)
    },
    substractFromCounter(state, payload) {
      state.counter = state.counter - payload;
      state.history.push(state.counter)
    },
  },
  actions: {
    async addRandomNumber(value) {
      let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
      console.log('value',value);
      value.commit("addToCounter", data.data);
    },
  },
  getters:{
    activeIndexes: (state) => (payload) => {
      let indexes = []
      state.history.forEach((number, index) => {
        if(number === payload){
          indexes.push(index)
        }
      })
      return indexes
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount("#app");
