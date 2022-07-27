<template>
<div class="mainapp">
    <Navbar />
    <div v-if="$system.overlay" class="fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-[15]" @click.prevent="$system.overlay = !$system.overlay"></div>
    <Banner />
    <KategoriPilihan />
    <Terlaris />
    <Populer />
    <Promo />
    <Products />
    <MobileNavbar class="lg:hidden flex"/>
</div>
</template>

<script>
// Create Layouts
import Navbar from '@/layouts/navbar'
import Banner from '@/layouts/banner'
import KategoriPilihan from '@/layouts/kategori_pilihan'
import Terlaris from '@/layouts/terlaris'
import Populer from '@/layouts/populer'
import Promo from '@/layouts/promo'
import Products from '@/layouts/products'

// Mobile Navbar

import MobileNavbar from '@/components/mobile/bot_navbar'

export default {
    components: {
        Navbar,
        Banner,
        KategoriPilihan,
        Terlaris,
        Populer,
        Promo,
        Products,
        MobileNavbar,
    },
    mounted() {

    }
}
</script>
