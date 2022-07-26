<template>
    <div class="left_section">
        <div class="h-[210px] overflow-hidden rounded-[16px]">
            <img src="@/assets/png/person1.png" class="w-full h-full object-cover" alt="" />
        </div>
        <div class="flex flex-col gap-[8px] mt-[16px]">
            <span class="font-[600]">aaisyawldr</span>
            <div class="flex">
                <div class="bg-[#3386FF] bg-opacity-10 px-[8px] py-[4px] rounded-[8px] flex gap-[4px]">
                    <ic-profile-diamond></ic-profile-diamond>
                    <span class="font-[600] text-[12px] text-[#3386FF]">Diamond Member</span>
                </div>
            </div>
        </div>
        <div class="misteri_point mt-[16px]">
            <div class="flex gap-[8px] items-center">
                <ic-profile-misteri-point></ic-profile-misteri-point>
                <span class="font-[600] text-white">Misteri poin</span>
            </div>
            <div class="flex-1 flex gap-[8px] items-center justify-end z-10 text-[#FF9800] cursor-pointer">
                <span class="fn_impact text-[20px]">
                    1.352
                </span>
                <i class="bi bi-chevron-right mt-[5px]"></i>
            </div>
        </div>
        <div class="h-[2px] bg-[#F5F5F5] my-[16px]"></div>
        <ProfileNotifikasiMenu/>
        <div class="h-[2px] bg-[#F5F5F5] my-[16px]"></div>
        <ProfileJurnalAjaib/>
        <div class="flex flex-col gap-[12px] mt-[16px]">
            <button class="gap-[8px] border border-[#E0E0E0] font-[600] text-[12px] rounded-[8px] py-[8px]">
                <ic-profile-lock class="w-[16px] h-[16px]"></ic-profile-lock>
                Ubah Kata Sandi
            </button> 
            <button class="gap-[8px] border border-[#E0E0E0] font-[600] text-[12px] rounded-[8px] py-[8px]">
                <ic-profile-logout class="w-[16px] h-[16px]"></ic-profile-logout>
                Keluar
            </button>   
        </div>
    </div>
</template>

<script>
import {
    icProfileDiamond,
    icProfileMisteriPoint,
    icProfileLock,
    icProfileLogout,
} from '../../plugins/icons'

import ProfileNotifikasiMenu from '@/components/profile_notifikasi_menu'
import ProfileJurnalAjaib from '@/components/profile_jurnal_ajaib'

export default {
    components: {
        ProfileNotifikasiMenu,
        ProfileJurnalAjaib,
        icProfileDiamond,
        icProfileMisteriPoint,
        icProfileLock,
        icProfileLogout,
    },
}
</script>

<style lang="scss" scoped>
.left_section {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    width: 241px;
    padding: 16px;
    border: 1px solid #E0E0E0;

    .misteri_point {
        height: 43px;
        padding: 8px;
        background-image: url('/png/profile/bg_misteri_poin.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            height: 100%;
            width: 94px;
            background-image: url('/png/profile/bg_misteri_poin_inner.png');
            background-repeat: no-repeat;
            background-position: right;
        }
    }
}
</style>