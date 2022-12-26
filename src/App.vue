<template>
  <the-header></the-header>

  <router-view> </router-view>

  <footer-card></footer-card>
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
import FooterCard from './components/layout/FooterCard.vue';
export default {
  components: {
    TheHeader,
    FooterCard,
  },
};
</script>
<style>
#app {
  background: #f2f2f2;
}
</style>

