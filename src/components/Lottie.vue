<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import lottie from "lottie-web";

import animationDataHappy from "@/assets/lottiefiles/animation_happy.json";
import animationDataSad from "@/assets/lottiefiles/animation_sad.json";
import clickHand from "@/assets/lottiefiles/click_hand.json";

export default {
  props: ["sad", "happy", "hand"],

  mounted() {
    this.renderLottieAnimation();
  },

  methods: {
    renderLottieAnimation() {
      const container = this.$refs.lottieContainer;

      if (container) {
        const animationOptions = {
          container: container,
          animationData: this.animation,
          loop: true,
          autoplay: false, // Set autoplay to false initially
        };

        this.anim = lottie.loadAnimation(animationOptions); // Save the animation instance
      }
    },
  },

  computed: {
    animation() {
      if (this.sad) {
        return animationDataSad;
      } else if (this.happy) {
        return animationDataHappy;
      } else if (this.hand) {
        return clickHand;
      } else {
        // Caso nenhuma prop esteja definida, você pode retornar uma animação padrão ou `null`
        return null;
      }
    },
  },
};
</script>

<style>
/* Add any necessary styles for the Lottie container here */
</style>
