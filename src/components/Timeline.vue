<template>
  <v-timeline class="py-16">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
      fill-dot
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="700"
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <v-card :class="[year.color]" class="elevation-0">
        <v-card-text class="white--text">
          {{ year.text }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: ["years"],

  data: () => ({}),
};
</script>

<style>
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(odd):not(.v-timeline-item--before)
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item:nth-child(odd):not(.v-timeline-item--before)
  .v-timeline-item__body
  > .v-card::after,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card:not(.v-card--link)::before,
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
  .v-timeline-item--after
  .v-timeline-item__body
  > .v-card::after {
  left: -9px;
}

.v-timeline-item__dot {
  box-shadow: none;
}

.theme--light.v-timeline .v-timeline-item .v-card:not(.v-card--link)::before {
  border: none;
}

.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(odd):not(.v-timeline-item--before), .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after, .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(even):not(.v-timeline-item--after), .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--before {
  padding-bottom: 80px;
}
</style>
