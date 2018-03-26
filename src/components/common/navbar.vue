<template>
	
    <nav>
    	<div class="left">
    		<slot></slot>
    		<span>{{title}}</span>
    	</div>
    	<div class="right">
    		<span>大连</span>
    		<i class="iconfont icon-account"></i>
    	</div>
    </nav>



</template>


<script type="text/javascript">
  import {mapState} from "vuex";
  export default{
  	name:'navbar',

  	date(){
  		return{

  		}
  	},
  	computed:{
  	// 	title(){
   //   		return this.$store.state.title;
  	// }
  	...mapState(["title"])
  }
  }

</script>

<style lang="scss" scoped>
	nav{
		position:fixed;
		left:0px;
		top:0px;
		width:100%;
		height:50px;
		background:black;
		color:white;
		line-height:50px;
		z-index:1;
		.left{
			float:left;
		}
		.right{
			float:right;
		}
	}
  .iconfont icon-account{
    padding:3px
  }
</style>