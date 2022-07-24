<template>
<div class="navbar">
    <div class="sub_header">
        <div class="flex-1 flex gap-[8px] items-center">
            <ic-phone></ic-phone> Download Skin Mystery App
        </div>
        <div class="flex-1 flex gap-[16px] items-center justify-end">
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
    <div class="header">
        <div class="flex">
            <img src="@/assets/png/logo.png" alt="" />
        </div>
        <div class="flex gap-[25px] flex-1">
            <button class="font-[600]">
                Kategori
            </button>
            <div class="search_box">
                <input type="text" placeholder="Cari produk di Skin Mystery" />
                <ic-search class="ic_search"></ic-search>
            </div>
        </div>
        <div class="flex gap-[24px]">
            <div class="flex gap-[16px]">
                <ic-notif></ic-notif>
                <ic-cart></ic-cart>
                <ic-subtract></ic-subtract>
            </div>
            <div class="user">
                <div class="profile flex gap-[8px]">
                    <div class="overflow-hidden w-[24px] h-[24px] rounded-full">
                        <img src="@/assets/png/person1.png" class="w-full h-full object-cover" alt="" />
                    </div>
                    <span class="text-[16px]">Annas Aisya</span>
                </div>
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

export default {
    components: {
        icCart,
        icPhone,
        icOffice,
        icEmail,
        icFaq,
        icSearch,
        icNotif,
        icSubtract,
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #FBFBFB;

    .sub_header {
        height: 48px;
        color: #616161;
        display: flex;
        align-items: center;
        padding: 0 32px 0 23px;
        font-size: 16px;
    }

    .header {
        background-color: #fff;
        height: 69px;
        display: flex;
        align-items: center;
        padding: 0 56px 0 56px;
        color: #404040;
        gap: 25px;
        justify-content: space-between;

        .search_box {
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;

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
