<template>
  <div>
<!--       <ul>
        <li><a href="#/home">首页</a></li>
        <li><a href="#/film">film</a></li>
        <li><a href="#/card">card</a></li>
      </ul> -->
     <!-- 
      <ul>
        <router-link to="/home" tag="li" activeClass="kerwinactive">home</router-link>
        <router-link to="/film" tag="li" activeClass="kerwinactive">film</router-link>
        <router-link to="/card" tag="li" activeClass="kerwinactive">card</router-link>
      </ul> -->
 <navbar>
   <i class="iconfont icon-category" @click="isshow=!isshow"></i>
 </navbar>
 <sidebar :myshow="isshow" @event="isshow=false"></sidebar>

     <!-- 路由容器， 放置路由组件，/home , home组件 -->
     <section>
      <router-view></router-view>   
     </section>
  </div>
</template>

<script>
import sidebar from "./components/common/sidebar"
import navbar from "./components/common/navbar"
export default {
  name: 'App',
     
     data(){
      return{
        isshow:false
      }
     },
  components:{
    sidebar,
    navbar
  }
}
</script>

<style>
  .kerwinactive{
    background: red;
  }
   *{
    margin:0px;
    padding:0px;
   }
   html,body{
     width:100%;
     height:100%;
   }
section{
  top:50px;
  position: relative;
}
</style>
