<template>
    <div>

     <Upper />
    <Navy />
     <Nav />
<Prices />
<Footer />
    </div>

</template>
<script>
import Footer from '@/components/Footer.vue'
import Prices from '@/components/Prices.vue'
import Navy from '@/components/Navy.vue'
import Upper from '@/components/Upper.vue'
import Nav from '@/components/Nav.vue'


export default {
  components: {
    Footer,
    Navy,
    Prices,
    Upper,
    Nav
  }

}
</script>