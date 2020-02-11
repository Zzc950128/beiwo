<template>
  <div id="main">
  	<Header></Header>
    <Banner></Banner>
  	<router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Banner from '@/components/banner'
export default {
  name: 'App',
  components: {
  	"Header": Header,
    "Footer": Footer,
    "Banner": Banner
  }
}
</script>
<style>
#main {
	min-width: 1200px;
	margin: 0 auto;
}
</style>
