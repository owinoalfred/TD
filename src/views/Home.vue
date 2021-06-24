<template>
  <div class="min-w-30">
    <Upper />
    <Nav />
    <Navy />
    <Bodydata />
    <Lowerbody />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Bodydata from "@/components/Bodydata.vue";
import Footer from "@/components/Footer.vue";
import Lowerbody from "@/components/Lowerbody.vue";
import Navy from "@/components/Navy.vue";
import Upper from "@/components/Upper.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Bodydata,
    Nav,
    Footer,
    Navy,
    Lowerbody,
    Upper,
  },
};
</script>
