<template>
<div class="populer">
    <span class="font-[600] text-[24px]">
        Pencarian Populer
    </span>
    <div class="populer_list">
        <div class="populer_item bg-[#F1F6E7]">
            <div class="flex-1 flex flex-col gap-[4px]">
                <span class="text-[16px] font-[500]">
                    Serum
                </span>
                <span class="text-[14px] text-[#616161]">
                    3rb+ Produk
                </span>
            </div>
            <div class="flex-1 flex justify-end">
                <img src="/png/populer1.png" />
            </div>
        </div>
        <div class="populer_item bg-[#F1F6E7]">
            <div class="flex-1 flex flex-col gap-[4px]">
                <span class="text-[16px] font-[500]">
                    Facial Wash
                </span>
                <span class="text-[14px] text-[#616161]">
                    2rb+ Produk
                </span>
            </div>
            <div class="flex-1 flex justify-end">
                <img src="/png/populer2.png" />
            </div>
        </div>
        <div class="populer_item bg-[#F3FDFC]">
            <div class="flex-1 flex flex-col gap-[4px]">
                <span class="text-[16px] font-[500]">
                    Toner
                </span>
                <span class="text-[14px] text-[#616161]">
                    1rb+ Produk
                </span>
            </div>
            <div class="flex-1 flex justify-end">
                <img src="/png/populer3.png" />
            </div>
        </div>
        <div class="populer_item bg-[#FBE7E8]">
            <div class="flex-1 flex flex-col gap-[4px]">
                <span class="text-[16px] font-[500]">
                    Cleanser
                </span>
                <span class="text-[14px] text-[#616161]">
                    900+ Produk
                </span>
            </div>
            <div class="flex-1 flex justify-end">
                <img src="/png/populer4.png" />
            </div>
        </div>
        <div class="populer_item bg-[#F5ECE8]">
            <div class="flex-1 flex flex-col gap-[4px]">
                <span class="text-[16px] font-[500]">
                    Face Mist
                </span>
                <span class="text-[14px] text-[#616161]">
                    500+ Produk
                </span>
            </div>
            <div class="flex-1 flex justify-end">
                <img src="/png/populer5.png" />
            </div>
        </div>
    </div>
    <AdsBanner img="/png/olay_banner.png"/>
</div>
</template>

<script>
import AdsBanner from '@/components/ads_banner'
export default {
    components: {
        AdsBanner,
    },
}
</script>

<style lang="scss" scoped>
.populer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 104px 0 104px;
    margin-top: 40px;
    
    .populer_list {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-between;

        .populer_item {
            display: flex;
            flex: 1;
            height: 98px;
            border-radius: 8px;
            align-items: center;
            justify-content: center;
            padding: 0 16px 0 16px;
        }
    }
}
</style>
