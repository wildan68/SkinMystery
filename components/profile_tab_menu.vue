<template>
<div class="swiper overflow-hidden flex border-b border-[#E0E0E0]" v-swiper:mySwiper="tabMenuSlide">
    <div class="swiper-wrapper flex items-end lg:w-full">
        <button @click.prevent="tabSelected = i" :class="tabSelected === i ? 'swiper-slide btn_tab selected' : 'swiper-slide btn_tab'" v-for="(menu, i) in dataMenu" :key="i">
            {{ menu.title }}
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            dataMenu: [{
                title: 'Profile Saya'
            }, {
                title: 'Rekening Bank'
            }, {
                title: 'Buku Alamat'
            }, {
                title: 'Pesanan Saya'
            }, {
                title: 'Voucher Saya'
            }, {
                title: 'Toko Diikuti'
            }, {
                title: 'Ulasan Saya'
            }, ],
            tabSelected: 0,
            tabMenuSlide: {
                slidesPerView: 'auto',
                spaceBetween: 5,
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    840: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_tab {
    width: 100%;
    padding: 16px 0 16px 0;
    border-bottom: 1px solid transparent;
    font-size: 16px;
    font-weight: 600;
    color: #9E9E9E;

    &.selected {
        color: #B54B0F;
        border-bottom: 1px solid #B54B0F;
    }
}
</style>
