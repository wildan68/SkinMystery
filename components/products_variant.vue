<template>
<div class="variant">
    <div class="variant_item" v-for="(d, i) in data" :key="i">
        <div class="w-[28px] h-[28px] rounded-[4px] overflow-hidden">
            <img :src="d.img" class="w-full h-full object-cover">
        </div>
        <span>{{ d.name }}</span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        data: Array,
    }
}
</script>

<style lang="scss" scoped>
.variant {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;

    .variant_item {
        padding: 4px 15px 4px 4px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 1px solid #9E9E9E;
        border-radius: 6px;
        color: #363636;
    }
}
</style>
