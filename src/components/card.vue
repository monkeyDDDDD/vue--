<template>
     <div>
     	<form>
          <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
          <input type="button" @click="handle" value="注册" class="btn">
          </form>
     </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: 'card',

  data(){
    return {
    email:"",
    password:""

  }
},
  
  /*beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        // 
        setTimeout(() => {
            if(res.data=""){
              next();// 可以挑战
            }else{
              next("/login") //跳转到login 组件
            }
        }, 1000)
    },*/

    beforeMount(){

      // 验证用户是否登录？
      // 
      // setTimeout(() => {
      //    if(false){
      //      //请求真实数据， 显示个人信息
      //    }else{
      //      router.push('/login');
      //    }
      // }, 1000)
    },


methods:{
    handle(){
    axios.post("/api",{
      
            password:this.password,
            email:this.email
           
           }).then(res=>{
          if(res.data=="isshave"){
           router.push("/login");
           console.log(111);
             
          }
            }).catch(error=>{

            })
    }
  },
  beforeMount(){
     this.$store.commit("change","卖座电影")
  }


 }
</script>

<style lang="scss" scoped>
  .btn{
    width:90px;
    height:40px;

  }
</style>