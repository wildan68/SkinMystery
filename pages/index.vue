<template>
  <div class="mainapp">
    <Navbar/>
    <Banner/>
    <KategoriPilihan/>
    <Terlaris/>
  </div>
</template>

<script>
// Create Layouts
import Navbar from '@/layouts/navbar'
import Banner from '@/layouts/banner'
import KategoriPilihan from '@/layouts/kategori_pilihan'
import Terlaris from '@/layouts/terlaris'

export default {
  components: {
    Navbar,
    Banner,
    KategoriPilihan,
    Terlaris,
  }
}
</script>