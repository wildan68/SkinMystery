<template>
<div class="products_ulasan">
    <div class="flex gap-[4px] flex-col">
        <span class="font-[600] text-[24px]">
            ULASAN
        </span>
        <span class="text-[#404040]">
            L'Oreal Paris Revitalift Crystal Micro Essence Skin Care
        </span>
    </div>
    <div class="flex gap-[64px]">
        <div class="flex flex-col gap-[8px] items-center">
            <span class="text-[64px] font-[800] text-[#0A0A0A]">
                4.9<span class="text-[#757575] text-[16px]">/5</span>
            </span>
            <div class="flex mt-[-20px]">
                <ic-star v-for="i in 5" :key="i" class="w-[24px] h-[24px]"></ic-star>
            </div>
            <span class="text-[12px] text-[#616161]">
                (7.229) Ulasan
            </span>
        </div>
        <div class="flex gap-[16px] py-[14px]">
            <div class="flex flex-col gap-[5px] justify-between">
                <div class="flex">
                    <ic-star v-for="i in 5" :key="i"></ic-star>
                </div>
                <div class="flex">
                    <ic-star v-for="i in 4" :key="i"></ic-star>
                </div>
                <div class="flex">
                    <ic-star v-for="i in 3" :key="i"></ic-star>
                </div>
                <div class="flex">
                    <ic-star v-for="i in 2" :key="i"></ic-star>
                </div>
                <div class="flex">
                    <ic-star v-for="i in 1" :key="i"></ic-star>
                </div>
            </div>
            <div class="flex w-[106px] flex-col gap-[5px] justify-between">
                <div class="bar">
                    <div class="bar_inner" style="width: 87%"></div>
                </div>
                <div class="bar">
                    <div class="bar_inner" style="width: 30%"></div>
                </div>
                <div class="bar">
                    <div class="bar_inner" style="width: 18%"></div>
                </div>
                <div class="bar">
                    <div class="bar_inner" style="width: 8%"></div>
                </div>
                <div class="bar">
                    <div class="bar_inner" style="width: 0%"></div>
                </div>
            </div>
            <div class="flex flex-col gap-[5px] text-[12px] text-[#404040] justify-between">
                <span>7.229</span>
                <span>278</span>
                <span>49</span>
                <span>27</span>
                <span>10</span>
            </div>
        </div>
    </div>
    <div class="mt-[24px] flex flex-col gap-[8px]">
        <span class="font-[600] text-[16px]">
            Filter
        </span>
        <div class="flex gap-[12px]">
            <button @click.prevent="filterSelected = i" :class="filterSelected === i ? 'btn_filter selected' : 'btn_filter'" v-for="(filter, i) in filter" :key="i">
                <ic-star v-if="filter.icon"></ic-star>
                {{ filter.text }}
            </button>

        </div>
    </div>
    <div class="mt-[24px] flex flex-col gap-[8px]">
        <span class="font-[600] text-[16px]">
            SEMUA ULASAN (7.229)
        </span>
        <ReviewItems v-for="(data, i) in userReview" :key="i" :dataReview="data" />
    </div>
</div>
</template>

<script>
import ReviewItems from './review_items.vue'

import {
    icStar,
} from '../plugins/products_detail_icons'

export default {
    data() {
        return {
            filterSelected: 0,
            filter: [{
                text: 'Semua (7.229)',
                value: 0,
            }, {
                text: '5',
                value: 1,
                icon: true,
            }, {
                text: '4',
                value: 2,
                icon: true,
            }, {
                text: '3',
                value: 3,
                icon: true,
            }, {
                text: '2',
                value: 4,
                icon: true,
            }, {
                text: '1',
                value: 5,
                icon: true,
            }, {
                text: 'Dengan Komentar (600)',
                value: 6,
            }, {
                text: 'Dengan Media (700)',
                value: 7,
            }],
            // Data Review Products
            userReview: [{
                name: 'Lely Aminulloh',
                avatar: '/products/review/user1.jpg',
                date: '2022-06-21 22:09',
                variant: '50ml',
                rating: 5,
                text: `ini essence awet banget deh, aku pakenya juga cukup rutin dan ini tuh seger banget, aku pribadi suka wangi essencenya, efek yang aku rasain tuh lembabnya dapet banget dan berasa kenyal, adem juga, untuk mencerahkan juga ada meski engga terlalu gitu tapi yang paling penting tuh menghidrasi sih jadi kulit keliatan lebih sehat dan bersih gitu.`,
                media: [{
                    img: '/products/review/review1.png',
                    type: 'video',
                }, {
                    img: '/products/review/review2.png',
                    type: 'image',
                }]
            }, {
                name: 'Hello Kimberly',
                avatar: '/products/review/user2.jpg',
                date: '2022-06-21 22:09',
                variant: '50ml',
                rating: 5,
                text: `ini essence awet banget deh, aku pakenya juga cukup rutin dan ini tuh seger banget, aku pribadi suka wangi essencenya, efek yang aku rasain tuh lembabnya dapet banget dan berasa kenyal, adem juga, untuk mencerahkan juga ada meski engga terlalu gitu tapi yang paling penting tuh menghidrasi sih jadi kulit keliatan lebih sehat dan bersih gitu`,
                media: [{
                    img: '/products/review/review5.png',
                    type: 'video',
                }, {
                    img: '/products/review/review3.png',
                    type: 'image',
                }, {
                    img: '/products/review/review4.png',
                    type: 'image',
                }]
            }, {
                name: 'Patricia Okky',
                avatar: '/products/review/user0.jpg',
                date: '2022-06-21 22:09',
                variant: '50ml',
                rating: 5,
                text: `awalnya coba coba, ternyataa sebagus itu, essence nya ringan, baunya juga enak, cepat nyerap, hydrating, untuk efek lifting belum keliatan bgt, tapi lumayan, aku beli langsung yg besar, udah 4 bulan masih banyak isinya sekitar 2/5 padahal pakai setiap hari 3x setiap habis cuci muka`,
            }, {
                name: 'Irlin Zafarah',
                avatar: '/products/review/user3.jpg',
                date: '2022-06-21 22:09',
                variant: '50ml',
                rating: 3,
                text: `Aku cocok banget pake essence ini, di aku ngefek banget, bikin cerah trus bener2 bikin skin aku better bgt kalo lagi mau datang bulan, nenangin dan the best lah. Aku rekomen banget karena aku repurchase udah berkali-kali nggak mengecewakan.`,
            }, {
                name: 'Ynkanza',
                avatar: '/products/review/user0.jpg',
                date: '2022-06-21 22:09',
                variant: '50ml',
                rating: 4,
                text: `Pertama beli yang mini size hihi buat cek kecocokan dulu. Alhamdulillah ternyata cocok2 aja di kulit wajahku yang tergolong combi to oily. Teksturnya ringan, cuma agak lengket. Hasilnya keliatan setelah pemakaian rutin sekitar 1-2 bulan. Kulit wajah jadi keliatan sehat, plumpy, dan agak cerah 🤗 will pleasurely recommend this!`,
                media: [{
                    img: '/products/review/review6.png',
                    type: 'image',
                }]
            }, ]
        }
    },
    components: {
        icStar,
        ReviewItems,
    }
}
</script>

<style lang="scss" scoped>
.products_ulasan {
    display: flex;
    flex-direction: column;

    .bar {
        display: flex;
        width: 100%;
        height: 8px;
        border-radius: 12px;
        background-color: #FFEEE1;

        .bar_inner {
            height: 100%;
            background-color: #FF8B33;
            border-radius: 12px;
        }
    }

    .btn_filter {
        border-radius: 8px;
        border: 1px solid #E0E0E0;
        padding: 8px 16px 8px 16px;
        gap: 4px;
        color: #404040;

        &.selected {
            background-color: #F8F3F1;
            border: 1px solid #B54B0F;
            color: #B54B0F;
        }
    }
}
</style>
