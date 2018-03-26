<template>
  <transition name="bounce">
	<aside v-show="myshow">
	

      <ul @click="handleClick()">
        <router-link to="/home" tag="li" activeClass="kerwinactive">首页</router-link>
        <router-link to="/film" tag="li" activeClass="kerwinactive">影片</router-link>
        <router-link to="/card" tag="li" activeClass="kerwinactive">我的</router-link>
      </ul>
      
	</aside>
  </transition>
</template>


<script type="text/javascript">
	
  export default{
  	name:'sidebar',

  	date(){
  		return{

  		}
  	},
    props:["myshow"],
    methods:{
      handleClick(){
        this.$emit("event")
      }
    }
  }

</script>

<style lang="scss" scoped>
	   aside{
      position:fixed;
      left:0px;
      top:50px;
      background:black;
      color:white;
      width:50%;
      height:100%;
      z-index:1;
     }
     ul{
      li{
        list-style:none;
        padding:10px;
      }
     }
     .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform:translateX(-100%);
      opacity: 0;
    }
    100% {
      transform:translateX(0px);
      opacity: 1;
    }
  }
</style>