<template>
  <div id="footer-top" class="bg-white">
    <div class="grid md:grid-cols-4 gap-8 p-24">
      <div class="flex flex-col">
        <h1 class="text-xl font-bold">{{$t('ft.contact')}}</h1>
        <a href="tel:+13852349700"> +1 385 234 97 00</a>
        <a href="mailto:contact@raptordevs.com">contact@raptordevs.com</a>
        <p>12542 S 1300 W</p>
        <p>Riverton, Utah</p>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold">{{$t('ft.social')}}</h1>
        <a href="https://www.facebook.com/Raptordevs" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/raptordevs/">Instagram</a>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold">{{$t('ft.lang')}}</h1>
        <a href=""><nuxt-link :to="switchLocalePath('es')">{{$t('ft.es')}}</nuxt-link></a>
        <a href=""><nuxt-link :to="switchLocalePath('en')">{{$t('ft.en')}}</nuxt-link></a>
      </div>
      <div>
        <img src="../assets/img/rd-logo.png" alt="logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'FooterTop'
}
</script>

<style>

</style>
