<template>
     <div>
        <ul>
        <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
        <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
       
      </ul>

       <router-view></router-view>
     </div>
     
</template>

<script>
export default {
  name: 'film',

  data(){
    return {

    }
  },
  beforeMount(){
     this.$store.commit("change","卖座电影")
  }
}
</script>

<style lang="scss" scoped>
   ul{
    display:flex;
    li{
      list-style:none;
      flex:1;
      height:40px;
      line-height:40px;
      text-align:center;
    }
   }
   .active{
    border-bottom:3px solid red;
   }
</style>