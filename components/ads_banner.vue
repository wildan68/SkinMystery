<template>
    <div class="h-[70px] lg:h-[150px] overflow-hidden rounded-[16px] lg:mt-[40px] lg:mb-[40px]">
        <img :src="img" class="w-full h-full object-cover" alt="" />
    </div>
</template>

<script>
export default {
    // passing props data url gambar
    props: {
        img: String,
    }
}
</script>