<template>
     <div>
       <swipe class="my-swipe">
          <swipe-item v-for="data in looplist" :key="data.id">
          	<img :src='data.imageUrl'/>
          </swipe-item>
         
      </swipe>
      <ul>
      	<li v-for="data in datalist">
      		<img :src="data.cover.origin"/>
      		<h3>{{data.name}}</h3>
      	</li>
      </ul>
     </div>
</template>

<script>
import axios from "axios";
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');
export default {
  name: 'home',

  data(){
    return {
        looplist:[],
        datalist:[]
    }
  },
  beforeMount(){
     this.$store.commit("change","卖座电影")
  },
  mounted(){
  	axios.get("/v4/api/billboard/home?__t=1521619182648").then(res=>{
  		console.log(res.data);
  		this.looplist = res.data.data.billboards
  	}).catch(error=>{

  	})
  	fetch("/v4/api/film/now-playing?__t=1521619182653&page=1&count=5").then(res=>res.json()).then(res=>{
  		console.log(res)
  		this.datalist = res.data.films
  	})
  },
  components:{
  	'swipe':Swipe,
  	'swipe-item':SwipeItem
  }
}
</script>

<style lang="scss" scoped>
.my-swipe {
  height: 200px;
 
      img{
  	width:100%
  }

}

ul{
	li{
		padding:5px;
		img{
			width:100%;
		}
	}
}
</style>