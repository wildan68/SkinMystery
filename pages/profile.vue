<template>
<div class="mainapp">
    <Navbar />
    <div v-if="$system.overlay" class="fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-[15]" @click.prevent="$system.overlay = !$system.overlay"></div>
    <Profile/>
</div>
</template>

<script>
import Navbar from '@/layouts/navbar'
import Profile from '@/layouts/profile/profile'

export default {
    components: {
        Navbar,
        Profile,
    },
}
</script>