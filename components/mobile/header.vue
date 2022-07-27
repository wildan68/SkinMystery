<template>
<div class="header_mobile">
    <button class="flex text-[24px]">
        <i class="bi bi-filter-left"></i>
    </button>
    <div class="search_box">
        <input type="text" placeholder="Cari produk di Skin Mystery" />
        <ic-search class="ic_search"></ic-search>
    </div>
    <div class="flex gap-[5px]">
        <button class="flex text-[24px]">
            <ic-notif></ic-notif>
        </button>
        <button class="flex text-[24px]">
            <ic-cart></ic-cart>
        </button>
        <button class="flex text-[24px]">
            <ic-subtract></ic-subtract>
        </button>
    </div>
</div>
</template>

<script>
import {
    icSearch,
    icNotif,
    icCart,
    icSubtract,
} from '../../plugins/icons'
export default {
    components: {
        icSearch,
        icNotif,
        icCart,
        icSubtract,
    }
}
</script>

<style lang="scss" scoped>
.header_mobile {
    justify-content: center;
    gap: 10px;
    padding: 24px;
    align-items: center;

    .search_box {
        width: 100%;
        height: 36px;
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
            padding: 0 38px 0 16px;
        }

        .ic_search {
            position: absolute;
            right: 16px;
        }
    }
}
</style>
