<template>
<div class="products_info">
    <Breadcrumbs :data="breadcrumbs" />

    <div class="flex mt-[24px] gap-[56px] justify-center">
        <div class="flex-1 flex flex-col gap-[23px] items-end">
            <div class="w-[348px] h-[348px] overflow-hidden rounded-[8px] relative">
                <zoom-on-hover :img-normal="imageListSelected.img" class="w-full h-full object-cover cursor-crosshair" :scale="2.5"></zoom-on-hover>
                <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center" v-if="imageListSelected.type === 'video'">
                    <img src="@/assets/png/play_icon.png" class="w-[32px] h-[32px]" />
                </div>
            </div>
            <div class="flex items-center relative">
                <div class="swiper overflow-hidden flex relative items-center w-[348px]" v-swiper:mySwiper="imageSlide">
                    <div class="swiper-wrapper flex items-center">
                        <div :class="imageListSelected.index === i ? 'swiper-slide image_items selected' : 'swiper-slide image_items'" @click.prevent="selectImage(i, image.img, image.type)" v-for="(image, i) in imageList" :key="i">
                            <img :src="image.img" class="w-full h-full object-cover" />
                            <div class="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center" v-if="image.type === 'video'">
                                <img src="@/assets/png/play_icon.png" class="w-[32px] h-[32px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute left-[-20px] flex justify-center items-center">
                    <button class="btn_navigation image-button-prev shadow-lg">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                </div>
                <div class="absolute right-[-20px] flex justify-center items-center">
                    <button class="btn_navigation image-button-next shadow-lg">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-[8px]">
            <span class="text-[18px] font-[600]">
                L'Oreal Paris Revitalift Crystal Micro Essence Skin Care
            </span>
            <div class="flex gap-[8px] w-full">
                <div class="font-[600] text-[16px] flex gap-[8px] items-center">
                    4.8 <rating :rating="parseFloat(4.5)" :increment="0.5" :max-rating="5" :read-only="true" :star-size="24" :show-rating="false" active-color="#FF8B33"></rating>
                </div>
                <div class="border-l border-[#C2C2C2] h-full"></div>
                <div class="font-[600] text-[16px] flex gap-[8px] items-center">
                    4,5rb
                    <span class="text-[14px] text-[#757575] font-[400]">
                        Penilaian
                    </span>
                </div>
                <div class="border-l border-[#C2C2C2] h-full"></div>
                <div class="font-[600] text-[16px] flex gap-[8px] items-center">
                    13,63rb
                    <span class="text-[14px] text-[#757575] font-[400]">
                        Terjual
                    </span>
                </div>
            </div>
            <div class="flex flex-col">
                <span class="price_text text-[16px]">
                    Rp<b class="price_text text-[32px]">289</b>.000
                </span>
                <div class="flex gap-[4px] items-center">
                    <div class="px-[6px] py-[2px] bg-[#CB3A31] text-white rounded-[4px]">
                        56%
                    </div>
                    <span class="price_text text-[#757575] line-through">
                        Rp289.000
                    </span>
                </div>
            </div>
            <Category :data="[{name: 'Kulit berjerawat'}, {name: 'Flek hitam'}, {name: 'Dark spot'}]" />
            <div class=" border-b-2 border-[#EDEDED] my-[8px]"></div>
            <div class="flex flex-col gap-[8px]">
                <div class="flex gap-[8px] items-center">
                    <span class="font-[600] text-[16px]">
                        Aman Untuk
                    </span>
                    <ic-info></ic-info>
                </div>
                <ProductSafe :data="productSafe" />
            </div>
            <div class=" border-b-2 border-[#EDEDED] my-[8px]"></div>
            <ProductMenu />
            <div class=" border-b-2 border-[#EDEDED] my-[8px]"></div>
            <ProductStore />
            <div class=" border-b-2 border-[#EDEDED] my-[8px]"></div>
            <div class="flex flex-col gap-[8px]">
                <span class="font-[600] text-[16px]">
                    Voucher Toko
                </span>
                <ProductVoucherStore />
            </div>
            <div class=" border-b-2 border-[#EDEDED] my-[8px]"></div>
            <div class="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#F1F6E7] rounded-[12px]">
                <span class="font-[600] text-[16px]">
                    Beli di aplikasi, makin banyak promo!
                </span>
                <div class="flex gap-[16px]">
                    <div class="flex gap-[12px] items-center">
                        <ic-mobile-phone></ic-mobile-phone>
                        <span>Scan QR-nya untuk lihat barang ini di aplikasi Skin Mystery. Bebas ongkir, lho~</span>
                    </div>
                    <div class="flex">
                        <button class="w-[100px] h-[34px] rounded-[8px] font-[600] border border-[#C2C2C2] text-[#404040] gap-[8px] px-[12px] py-[9px] text-[12px]">
                            <ic-scan></ic-scan>
                            Scan QR
                        </button>
                    </div>
                </div>
            </div>
            <div class=" border-b-2 border-[#EDEDED] my-[8px]"></div>
            <div class="flex justify-between mb-[48px]">
                <span class="text-[12px] text-[#757575]">
                    Ada masalah dengan produk ini?
                </span>
                <div class="flex gap-[4px] text-[12px] font-[600]">
                    <ic-report></ic-report>
                    Laporkan
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="border border-[#E0E0E0] rounded-[12px] p-[16px]">
                <span class="font-[600] text-[16px] text-[#0A0A0A]">
                    Aroma
                </span>

                <ProductVariant :data="[{
                name: 'Lavender',
                img: '/png/variant1.png',
                }, {
                name: 'Jeruk',
                img: '/png/variant2.png',
                }, {
                name: 'Blackberry',
                img: '/png/variant3.png',
                }, {
                name: 'Vanila',
                img: '/png/variant4.png',
                }, {
                name: 'Kopi',
                img: '/png/variant5.png',
                }]" class="mt-[12px]" />

                <div class=" border-b-2 border-[#EDEDED] my-[16px]"></div>
                <span class="font-[600] text-[16px] text-[#0A0A0A]">
                    Aroma
                </span>
                <ProductQuantity :maxQuantity="75" class="mt-[12px]"/>
                <div class=" border-b-2 border-[#EDEDED] my-[16px]"></div>
                <div class="flex justify-between items-center">
                    <div class="flex-1 text-[#616161]">
                        Subtotal
                    </div>
                    <div class="flex-1 flex flex-col text-[16px] price_text items-end">
                        <span class="line-through price_text text-[14px] text-[#757575]">Rp289.000</span>
                        <span>Rp<b class="text-[32px] price_text">289</b>.000</span>
                    </div>
                </div>
                <div class="flex flex-col gap-[8px] w-full">
                    <button class="h-[40px] gap-[8px] bg-[#B54B0F] text-white rounded-[12px]">
                        <ic-cart></ic-cart>
                        Kantongin
                    </button>
                    <button class="h-[40px] gap-[8px] border border-[#B54B0F] text-[#B54B0F] rounded-[12px]">
                        Beli Langsung
                    </button>
                </div>
            </div>
            <div class="mt-[24px] overflow-hidden w-full h-[101px] rounded-[8px]">
                <img src="/png/the_body_shop.png" class="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Breadcrumbs from '../../components/breadcrumbs'
import Category from '../../components/products_category'
import ProductSafe from '../../components/products_safe'
import ProductMenu from '../../components/products_menu'
import ProductStore from '../../components/products_store'
import ProductVoucherStore from '../../components/products_voucher_store'
import ProductVariant from '../../components/products_variant'
import ProductQuantity from '../../components/products_buy_quantity'

import {
    icInfo,
    icMobilePhone,
    icScan,
    icReport,
    icCart,
} from '../../plugins/products_detail_icons'

export default {
    data() {
        return {
            breadcrumbs: [{
                    title: 'Home',
                    link: '/',
                },
                {
                    title: 'Kecantikan',
                    link: '/',
                },
                {
                    title: 'Perawatan Wajah',
                    link: '/',
                },
                {
                    title: 'Serum Wajah',
                    link: '/',
                },
                {
                    title: 'FABERLIC Bioglow My way to use less makeup',
                    link: '/',
                }
            ],
            imageSlide: {
                slidesPerView: 5,
                spaceBetween: 5,
                navigation: {
                    nextEl: '.image-button-next',
                    prevEl: '.image-button-prev',
                },
            },
            imageList: [{
                img: '/products/products1.jpg',
                type: 'image',
            }, {
                img: '/products/products1.jpg',
                type: 'video',
            }, {
                img: '/products/products2.jpg',
                type: 'image',
            }, {
                img: '/products/products3.jpg',
                type: 'image',
            }, {
                img: '/products/products4.jpg',
                type: 'image',
            }, ],
            imageListSelected: {
                index: 0,
                img: '/products/products1.jpg',
                type: 'image',
            },
            rating: {
                rating: 4.5,
                increment: 0.5,
                maxRating: 5,
                readonly: true,
            },
            productSafe: [{
                text: 'Ibu Hamil',
                check: true,
            }, {
                text: 'Bebas Parfum',
                check: true,
            }, {
                text: 'Bebas Paraben',
                check: false,
            }, {
                text: 'Ibu Menyusui',
                check: true,
            }, {
                text: 'Bebas Alkohol',
                check: false,
            }, {
                text: 'Bebas SLS',
                check: false,
            }]
        }
    },
    components: {
        Breadcrumbs,
        Category,
        ProductSafe,
        ProductMenu,
        ProductStore,
        ProductVoucherStore,
        ProductVariant,
        ProductQuantity,
        icInfo,
        icMobilePhone,
        icScan,
        icReport,
        icCart,
    },
    methods: {
        selectImage(i, img, type) {
            this.imageListSelected.index = i
            this.imageListSelected.img = img
            this.imageListSelected.type = type
        },
    }
}
</script>

<style lang="scss" scoped>
.products_info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 104px 0 104px;
    margin-top: 24px;

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

    .image_items {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;

        &.selected {
            border: 2px solid #B54B0F;
        }
    }
}
</style>
