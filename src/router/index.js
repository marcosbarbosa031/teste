import Vue from 'vue'
import Router from 'vue-router'
import ChatBot from "@/components/chatbot/ChatBot";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ChatBot',
      component: ChatBot
    }
  ]
})
