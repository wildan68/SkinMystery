<template>
<div class="products_review">
    <ProductReviewMedia :mediaItems="mediaItems"/>
    <ProductUlasan class="mt-[48px]"/>
    <div class="flex justify-end items-center gap-[6px] mb-[43px]">
        <button class="btn_page">
            <i class="bi bi-chevron-left"></i>
        </button>
        <button class="btn_page selected">
            1
        </button>
        <button class="btn_page">
            2
        </button>
        <button class="btn_page">
            ...
        </button>
        <button class="btn_page">
            10
        </button>
        <button class="btn_page">
            <i class="bi bi-chevron-right"></i>
        </button>
    </div>
</div>
</template>

<script>
import ProductReviewMedia from '@/components/products_review_media'
import ProductUlasan from '@/components/products_ulasan'

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
        ProductUlasan,
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

    @media (max-width: 1024px) {
        padding: 0 24px 0 24px;
        width: auto;
    }

    .btn_page {
        width: 46px;
        height: 46px;
        border-radius: 16px;
        background-color: #F8F3F1;
        color: #B54B0F;
        font-weight: 600;

        &.selected {
            background-color: #B54B0F;
            color: #FFFFFF;
        }
    }
}
</style>
