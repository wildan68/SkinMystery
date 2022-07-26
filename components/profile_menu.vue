<template>
<div class="profile_menu">
    <div class="flex gap-[16px]">
        <div class="flex justify-center items-center">
            <div class="w-[55px] h-[55px] overflow-hidden rounded-full">
                <img src="@/assets/png/person1.png" class="w-full h-full object-cover" alt="" />
            </div>
        </div>
        <div @click.prevent="$system.to('/profile')" class="flex-1 flex flex-col gap-[8px] cursor-pointer">
            <span class="font-[600]">aaisyawldr</span>
            <div class="flex">
                <div class="bg-[#3386FF] bg-opacity-10 px-[8px] py-[4px] rounded-[8px] flex gap-[4px]">
                    <ic-profile-diamond></ic-profile-diamond>
                    <span class="font-[600] text-[12px] text-[#3386FF]">Diamond Member</span>
                </div>
            </div>
        </div>
        <div class="flex justify-end items-center">
            <button>
                <ic-profile-gear></ic-profile-gear>
            </button>
        </div>
    </div>
    <hr class="h-[2px] bg-[#EDEDED]" />
    <div class="sub_menu">
        <div class="flex flex-col gap-[16px] items-start">
            <button class="gap-[16px]">
                <ic-profile-voucher></ic-profile-voucher>
                <span class="font-[600] text-[16px] text-[#0A0A0A]">Voucher</span>
            </button>
            <button class="gap-[16px]">
                <ic-profile-review></ic-profile-review>
                <span class="font-[600] text-[16px] text-[#0A0A0A]">Ulasan Produk</span>
            </button>
            <button class="gap-[16px]">
                <ic-profile-pesanan-dikemas></ic-profile-pesanan-dikemas>
                <span class="font-[600] text-[16px] text-[#0A0A0A]">Pesanan Saya</span>
            </button>
        </div>
        <div class="flex flex-col gap-[16px] items-start">
            <button class="gap-[16px]">
                <ic-profile-store></ic-profile-store>
                <span class="font-[600] text-[16px] text-[#0A0A0A]">Toko Diikuti</span>
            </button>
            <button class="gap-[16px]">
                <ic-profile-book></ic-profile-book>
                <span class="font-[600] text-[16px] text-[#0A0A0A]">Buku Alamat</span>
            </button>
        </div>
    </div>
    <hr class="h-[2px] bg-[#EDEDED]" />
    <div class="flex">
        <button class="gap-[16px] text-[#CB3A31]">
            <ic-profile-logout></ic-profile-logout>
            <span class="font-[600] text-[16px]">Logout</span>
        </button>
    </div>
</div>
</template>

<script>
import {
    icProfileBook,
    icProfileDiamond,
    icProfileGear,
    icProfileLogout,
    icProfilePesananDikemas,
    icProfileReview,
    icProfileStore,
    icProfileVoucher,
} from '../plugins/icons'

export default {
    components: {
        icProfileBook,
        icProfileDiamond,
        icProfileGear,
        icProfileLogout,
        icProfilePesananDikemas,
        icProfileReview,
        icProfileStore,
        icProfileVoucher,
    },
}
</script>

<style lang="scss" scoped>
.profile_menu {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .sub_menu {
        display: flex;
        gap: 64px;
        justify-content: center;
        position: relative;

        &::before {
            content: '';
            display: block;
            width: 2px;
            top: 0;
            bottom: 0;
            background-color: #EDEDED;
            position: absolute;
        }
    }
}
</style>
