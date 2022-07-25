<template>
<div class="terlaris">
    <div class="flex">
        <div class="flex-1">
            <span class="font-[600] text-[24px]">
                Perawatan Wajah Terlaris
            </span>
        </div>
        <button class="lihat_semua">
            Lihat Semua <i class="bi bi-chevron-right"></i>
        </button>
    </div>
    <!-- slide -->
    <div class="flex relative items-center">
        <div class="swiper overflow-hidden flex relative items-center" v-swiper:mySwiper="productSlide">
            <div class="swiper-wrapper flex items-center">
                <div class="swiper-slide" v-for="(products, i) in products" :key="i" ref="productItems">
                    <div class="products_item">
                        <div class="products_item_sub">
                            <div class="w-full h-[165px] overflow-hidden rounded-[12px]">
                                <img :src="products.item_image" class="w-full h-full object-cover" alt="" />
                            </div>
                            <span class="text-[12px] mt-[12px] font-[500]">
                                {{ $system.excerpt(products.item_name, 20) }}
                            </span>
                            <span class="text-[18px] price_text font-[600]">
                                {{ $system.toRupiah(products.item_price) }}
                            </span>
                            <span class=" line-through text-[12px] text-[#9E9E9E]">
                                Rp. 30.000
                            </span>
                            <div class="flex gap-[5px]">
                                <div class="flex gap-[3px] items-center">
                                    <ic-star></ic-star> <span>4.5</span>
                                </div>
                                <span>
                                    52 Terjual
                                </span>
                            </div>
                            <div class="flex gap-[4px] text-[12px] text-[#757575] mt-[5px]">
                                <ic-map></ic-map>
                                <span>
                                    {{ products.store_city }}, {{ products.store_province }}
                                </span>
                            </div>
                        </div>
                        <button class="absolute bottom-[8px] text-white gap-[3px]">
                            <ic-cart-product></ic-cart-product>
                            Kantongin
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div class="absolute left-[-20px] flex justify-center items-center">
            <button class="btn_navigation products-prev shadow-lg">
                <i class="bi bi-chevron-left"></i>
            </button>
        </div>
        <div class="absolute right-[-20px] flex justify-center items-center">
            <button class="btn_navigation products-next shadow-lg">
                <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import {
    icCartProduct,
    icMap,
    icStar,
} from '../plugins/icons'

export default {
    data() {
        return {
            products: [],
            productSlide: {
                slidesPerView: 6,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.products-next',
                    prevEl: '.products-prev',
                },
            }
        }
    },
    components: {
        icCartProduct,
        icMap,
        icStar,
    },
    computed: {
        // hitung jumlah ref productItems swiper
    },

    async mounted() {
        // fetch data dari vuex
        await this.$store.dispatch('get_terlaris/getTerlaris')
        // ambil data product di get_terlaris vuex
        this.products = this.$store.state.get_terlaris.products
    }
}
</script>

<style lang="scss" scoped>
.terlaris {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 104px 0 104px;

    .lihat_semua {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 16px;
        color: #B54B0F;
        gap: 8px;
    }

    .products_item {
        display: flex;
        flex-direction: column;
        height: 357px;
        background-color: #B54B0F;
        border-radius: 12px;
        position: relative;
        flex-wrap: wrap;
        color: #404040;
        overflow: hidden;
        align-items: center;

        .products_item_sub {
            display: flex;
            flex-direction: column;
            padding: 12px;
            height: 323px;
            width: 100%;
            background-color: #F5ECE8;
            border-radius: 0 0 12px 12px;
        }
    }

    .btn_navigation {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;

        &:hover {
            background-color: #B54B0F;
            color: #fff;
        }
    }
}
</style>
