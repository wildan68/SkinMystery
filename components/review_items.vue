<template>
<div class="flex flex-col gap-[16px] mt-[24px]">
    <div class="flex gap-[12px]">
        <div class="flex items-start justify-center">
            <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img :src="dataReview.avatar" class="w-full h-full object-cover" />
            </div>
        </div>
        <div class="flex-1 flex flex-col gap-[6px]">
            <span class="text-[12px] font-[600]">{{ dataReview.name }}</span>
            <div class="flex">
                <ic-star v-for="i in dataReview.rating" :key="i" :star="i"></ic-star>
                <ic-star-gray v-for="i in (5 - dataReview.rating)" :key="i"></ic-star-gray>
            </div>
            <span class="text-[12px] text-[#757575]">{{ dataReview.date }} | Variasi: {{ dataReview.variant }}</span>
        </div>
        <div class="flex justify-end">
            <button class="text-[24px] text-[#676767]">
                <i class="bi bi-three-dots-vertical"></i>
            </button>
        </div>
    </div>
    <div class="flex flex-wrap text-[#363636]">{{ dataReview.text }}</div>
    <div class="flex gap-[8px]" v-if="dataReview.media">
        <div class="w-[72px] h-[72px] rounded-[8px] overflow-hidden" v-for="(dataMedia, i) in dataReview.media" :key="i">
            <img :src="dataMedia.img" class="w-full h-full object-cover" />
        </div>
    </div>
    <div class="h-[1px] w-full bg-[#EDEDED] my-[24px]"></div>
</div>
</template>

<script>
import {
    icStar,
    icStarGray,
} from '../plugins/products_detail_icons'
export default {
    props: {
        dataReview: {
            type: Object,
            required: true
        }
    },
    components: {
        icStar,
        icStarGray,
    }
}
</script>
