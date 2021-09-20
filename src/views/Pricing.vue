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
import Upper from "@/components/Upper.vue";
import Down from "@/components/Down.vue";

export default {
  components: {
    Footer,
    Prices,
    Upper,
    Down,
    Trial,
  },
};
</script>