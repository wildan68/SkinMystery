<template>
<div class="flex flex-col">
    <div class="right_section">
        <ProfileTabMenu />
        <div class="mt-[16px] p-[24px] flex flex-col gap-[4px]">
            <span class="font-[600] text-[18px] text-[#0A0A0A]">
                Profil Saya
            </span>
            <span class="text-[#404040]">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</span>
            <div class="h-[2px] bg-[#EDEDED] mt-[16px]"></div>
        </div>
        <ProfileForm class="mt-[16px]" />
    </div>
</div>
</template>

<script>
import ProfileTabMenu from '@/components/profile_tab_menu'
import ProfileForm from '@/components/profile_form'

export default {
    components: {
        ProfileTabMenu,
        ProfileForm,
    }
}
</script>

<style lang="scss" scoped>
.right_section {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    border: 1px solid #E0E0E0;
    padding: 0 0 24px 0;
}
</style>
