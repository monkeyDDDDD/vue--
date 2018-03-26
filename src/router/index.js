import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/home";
import Film from "../components/film";
import Card from "../components/card";
import Login from "../components/login";
import Detail from "../components/detail";
import Nowplaying from "../components/nowplaying";
import Comingsoon from "../components/comingsoon";
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/film",
      component: Film,
    children:[
        {
          path:"nowplaying",
          component:Nowplaying
        },
        {
          path:"comingsoon",
          component:Comingsoon
        },
        {
          path:"/",
          redirect:"/film/nowplaying"
        }
      ]
    },
    {
       path: '/card',
      component:Card,
      meta:{
        kerwinRequired:true
      }
    },
     {
       path: '/login',
      component:Login
    },
    {
      path:"/detail/:id",
      component:Detail
    },
     {
      path:"*",
      redirect:"/home"
     }
  
  ]
})
