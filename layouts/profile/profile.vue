<template>
    <div class="profile lg:mb-0 mb-[80px]">
        <LeftSection/>
        <RightSection class="flex-1"/>
    </div>
</template>

<script>
import LeftSection from '@/layouts/profile/left_section'
import RightSection from '@/layouts/profile/right_section'

export default {
    components: {
        LeftSection,
        RightSection,
    },
}
</script>

<style lang="scss" scoped>
.profile {
    padding: 40px 104px 40px 104px;
    display: flex;
    gap: 24px;

    @media (max-width: 1024px) {
        padding: 0px 24px 0px 24px;
        flex-direction: column-reverse;
    } 
}
</style>