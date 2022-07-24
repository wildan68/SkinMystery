<template>
    <div class="h-[150px] ml-[104px] mr-[104px] overflow-hidden rounded-[16px] mt-[40px] mb-[40px]">
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