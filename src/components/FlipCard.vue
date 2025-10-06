<template>
  <v-card
    class="flip-card"
    :style="{ width: fullWidth ? '100%' : 'auto' }"
    @click="flipCard"
    @mouseenter="startLottieAnimation"
    @mouseleave="resetLottieAnimation"
  >
    <div class="flip-card-inner" :class="{ flipped: isFlipped }">
      <div class="flip-card-front">
        <div class="lottie-container" ref="lottieContainer"></div>
        <slot name="front"></slot>
      </div>

      <div class="flip-card-back text-body-1">
        <slot name="back"></slot>
      </div>
    </div>
  </v-card>
</template>

<script>
import lottie from "lottie-web";
import animationData from "@/assets/lottiefiles/click_hand.json";

export default {
  data() {
    return {
      isFlipped: false,
      lottieAnim: null,
    };
  },

  props: ["fullWidth"],

  mounted() {
    this.renderLottieAnimation();
  },

  methods: {
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

    flipCard() {
      this.isFlipped = !this.isFlipped;
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
  width: 275px;
  height: 300px;
  perspective: 1000px;
  border-radius: 8px;
  transition: transform 200ms ease;
  position: relative;
  margin: 0 auto;
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
  flex-wrap: wrap;
  color: white;
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: bold;
  padding: 10px;
}

.flip-card-back {
  overflow: auto;
  font-size: 1.08rem;
  line-height: 1.5rem;
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
  align-items: center;
  justify-content: center;
}

.flip-card-back {
  background-color: #4caf50;
  transform: rotateY(180deg);
  color: white;
}
</style>
