<template>
<div class="navbar" ref="navbar">
    <div class="sub_header flex lg:flex-row flex-col" ref="subHeader">
        <div class="flex-1 flex gap-[8px] items-center">
            <ic-phone></ic-phone> Download Skin Mystery App
        </div>
        <div class="flex-1 flex lg:gap-[16px] text-[12px] lg:text-[14px] gap-[5px] items-center justify-end lg:flex-row flex-col">
            <div class="flex gap-[8px] items-center">
                <ic-office></ic-office> Daftar Official Store
            </div>
            <div class="flex gap-[8px] items-center">
                <ic-email></ic-email> help@skinmystery.com
            </div>
            <div class="flex gap-[8px] items-center">
                <ic-faq></ic-faq> FAQ
            </div>
        </div>
    </div>
    <!-- header mobile -->
    <Header class="lg:hidden flex"/>
    <!----->
    <div class="header hidden lg:flex">
        <div class="flex cursor-pointer" @click.prevent="$system.to('/')">
            <img src="@/assets/png/logo.png" alt="" />
        </div>
        <div class="lg:flex gap-[25px] flex-1 hidden">
            <button class="font-[600]">
                Kategori
            </button>
            <div class="search_box">
                <input type="text" placeholder="Cari produk di Skin Mystery" />
                <ic-search class="ic_search"></ic-search>
            </div>
        </div>
        <div class="lg:flex gap-[24px] relative hidden">
            <div class="flex gap-[16px]">
                <ic-notif></ic-notif>
                <ic-cart></ic-cart>
                <ic-subtract></ic-subtract>
            </div>
            <div v-if="$system.profileMenu" class="absolute h-auto top-[150%] right-[-20px] left-[-20px] bg-white shadow-lg rounded-[16px] p-[24px]" ref="profile">
                <profile-menu></profile-menu>
            </div>
            <div class="user">
                <button @click.prevent="showProfile" class="profile flex gap-[8px] hover:bg-[#F8F3F1] hover:text-[#B54B0F] px-[8px] py-[6px] rounded-[8px]">
                    <div class="overflow-hidden w-[24px] h-[24px] rounded-full">
                        <img src="@/assets/png/person1.png" class="w-full h-full object-cover" alt="" />
                    </div>
                    <span class="text-[16px]">Annas Aisya</span>
                </button>
                <div class="flex gap-[8px]">
                    <div class="overflow-hidden w-[24px] h-[24px]">
                        <img src="@/assets/png/store1.png" class="w-full h-full object-cover" alt="" />
                    </div>
                    <span class="text-[16px]">Toko</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import SVG from plugins icons
import {
    icPhone,
    icCart,
    icOffice,
    icEmail,
    icFaq,
    icSearch,
    icNotif,
    icSubtract,
} from '../plugins/icons'

import ProfileMenu from '../components/profile_menu'

import Header from '../components/mobile/header'

export default {
    data() {
        return {

        }
    },
    components: {
        icCart,
        icPhone,
        icOffice,
        icEmail,
        icFaq,
        icSearch,
        icNotif,
        icSubtract,
        ProfileMenu,
        Header,
    },
    methods: {
        showProfile() {
            this.$system.profileMenu = !this.$system.profileMenu
            this.$system.overlay = !this.$system.overlay
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.$refs.subHeader.classList.add('hidden')
                this.$refs.subHeader.classList.remove('flex')
                this.$refs.navbar.classList.add('shadow-lg')
                this.$refs.navbar.classList.add('animation')
            } else {
                this.$refs.subHeader.classList.remove('hidden')
                this.$refs.subHeader.classList.add('flex')
                this.$refs.navbar.classList.remove('shadow-lg')
                this.$refs.navbar.classList.remove('animation')
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #FBFBFB;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 40;

    &.animation {
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            transform: translateY(-100%);
        }

        to {
            transform: translateY(0);
        }
    }

    .sub_header {
        height: 48px;
        color: #616161;
        align-items: center;
        padding: 0 32px 0 23px;
        font-size: 16px;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    .header {
        background-color: #fff;
        height: 69px;
        align-items: center;
        padding: 0 56px 0 56px;
        color: #404040;
        gap: 25px;
        justify-content: space-between;
        flex-direction: row;

        @media (max-width: 1024px) {
            flex-direction: column;
            justify-content: center;
        }

        .search_box {
            width: 100%;
            height: 36px;
            position: relative;
            display: flex;
            align-items: center;

            @media (max-width: 1024px) {
                display: none;
            }

            input {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                background-color: #FBFBFB;
                border: 1px solid #F5F5F5;
                display: flex;
                padding: 0 34px 0 16px;
            }

            .ic_search {
                position: absolute;
                right: 16px;
            }
        }

        .user {
            display: flex;
            gap: 40px;
            font-weight: 500;
            align-items: center;

            @media (max-width: 1024px) {
                display: none;
            }

            .profile {
                position: relative;
            }

            .profile::before {
                content: '';
                display: block;
                width: 2px;
                height: 100%;
                background-color: #EEEEEE;
                position: absolute;
                right: -20px;
            }
        }

    }
}
</style>
