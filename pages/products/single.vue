<template>
<div class="mainapp">
    <Navbar />
    <div v-if="$system.overlay" class="fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-[15]" @click.prevent="closeOverlay"></div>
    <ProductInfo />
    <ProductReview />
</div>
</template>

<script>
// Create Layouts
import Navbar from '@/layouts/navbar'
import ProductInfo from '@/layouts/products/products_info'
import ProductReview from '@/layouts/products/products_review'

export default {
    components: {
        Navbar,
        ProductInfo,
        ProductReview,
    },
    methods: {
        closeOverlay() {
            if (this.$system.popupBuy) this.$root.$emit('closeBuyPopup')
            this.$system.closeOverlay()
        }
    }
}
</script>
