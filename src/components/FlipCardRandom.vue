<template>
  <div>
    <v-row>
      <v-col cols="12"
        ><small class="text-center d-block grey--text"
          >(Clique nos cards abaixo para ver o conteúdo)</small
        ></v-col
      >
    </v-row>

    <v-row justify="start">

      <v-col cols="12" sm="3" v-for="card in cards" :key="card.id">
        <v-card class="flip-card" @click="flipCard(card.id)">
          <div class="flip-card-inner" :class="{ 'flipped': card.isFlipped }">
            <v-card-text class="flip-card-front">
              <v-icon size="50" color="white">mdi-help-circle</v-icon>
              <span>{{ card.front }}</span>
            </v-card-text>

            <v-card-text class="flip-card-back" :class="{'error': !card.isAssedio}">
              <v-icon v-if="card.isAssedio" size="50" color="white">mdi-check-circle</v-icon>
              <v-icon v-else size="50" color="white">mdi-close-circle</v-icon>
              <span>{{ card.isAssedio ? "É assédio moral" : "Não é assédio moral"}}</span>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,

      cards: [
        {
          id: 1,
          front:
            "Retirar a autonomia do colaborador ou contestar, a todo o momento, suas decisões.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 2,
          front:
            "Ignorar a presença do assediado, dirigindo-se apenas aos demais colaboradores.",
            isAssedio: true,
          isFlipped: false,
        },
        {
          id: 3,
          front: "Passar tarefas humilhantes.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 4,
          front: "Gritar ou falar de forma desrespeitosa.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 5,
          front: "Espalhar rumores ou divulgar boatos ofensivos a respeito do colaborador.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 6,
          front: "Não levar em conta seus problemas de saúde.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 7,
          front: "Criticar a vida particular da vítima.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 8,
          front: "Atribuir apelidos pejorativos.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 9,
          front: "Desconsiderar ou ironizar, injustificadamente, as opiniões do colaborador.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 10,
          front: "Retirar cargos e funções sem motivo justificável.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 11,
          front: "Impor condições e regras de trabalho personalizadas, diferentes das exigidas dos outros profissionais.",
          isAssedio: true,
          isFlipped: false,
        },
        {
          id: 12,
          front: "Exigências profissionais.",
          isAssedio: false,
          isFlipped: false,
        },
        {
          id: 13,
          front: "Aumento do volume de trabalho.",
          isAssedio: false,
          isFlipped: false,
        },
        {
          id: 14,
          front: "Uso de mecanismos de controle.",
          isAssedio: false,
          isFlipped: false,
        },
      ],
    };
  },

  computed: {

  },

  methods: {
    flipCard(cardId) {
      const card = this.cards.find((card) => card.id === cardId);
      card.isFlipped = !card.isFlipped;
    },

    shuffledCards() {
      this.cards = [...this.cards].sort(() => Math.random() - 0.5);
    },
  },

  created() {
    this.shuffledCards();
  },
};
</script>

<style scoped>
.flip-card {
  width: 275px;
  height: 275px;
  perspective: 1000px;
  border-radius: 8px;
  transition: transform 200ms ease;
  margin: 0 auto;
}

.flip-card:hover {
  transform: translateY(-10px);
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped {
  transform: rotateY(180deg);
}
.flip-card-back {
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: bold;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flip-card-front {
  background-color: #f3a621;
  text-align: center;
  padding-top: 20px;
  color: white;
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: bold;
}

.flip-card-back {
  background-color: #4caf50;
  transform: rotateY(180deg);
  color: white;
}

@media (max-width: 600px) {
  .flip-card {
    width: 95%;
    height: 250px;
  }

  .flip-card-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
}
</style>
