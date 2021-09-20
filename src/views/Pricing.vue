<template>
  <div>
    <Trial />
    <Prices />
    <Footer />
    <Down />
  </div>
</template>
<script>
import Trial from "@/views/Trial.vue";
import Footer from "@/components/Footer.vue";
import Prices from "@/components/Prices.vue";
import Down from "@/components/Down.vue";

export default {
  components: {
    Footer,
    Prices,
    Down,
    Trial,
  },
};
</script>