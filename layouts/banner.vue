<template>
<div class="banner">
    <div class="flex w-full lg:w-auto lg:flex-row flex-col lg:gap-[24px] gap-[16px] h-[347px]">
        <div class="lg:w-[817px] h-full rounded-[16px] overflow-hidden relative">
            <div class="swiper overflow-hidden flex" v-swiper:mySwiper="bannerSlide">
                <div class="swiper-wrapper flex items-center">
                    <div class="swiper-slide">
                        <img src="@/assets/banner/banner1.png" class="w-full h-full object-cover" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/banner/banner1.png" class="w-full h-full object-cover" alt="" />
                    </div>
                    <div class="swiper-slide">
                        <img src="@/assets/banner/banner1.png" class="w-full h-full object-cover" alt="" />
                    </div>
                </div>
                <div class="swiper-pagination absolute bottom-[24px] left-[24px]"></div>
            </div>

            <div class="absolute bottom-[16px] right-[16px] flex gap-[8px]">
                <button class="btn_navigation banner-prev">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <button class="btn_navigation banner-next">
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
        <div class="lg:w-[397px] h-full rounded-[16px] overflow-hidden">
            <img src="@/assets/banner/banner2.png" class="w-full h-full object-cover" alt="" />
        </div>
    </div>
</div>
</template>

<script>
import '@/assets/css/banner_swiper.css'

export default {
    data() {
        return {
            bannerSlide: {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.banner-next',
                    prevEl: '.banner-prev',
                },
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    background-color: #F3F3F3;
    height: 427px;
    background-image: url('/decoration/bunga.svg');
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1024px) {
        height: auto;
        padding: 24px;
    }

    .btn_navigation {
        border-radius: 8px;
        padding: 4px 10px 4px 10px;
        background-color: #FFFFFF;
        font-size: 24px;
        color: #B54B0F;

        &:hover {
            background-color: #B54B0F;
            color: #FFFFFF;
        }

        @media (max-width: 1024px) {
            padding: 3px 8px 3px 8px;
            font-size: 14px;
        }
    }
}
</style>
