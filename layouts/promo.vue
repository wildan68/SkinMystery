<template>
<div class="promo">
    <div class="flex">
        <div class="flex-1">
            <span class="font-[600] text-[24px]">
                Promo Brand
            </span>
        </div>
        <button class="lihat_semua">
            Lihat Semua <i class="bi bi-chevron-right"></i>
        </button>
    </div>
    <div class="flex gap-[46px] w-full">
        <div class="w-[395px] h-[470px] overflow-hidden rounded-[16px]">
            <img src="/png/promo_anniversary_banner.png" class="w-full h-full object-cover" alt="" />
        </div>
        <div class="flex-1 promo_list">
            <div class="w-full h-[198px] flex flex-col items-center" v-for="(products, i) in productList" :key="i"> 
                <img :src="products.img"/>
                <span class="text-[18px] text-[#CB3A31]">
                    {{ products.disc }}
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            productList: [{
                img: '/png/promo1.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo2.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo3.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo4.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo5.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo6.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo7.png',
                disc: 'Diskon s/d 70%',
            }, {
                img: '/png/promo8.png',
                disc: 'Diskon s/d 70%',
            }, ]
        }
    }
}
</script>

<style lang="scss" scoped>
.promo {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 104px 0 104px;
    margin-top: 40px;

    .lihat_semua {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 16px;
        color: #B54B0F;
        gap: 8px;
    }

    .promo_list {
        display: grid;
        /* grid auto coloumns auto width */
        grid-template-columns: repeat(auto-fit, minmax(143px, 1fr));
    }
}
</style>
