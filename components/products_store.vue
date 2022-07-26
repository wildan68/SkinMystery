<template>
    <div class="flex flex-col gap-[16px] bg-[#F5ECE8] p-[16px] rounded-[12px]">
        <div class="flex">
            <div class="flex-1 flex gap-[12px]">
                <div class="w-[48px] h-[48px] rounded-[6px] overflow-hidden">
                    <img src="/png/loreal_logo.png" class="w-full h-full object-cover"/>
                </div>
                <div class="flex flex-col gap-[3px]">
                    <span class="font-[600] text-[16px] text-[#363636]">
                        L’Oreal Paris Official Store
                    </span>
                    <span class="font-[600] text-[#4DA934]">
                        Online
                    </span>
                </div>
            </div>
            <div class="flex">
                <button class="px-[16px] py-[8px] rounded-[12px] border-[#B54B0F] border font-[600] text-[#B54B0F]">
                    Follow
                </button>
            </div>
        </div>
        <div class="flex flex-wrap">
            <div class="flex gap-[4px] items-center">
                <ic-star></ic-star>
                <span class="font-[600]">4.5</span>
                <span class="text-[12px] text-[#757575]">rata-rata ulasan</span>
            </div>
            <div class="flex gap-[4px] items-center">
                <ic-chat-active></ic-chat-active>
                <span class="font-[600]">69%</span>
                <span class="text-[12px] text-[#757575]">chat dibalas</span>
            </div>
            <div class="flex gap-[4px] items-center">
                <ic-map></ic-map>
                <span class="font-[600]">Kota Tangerang</span>
            </div>
        </div>
    </div>
</template>

<script>
import {
    icChatActive,
    icStar,
    icMap,
} from '../plugins/products_detail_icons'

export default {
    components: {
        icChatActive,
        icStar,
        icMap,
    }
}
</script>