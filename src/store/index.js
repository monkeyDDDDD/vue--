import Vuex from "Vuex";
import Vue from "vue";

Vue.use(Vuex);


const store = new Vuex.Store({

	state:{
		title:"卖座电影-kerwin"
	},
	actions:{

	},
	mutations:{
             change(state,payload){
             	state.title=payload
             }
	}
})
export default store;