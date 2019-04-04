<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="light">
        <ion-title>
          Slider Example in Vue
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <p>Test Slider Web component in Vue.js</p>
      <ion-button @click="goToAbout" size="small" expand="block"
        >Go to About</ion-button
      >
      <ion-button
        @click="goToSlider('basichorizontal')"
        size="small"
        expand="block"
        >Basic Horizontal</ion-button
      >
      <ion-button
        @click="goToSlider('basicvertical')"
        size="small"
        expand="block"
        >Basic Vertical</ion-button
      >
      <ion-button
        @click="goToSlider('paginationnavigationhorizontal')"
        size="small"
        expand="block"
        >Pagination Navigation Horizontal</ion-button
      >
    </ion-content>
  </div>
</template>
<script>
export default {
  name: "home",
  methods: {
    goToAbout: function() {
      this.$router.push("about");
    },
    goToSlider: function(type) {
      this.$router.push("slider/" + type);
    },
    goToTest: function(type) {
      this.$router.push("test/" + type);
    }
  }
};
</script>
