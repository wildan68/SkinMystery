<template>
<div class="kategori">
    <div class="kategori_pilihan">
        <div class="sub_kategori shadow-lg lg:w-[826px] w-full">
            <span class="font-[600] text-[24px]">
                Kategori Pilihan
            </span>
            <div class="flex lg:justify-between justify-center gap-[10px] flex-wrap">
                <div class="item_kategori" v-for="(cat, i) in dataKategori" :key="i">
                    <div class="w-full lg:h-[139px] h-[80px] overflow-hidden rounded-[16px]">
                        <img :src="cat.img" class="w-full h-full object-cover" alt="" />
                    </div>
                    {{ cat.title }}
                </div>
            </div>
        </div>
        <div class="sub_kategori shadow-lg lg:w-[383px] w-full">
            <span class="font-[600] text-[24px]">
                Fitur Unggulan
            </span>
            <div class="flex lg:justify-between justify-center gap-[10px] flex-wrap">
                <div class="item_kategori" v-for="(cat, i) in fiturUnggulan" :key="i">
                    <div class="w-full lg:h-[139px] h-[80px] overflow-hidden rounded-[16px]">
                        <img :src="cat.img" class="w-full h-full object-cover" alt="" />
                    </div>
                    {{ cat.title }}
                </div>
                <img src="/png/cermin_ajaib.png" class="w-[80px] h-[100px] lg:w-auto lg:h-auto"/>
            </div>
        </div>
    </div>
    <AdsBanner img="/png/watsons_banner.png" class="ml-[24px] mr-[24px] lg:ml-[104px] lg:mr-[104px]" />
</div>
</template>

<script>
import AdsBanner from '../components/ads_banner'

export default {
    data() {
        return {
            dataKategori: [{
                img: '/png/klub_pria.png',
                title: 'Klub Pria',
            }, {
                img: '/png/perawatan_kosmetik.png',
                title: 'Perawatan & kosmetik',
            }, {
                img: '/png/rahasia_wanita.png',
                title: 'Rahasia Wanita',
            }, {
                img: '/png/evoucher.png',
                title: 'E-Voucher',
            }],
            fiturUnggulan: [{
                img: '/png/konsultasi.png',
                title: 'Konsultasi Dokter',
            }]
        }
    },
    components: {
        AdsBanner,
    }
}
</script>

<style lang="scss" scoped>
.kategori_pilihan {
    padding: 64px 104px 0 104px;
    display: flex;
    gap: 24px;
    justify-content: center;

    @media (max-width: 1024px) {
        padding: 24px;
        flex-direction: column;
    }

    .sub_kategori {
        border-radius: 16px;
        padding: 24px;
        height: 306px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 1024px) {
          height: auto;  
        }

        .item_kategori {
            width: 139px;
            display: flex;
            flex-direction: column;
            gap: 13px;
            align-items: center;
            flex-wrap: wrap;
            color: #404040;

            @media (max-width: 1024px) {
                width: 80px;
            }
        }

    }
}
</style>
