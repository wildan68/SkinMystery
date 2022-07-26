<template>
<div class="voucher_store flex flex-col gap-[16px]">
    <div class="voucher_list">
        <div class="voucher_item">
            <div class="flex gap-[16px]">
                <div class="flex-1 flex-col flex">
                    <span>Cashback</span>
                    <span class="font-[600] text-[18px]">50rb</span>
                    <span>min. Pembelian <span class="font-[600] text-[#404040]">350rb</span></span>
                </div>
                <div class="flex">
                    <ic-voucher></ic-voucher>
                </div>
            </div>
            <div class="flex gap-[8px] items-center">
                <button class="flex-1 h-[30px] rounded-[8px] border-[#B54B0F] border text-[#B54B0F]">
                    Pakai
                </button>
                <div class="flex justify-end items-center">
                    <ic-info-black></ic-info-black>
                </div>
            </div>
        </div>
        <div class="voucher_item">
            <div class="flex gap-[16px]">
                <div class="flex-1 flex-col flex">
                    <span>Cashback</span>
                    <span class="font-[600] text-[18px]">100rb</span>
                    <span>min. Pembelian <span class="font-[600] text-[#404040]">400rb</span></span>
                </div>
                <div class="flex">
                    <ic-voucher></ic-voucher>
                </div>
            </div>
            <div class="flex gap-[8px] items-center">
                <button class="flex-1 h-[30px] rounded-[8px] border-[#B54B0F] border text-[#B54B0F]">
                    Pakai
                </button>
                <div class="flex justify-end items-center">
                    <ic-info-black></ic-info-black>
                </div>
            </div>
        </div>
    </div>
    <button class="text-[#404040] font-[600] gap-[4px]">
        +6 Lainnya
        <i class="bi bi-chevron-down"></i>
    </button>
</div>
</template>

<script>
import {
    icVoucher,
    icInfoBlack,
} from '../plugins/products_detail_icons'

export default {
    components: {
        icVoucher,
        icInfoBlack,
    },
}
</script>

<style lang="scss" scoped>
.voucher_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 10px;

    .voucher_item {
        border-radius: 8px;
        background-color: #fff;
        padding: 8px 16px 8px 16px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
        background-image: url('/png/voucher_vector.png');
        background-position: top right;
        background-repeat: no-repeat;
        height: 117px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-size: 12px;
        color: #757575;
    }
}
</style>
