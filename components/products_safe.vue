<template>
    <div class="products_safe">
        <div class="flex gap-[5px]" v-for="(d, i) in data" :key="i">
            <ic-checklist v-if="d.check"></ic-checklist>
            <ic-close v-else></ic-close>
            <span>{{ d.text }}</span>
        </div>
    </div>
</template>

<script>
import {
    icChecklist,
    icClose,
    icInfo,
} from '../plugins/products_detail_icons'

export default {
    props: {
        data: Array,
    },
    components: {
        icChecklist,
        icClose,
        icInfo,
    },
}
</script>

<style lang="scss" scoped>
.products_safe{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
}
</style>