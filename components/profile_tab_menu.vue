<template>
    <div class="flex border-b border-[#E0E0E0] justify-between">
        <button @click.prevent="tabSelected = i" :class="tabSelected === i ? 'btn_tab selected' : 'btn_tab'" v-for="(menu, i) in dataMenu" :key="i">
            {{ menu.title }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataMenu: [{
                title: 'Profile Saya'
            }, {
                title: 'Rekening Bank'
            }, {
                title: 'Buku Alamat'
            }, {
                title: 'Pesanan Saya'
            }, {
                title: 'Voucher Saya'
            }, {
                title: 'Toko Diikuti'
            }, {
                title: 'Ulasan Saya'
            },],
            tabSelected: 0,
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_tab {
    width: 100%;
    padding: 16px 0 16px 0;
    border-bottom: 1px solid #E0E0E0;
    font-size: 16px;
    font-weight: 600;
    color: #9E9E9E;

    &.selected {
        color: #B54B0F;
        border-bottom: 1px solid #B54B0F;
    }
}
</style>