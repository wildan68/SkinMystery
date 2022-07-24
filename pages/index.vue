<template>
  <div class="mainapp">
    <Navbar/>
    <Banner/>
  </div>
</template>

<script>
// Create Layouts
import Navbar from '@/layouts/navbar'
import Banner from '@/layouts/banner'

export default {
  components: {
    Navbar,
    Banner,
  }
}
</script>