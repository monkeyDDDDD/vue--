<template>
     <div v-if="filminfo">
       <img :src="filminfo.cover.origin"/>
       <h2>
       	 {{filminfo.name}}
       </h2>
       <p>
       	{{filminfo.synopsis}}
       </p>
     </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'detail',

  data(){
    return {
            filminfo:null
    }
  },
  mounted(){
  	console.log(this.$route.params);
  	axios.get(`/v4/api/film/${this.$route.params.id}?__t=1521632936727`).then(res=>{
  		console.log(res.data);
  		this.filminfo = res.data.data.film

      this.$store.commit("change",this.filminfo.name);
  	})
  }
}
</script>

<style lang="scss" scoped>
  img{
  	width:100%;
  }
</style>