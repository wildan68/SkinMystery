<template>
<div class="flex flex-col gap-[16px]">
    <div class="tab_menu">
        <div class="tab_menu_item active">
            Detail
        </div>
        <div class="tab_menu_item">
            Ingredients
        </div>
        <div class="tab_menu_item">
            Cara Penggunaan
        </div>
    </div>
    <div class="products_info whitespace-pre-line text-[#404040]">
        L'Oreal Paris Revitalift Crystal Micro Essence Skin Care

        Dapatkan 1pc Glycolic Acid Serum Sachet/1 transaksi setiap pembelian ukuran 65ml dan 130ml selama persediaan masih tersedia.

        Essence terbaru dari LOreal Paris untuk kulit tampak sebening kristal. Dengan Micronized Technology dapat menyerap hingga 10 lapisan* dalam
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tab_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dadada;

    .tab_menu_item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 0 16px 0;
        flex: 1;
        font-size: 14px;
        font-weight: 600;
        color: #616161;
        cursor: pointer;

        &:hover {
            color: #404040;
        }

        &.active {
            color: #B54B0F;
            border-bottom: 3px solid #B54B0F;
        }
    }
}
</style>
