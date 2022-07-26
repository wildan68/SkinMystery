<template>
<div class="products_review">
    <ProductReviewMedia :mediaItems="mediaItems"/>
</div>
</template>

<script>
import ProductReviewMedia from '@/components/products_review_media'

export default {
    data() {
        return {
            mediaItems: [{
                img: '/products/review/review1.png',
                type: 'video',
            }, {
                img: '/products/review/review2.png',
                type: 'image',
            }, {
                img: '/products/review/review3.png',
                type: 'image',
            }, {
                img: '/products/review/review4.png',
                type: 'image',
            }, {
                img: '/products/review/review5.png',
                type: 'video',
            }, {
                img: '/products/review/review6.png',
                type: 'image',
            }, {
                img: '/products/review/review7.png',
                type: 'image',
            }, {
                img: '/products/review/review8.png',
                type: 'image',
            }, {
                img: '/products/review/review9.png',
                type: 'image',
            }]
        }
    },
    components: {
        ProductReviewMedia,
    },
}
</script>

<style lang="scss" scoped>
.products_review {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 104px 0 104px;
    width: 80%;
}
</style>
