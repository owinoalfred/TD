<template>
<div>
<Upper />
    <Navy />
     <Nav />
    <h1>
        Tools also coming soon
    </h1>
    <Footer />
</div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Navy from '@/components/Navy.vue'
import Upper from '@/components/Upper.vue'
export default {
    components: {
        Navy,
        Footer,
        Upper
    }
}
</script>