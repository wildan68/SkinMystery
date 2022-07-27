<template>
<div class="mainapp">
    <Navbar />
    <div v-if="$system.overlay" class="fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-[15]" @click.prevent="$system.overlay = !$system.overlay"></div>
    <Profile/>
    <MobileNavbar class="lg:hidden flex"/>
</div>
</template>

<script>
import Navbar from '@/layouts/navbar'
import Profile from '@/layouts/profile/profile'

// Mobile Navbar

import MobileNavbar from '@/components/mobile/bot_navbar'

export default {
    components: {
        Navbar,
        Profile,
        MobileNavbar,
    },
}
</script>