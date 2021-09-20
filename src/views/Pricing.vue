<template>
    <div>

     <Upper />
    <Navy />
     <Nav />
<Prices />
<Footer />
<Down />
    </div>

</template>
<script>
import Footer from '@/components/Footer.vue'
import Prices from '@/components/Prices.vue'
import Navy from '@/components/Navy.vue'
import Upper from '@/components/Upper.vue'
import Nav from '@/components/Nav.vue'
import Down from '@/components/Down.vue'


export default {
  components: {
    Footer,
    Navy,
    Prices,
    Upper,
    Nav,
    Down,
  }

}
</script>