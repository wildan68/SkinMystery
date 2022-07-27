<template>
    <div class="quantity">
        <div class="flex gap-[24px] items-center">
            <button @click.prevent="less" class="rounded-full border border-[#676767] text-[#676767] flex items-center justify-center w-[32px] h-[32px]">
                <i class="bi bi-dash-lg"></i>
            </button>
            <span class="text-[16px]">{{ quantityText }}</span>
            <button @click.prevent="add" class="rounded-full border border-[#676767] text-[#676767] flex items-center justify-center w-[32px] h-[32px]">
                <i class="bi bi-plus-lg"></i>
            </button>
        </div>
        <span class="text-[#404040]">Tersisa <span class="text-black">{{ maxQuantity }}</span></span>
    </div>
</template>

<script>
export default {
    props: {
        maxQuantity: Number
    },
    data() {
        return {
            quantity: 1,
        }
    },
    computed: {
        quantityText() {
            // Jika quantity dibawah 10 makan awal angka ditambah 0
            return this.quantity < 10 ? `0${this.quantity}` : this.quantity;
        }
    },
    methods: {
        add() {
            if (this.quantity < this.maxQuantity) this.quantity++;
        },
        less() {
            if (this.quantity > 1) this.quantity--;
        }
    }
}
</script>

<style lang="scss" scoped>
.quantity {
    display: flex;
    gap: 16px;
    align-items: center;
}
</style>