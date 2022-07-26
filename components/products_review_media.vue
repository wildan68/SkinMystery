<template>
<div class="review_media">
    <span class="font-[600] text-[20px]">
        MEDIA DARI PEMBELI
    </span>
    <div class="flex w-[85%] relative items-center">
        <div class="swiper overflow-hidden flex relative items-center" v-swiper:mySwiper="mediaSlide">
            <div class="swiper-wrapper flex items-center">
                <div class="swiper-slide rounded-[17px] w-[117px] h-[117px] overflow-hidden" v-for="(media, i) in mediaItems" :key="i">
                    <img :src="media.img" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
        <div class="absolute left-[-20px] flex justify-center items-center">
            <button class="btn_navigation items-prev shadow-lg">
                <i class="bi bi-chevron-left"></i>
            </button>
        </div>
        <div class="absolute right-[-20px] flex justify-center items-center">
            <button class="btn_navigation items-next shadow-lg">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        mediaItems: Array,
    },
    data() {
        return {
            mediaSlide: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                navigation: {
                    nextEl: '.items-next',
                    prevEl: '.items-prev',
                },
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.review_media {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px 24px 32px 24px;
    border-radius: 12px;
    background-color: #F8F3F1;
    align-items: center;
    overflow: hidden;

    .btn_navigation {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #fff;

        &:hover {
            background-color: #B54B0F;
            color: #fff;
        }
    }
}
</style>
