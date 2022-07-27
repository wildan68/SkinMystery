<template>
    <div class="flex gap-[8px] flex-wrap">
        <div class="bg-[#EADED8] p-[6px] rounded-[8px]" v-for="(d, i) in data" :key="i">
            {{ d.name }}
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