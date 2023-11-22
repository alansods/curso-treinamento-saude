<template>
  <AulaTemplate
    :titulo="$store.state.modulos[8].titulo"
    :numero="$store.state.modulos[8].numero"
    titleSize="4"
  >
    <div v-if="!completed" class="question-container">
      <SmallText class="mb-2">Questão {{ number }} de {{ questions.length }}</SmallText>
      <h2>{{ number }}. <span v-html="question"></span></h2>

      <div class="my-6">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="text-body-1 d-flex align-center"
          style="gap: 0 8px;"
        >
          <input
            type="radio"
            :name="questionIndex"
            :value="option"
            v-model="selectedOption"
            @change="optionSelected = true"
            :disabled="answerChecked"
            class="cursor-pointer"
            :id="index"
          />
          <label :for="index" class="label-radio-input">{{ option }}</label>
        </div>
      </div>

      <NavButton
        name="Confirmar"
        color="primary"
        :disabled="!optionSelected || answerChecked"
        @button-click="checkAnswer"
      ></NavButton>
    </div>

    <v-row v-else class="completed-container" justify="center">
      <v-col cols="12" sm="4">
        <div v-if="score >= 7">
          <v-row justify="center">
            <v-col cols="10" sm="6"><Lottie :happy="true" /></v-col>
          </v-row>

          <h2 class="completed-title success--text">Parabéns!</h2>
        </div>

        <div v-if="score < 7">
          <v-row justify="center">
            <v-col cols="10" sm="6"><Lottie :sad="true" /></v-col>
          </v-row>

          <h2 class="completed-title error--text">Tente de novo!</h2>
        </div>

        <Paragraph class="completed-score mb-5">
          Você acertou <span v-if="score < 7">apenas </span> <strong
            ><u>{{ score }}</u></strong
          >
          de {{ questions.length }} questões.
        </Paragraph>

        <NavButton
          v-if="score < 7"
          name="Tentar novamente"
          color="primary"
          @button-click="resetQuiz"
          block="true"
        ></NavButton>
      </v-col>
    </v-row>
  </AulaTemplate>
</template>

<script>
import AulaTemplate from "@/components/AulaTemplate.vue";
import Questoes from "@/data/questoes/modulo_09.json";
import SmallText from "@/components/SmallText.vue";
import Paragraph from "@/components/Paragraph.vue";

import NavButton from "@/components/NavButton.vue";
import Lottie from "@/components/Lottie";

export default {
  components: {
    AulaTemplate,
    NavButton,
    Lottie,
    SmallText,
    Paragraph,
  },

  data() {
    return {
      questions: Questoes,
      questionIndex: 0,
      selectedOption: "",
      optionSelected: false,
      completed: false,
      score: 0,
      answerChecked: false,
    };
  },

  computed: {
    question() {
      return this.formatQuestion(this.questions[this.questionIndex].question);
    },

    number() {
      return this.formatQuestion(this.questions[this.questionIndex].number);
    },

    options() {
      return this.questions[this.questionIndex].options;
    },
  },

  methods: {
    formatQuestion(question) {
      // Substituir \n por quebras de linha <br>
      return question.replace(/\n/g, "<br>");
    },

    nextQuestion() {
      this.answerChecked = false;
      this.questionIndex++;
      this.selectedOption = "";
      this.optionSelected = false;
    },
    checkAnswer() {
      this.answerChecked = true;
      this.optionSelected = false;

      // Se acertou a respota da questão
      if (this.selectedOption === this.questions[this.questionIndex].answer) {
        this.score++;
      }

      // Se for a última pergunta, mostrar tela de conclusão
      if (this.questionIndex === this.questions.length - 1) {
        this.completed = true;
        if (this.score >= 7 && !this.$store.state.progresso_modulos.modulo_09) {
          this.$store.state.progresso_modulos.modulo_09 = true;
          this.$store.commit("ADICIONAR_SCORE");
        }
      } else {
        // Se não for a última pergunta, avançar para a próxima automaticamente após o usuário selecionar uma resposta
        this.nextQuestion();
      }
    },

    resetQuiz() {
      this.answerChecked = false;
      this.questionIndex = 0;
      this.selectedOption = "";
      this.optionSelected = false;
      this.completed = false;
      this.score = 0;
      for (let i = 0; i < this.questions.length; i++) {
        this.$set(this.questions[i], "correct", undefined);
      }
    },

    proximaAula() {
      this.$emit("proximaAtividade");
    },
  },
};
</script>

<style scoped>
.completed-container {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

.completed-title {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}
</style>
