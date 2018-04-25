<template>
  <div class="chatbot">
    <b-header :appname="appname"></b-header>
    <div class="bot-container">
      <div class="bot-subcontainer" id="bot-container">
        <div class="bot-chat">
          <div class="bot-chat-2">
            <div class="terminal" id="terminal">
              <div id="typing-message" v-for="message in messageHistory" :key="message.id">
                <b-messages :mcontent="message"></b-messages>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-textinput v-show="inputShow" :userinput="userinput"></b-textinput>
  </div>
</template>

<script>
import Header from "./Header.vue";
import TextInput from "./TextInput.vue";
import Messages from "./Messages.vue";
import config from "../../config/config";

export default {
  components: {
    "b-header": Header,
    "b-textinput": TextInput,
    'b-messages': Messages
  },
  data() {
    return {
      messageHistory: [],
      showTyping: [],
      // showMessage: false,
      inputShow: true,
      userinput: true,
      appname: config.appconf.name
    };
  },
  methods: {
    sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async showInput () {
      this.inputShow = true
      document.getElementById("in_answer").style.bottom = "0";
    },
    getTimeout (message) {
      let t = message.length
      if (t <= 50) {
        t = 1100
      } else if (t > 50 && t <= 100) {
        t = 1800
      } else {
        t = 2300
      }
      return t
    },
    searcNext (message, id) {
      var response = null
      message.forEach(m => {
        if(m.id == id){
          response = m
        }
      })
      return response
    },
    async startChatBot (message) {
      var m =  message[0]
      this.messageHistory.push(m)
      var timeout = this.getTimeout(m.message)
      do {
        m = this.searcNext(message, m.next)
        await this.sleep(timeout)
        this.messageHistory.push(m)
        timeout = this.getTimeout(m.message)
      } while (m.next != null);
      await this.sleep(timeout)
      this.showInput()
    }
  },
  async mounted () {
    this.startChatBot(config.steps)
  }
};
</script>

<style>
  @import '../../assets/css/chatbot.css';
</style>

