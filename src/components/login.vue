<template>
     <div>
      <form>
          <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
          <button @click="handle" type="button">登录</button> 
          </form>
     </div>
</template>

<script>
import router from "../router";
export default {
  name: 'login',

  data(){
    return {
          email:"",
          password:""
           }
    },
    methods:{
      handle(){
           router.push("/home");
      }
    }
 
}
</script>

<style lang="scss" scoped>

</style>