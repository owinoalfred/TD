<template>

    <Trial />
    <Bodydata />
    <Lowerbody />
    <Footer />
    <Down />

</template>

<script>
// @ is an alias to /src
import Bodydata from "@/components/Bodydata.vue";
import Footer from "@/components/Footer.vue";
import Lowerbody from "@/components/Lowerbody.vue";
import Down from "@/components/Down.vue";
import Trial from "@/views/Trial.vue";



export default {
  name: "Home",
  components: {
    Bodydata,
    Footer,
    Lowerbody,
    Down,
    Trial
  },
};
</script>
