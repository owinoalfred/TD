<template>

    <Upper />
    <Navy />
     <Nav />
    <h1>
        PROMOS COMING SOON
    </h1>
    <Footer />
    <Down />

</template>
//creation is key
<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import Navy from "@/components/Navy.vue";
import Upper from "@/components/Upper.vue";
import Nav from "@/components/Nav.vue";
import Down from "@/components/Down.vue";


export default {
  name: "Home",
  components: {

    Nav,
    Footer,
    Navy,

    Upper,
    Down
  },
};
</script>
