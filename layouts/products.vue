<template>
<div class="products">
    <div class="flex relative items-center">
        <div class="swiper overflow-hidden flex relative items-center" v-swiper:mySwiper="kategoriSlide">
            <div class="swiper-wrapper flex items-center">
                <div class="swiper-slide kategori_items" v-for="(cat, i) in kategori" :key="i">
                    <div class="absolute bottom-0 top-0 left-0 right-0 overflow-hidden">
                        <img :src="cat.bg" class="w-full h-full object-cover" alt="" />
                    </div>
                    <span class="z-10 w-[80%] font-[500] text-[16px] text-white">{{ cat.name }}</span>
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
    <div class="products_list">
        <div class="products_item" v-for="(products, i) in products" :key="i">
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
            <button class="absolute bottom-[8px] text-white gap-[3px]" @click.prevent="$router.push('/products/single')">
                <ic-cart-product></ic-cart-product>
                Kantongin
            </button>
        </div>
    </div>
    <div class="flex w-full items-center justify-center my-[24px]">
        <button @click.prevent="loadMore" class="w-[270px] h-[48px] bg-white text-[#B54B0F] border-[#B54B0F] hover:bg-[#B54B0F] hover:text-white border rounded-[16px] px-[65px]">
            Muat Lebih Banyak
        </button> 
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
            kategori: [{
                bg: '/png/product_list_bg/cat1.png',
                name: 'For You',
            }, {
                bg: '/png/product_list_bg/cat2.png',
                name: 'Deals Belanja Cantik',
            }, {
                bg: '/png/product_list_bg/cat3.png',
                name: 'Diskon Spesial',
            }, {
                bg: '/png/product_list_bg/cat4.png',
                name: 'Serum',
            }, {
                bg: '/png/product_list_bg/cat5.png',
                name: 'Toner',
            }, {
                bg: '/png/product_list_bg/cat6.png',
                name: 'Moisturizer',
            }, ],
            kategoriSlide: {
                slidesPerView: 6,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            //products: [],
        }
    },
    components: {
        icCartProduct,
        icMap,
        icStar,
    },
    computed: {
        products() {
            return this.$store.state.get_products.products
        }
    },
    methods: {
        loadMore() {
            this.$store.dispatch('get_products/getMoreProducts')
        }
    },
    async mounted() {
        await this.$store.dispatch('get_products/getProducts')
    }
}
</script>

<style lang="scss" scoped>
.products {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 104px 0 104px;
    margin-top: 40px;

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

    .kategori_items {
        width: 192px;
        height: 72px;
        background-color: red;
        border-radius: 16px;
        display: flex;
        position: relative;
        overflow: hidden;
        align-items: center;
        padding: 0 24px 0 24px;

    }

    .products_list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
        gap: 16px;

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
            width: 192px;

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
    }

}
</style>
