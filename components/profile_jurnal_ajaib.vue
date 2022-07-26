<template>
    <div class="flex flex-col gap-[8px] text-[#404040]">
        <div class="flex text-[#0A0A0A] cursor-pointer">
            <span class="font-[600]">
                Jurnal Ajaib Saya
            </span>
            <div class="flex-1 flex justify-end items-center">
                <i class="bi bi-chevron-up"></i>
            </div>
        </div>
        <div class="jurnal_grid">
            <div class="w-[63px] h-[63px] overflow-hidden rounded-[4px]">
                <img src="@/assets/png/person2.png" class="w-full h-full object-cover" alt="" />
            </div>
            <div class="w-[63px] h-[63px] overflow-hidden rounded-[4px]">
                <img src="@/assets/png/person3.png" class="w-full h-full object-cover" alt="" />
            </div>
            <div class="w-[63px] h-[63px] overflow-hidden rounded-[4px]">
                <img src="@/assets/png/person4.png" class="w-full h-full object-cover" alt="" />
            </div>
            <div class="w-[63px] h-[63px] overflow-hidden rounded-[4px]">
                <img src="@/assets/png/person5.png" class="w-full h-full object-cover" alt="" />
            </div>
            <div class="w-[63px] h-[63px] overflow-hidden rounded-[4px]">
                <img src="@/assets/png/person6.png" class="w-full h-full object-cover" alt="" />
            </div>
            <div class="w-[63px] h-[63px] overflow-hidden rounded-[4px]">
                <img src="@/assets/png/person7.png" class="w-full h-full object-cover" alt="" />
            </div>
        </div>
        <div class="flex justify-center">
            <button class="px-[12px] py-[8px] gap-[8px] text-[12px] text-[#B54B0F] font-[600]">
                Lainnya <i class="bi bi-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="scss" scoped>
.jurnal_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(63px, 1fr));
    gap: 8px; 
}
</style>