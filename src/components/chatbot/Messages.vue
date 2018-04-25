<template>
  <div>
    <!-- divs serão criadas aqui -->
    <div class="bot-typing" v-show="showtyping">
      <img src="../../assets/img/message.svg" alt="">
    </div>
    <div class="bot-message" v-show="showmessage">
      <div class="bot-message-left">
        <div class="bot-icon">
          <img src="../../assets/img/boticon.png" class="bot-icon-img">
        </div>
        <div class="bot-message-message">
          {{mcontent.message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mcontent'],
  data () {
    return {
      showtyping: true,
      showmessage: false
    }
  },
  methods: {
    sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    getTimeout (message) {
      let t = message.length
      if (t <= 50) {
        t = 800
      } else if (t > 50 && t <= 100) {
        t = 1500
      } else {
        t = 2000
      }
      return t
    },
    async hidetyping () {
      await this.sleep(this.getTimeout(this.mcontent.message))
      this.showtyping = false
      this.showmessage = true
    }
  },
  mounted () {
    this.hidetyping()
  }
}
</script>

<style>
  .bot-typing{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #776A66;
  }
</style>
