<template>
<div>

  <Upper />
    <Navy />
     <Nav />
    <h1>
        Services about to come
    </h1>
    <Footer />
</div>

</template>
<script>
import Footer from '@/components/Footer.vue'
import Navy from '@/components/Navy.vue'
import Upper from '@/components/Upper.vue'
import Nav from '@/components/Nav.vue'

export default {
    name: 'Services',
    components: {
        Footer,
        Navy,
        Upper,
        Nav  }
}
</script>