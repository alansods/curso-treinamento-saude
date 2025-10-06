<template>
  <v-card
    class="flip-card my-5"
    @click="flipCard"
    @mouseenter="startLottieAnimation"
    @mouseleave="resetLottieAnimation"
  >
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <div
        class="flip-card-front"
        :style="`background-image: url(${require(`../assets/${this.bgImg}`)})`"
      >
        <div class="lottie-container" ref="lottieContainer"></div>
        <v-card-text class="flip-card-title">
          <slot name="front"></slot>
        </v-card-text>
      </div>

      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </v-card>
</template>

<script>
import lottie from "lottie-web";
import animationData from "@/assets/lottiefiles/click_hand.json";

export default {
  props: ["bgImg"],

  data() {
    return {
      isFlipped: false,
      lottieAnim: null,
    };
  },

  mounted() {
    this.renderLottieAnimation();
  },

  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },

    renderLottieAnimation() {
      const container = this.$refs.lottieContainer;

      if (container) {
        const animationOptions = {
          container: container,
          animationData: animationData,
          loop: true,
          autoplay: false,
        };

        this.lottieAnim = lottie.loadAnimation(animationOptions);
      }
    },

    startLottieAnimation() {
      if (this.lottieAnim) {
        this.lottieAnim.play();
      }
    },

    resetLottieAnimation() {
      if (this.lottieAnim) {
        this.lottieAnim.goToAndStop(0);
      }
    },
  },
};
</script>

<style scoped>
.flip-card {
  width: 360px;
  height: 360px;
  perspective: 1000px;
  border-radius: 8px;
  transition: transform 200ms ease;
  position: relative;
}

.flip-card:hover {
  transform: translateY(-10px);
}

@media (max-width: 600px) {
  .flip-card {
    width: 100%;
    height: 300px;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.lottie-container {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  object-fit: cover;
  padding-right: 2px;
}

.flipped {
  transform: rotateY(180deg);
}

.flip-card-front {
  text-align: center;
  display: flex;
}

.flip-card-back {
  overflow: auto;
  font-size: 1.05rem;
  padding: 20px;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
}

.flip-card-front {
  background-color: #2196f3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-position: center;
  background-size: cover;
}

.flip-card-back {
  background-color: #4caf50;
  transform: rotateY(180deg);
  color: white;
}

.flip-card-title {
  font-size: 1.3rem;
  font-weight: bold;
  background: white;
  border-radius: 0 0 8px 8px;
}
</style>
