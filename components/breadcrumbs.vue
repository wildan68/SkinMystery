<template>
    <div class="flex gap-[4px]">
        <div class="flex gap-[4px]" v-for="(d, i) in data" :key="i">
            <span :class="i < (data.length - 1) ? 'text-[#B54B0F] font-[600]' : 'text-[#404040]'">
                {{ d.title }}
            </span>
            <i class="bi bi-chevron-right text-[#616161]" v-if="i < (data.length - 1)"></i>
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