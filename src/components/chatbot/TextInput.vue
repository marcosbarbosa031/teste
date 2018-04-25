<template>
  <div class="operations">
    <div class="question-age" id="input-here">
      <div id="in_answer" class="bot-input-fixed" >
        <form name="form" id="formzera">
          <div class="bot-row bot-container">
            <!-- Adicionar uma escolha pra cada pergunta -->
            <div class="bot-input-choice" id="bot-input-choice">
              <!-- nome -->
              <input id="in_nome" type="string"  name='nome' autofocus placeholder="Digite sua mensagem..." required="required" :disabled="userinput">
            </div>
            <div class="bot-row-btn">
                <button type="submit" class="bot-button" :disabled="userinput">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userinput'],
  mounted () {
  }
};
</script>

<style>
  
</style>
