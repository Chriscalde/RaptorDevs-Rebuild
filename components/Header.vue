<template>
  <div id="header" class="justify-between flex flex-wrap">
    <nuxt-link :to="localePath('/')" class="ml-24 mr-auto mt-4"><a class="logo "><img src="../assets/img/logo-2.png" alt="logo"></a></nuxt-link>
    <button class="text-white cursor-pointer text-4xl border border-solid border-transparent rounded bg-transparent md:hidden" type="button" v-on:click="toggleNavbar()"><i class="bx bx-menu"></i></button>
    <div v-bind:class="{'hidden':!showMenu, 'flex':showMenu}" class="nav-menu md:flex justify-center text-center items-center mx-auto md:mr-24">
      <ul class="p-8 text-xl">
        <li class="hover:text-gray-700 hover:scale-110 transition ease-in-out duration-500"><nuxt-link :to="localePath('/')"><a href="#hero" class="px-2 "></a>{{$t('nav.home')}}</nuxt-link></li>
        <li class="hover:text-gray-700 hover:scale-110 transition ease-in-out duration-500"><nuxt-link :to="localePath('/about')"><a class="px-2"></a>{{$t('nav.about')}}</nuxt-link></li>
        <li class="hover:text-gray-700 hover:scale-110 transition ease-in-out duration-500"><nuxt-link :to="localePath('/services')"><a class="px-2"></a>{{$t('nav.services')}}</nuxt-link></li>
        <li class="hover:text-gray-700 hover:scale-110 transition ease-in-out duration-500"><nuxt-link :to="localePath('/contact')"><a href="" class="px-2"></a>{{$t('nav.contact')}}</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
data(){
        return  {
            showMenu: false
        }
    },
    methods: {
        toggleNavbar: function(){
            this.showMenu = !this.showMenu;
        },
    }
}
</script>

<style>
    .logo img{
        max-width: 200px;
    }
    .nav-menu{
    list-style: none;
}
.nav-menu li{
    color: #f0eeee;
    list-style: none;
    display: inline-block;
    cursor: pointer;
}
.nav-menu a{
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    @apply font-bold;
}
/* .nav-menu a:hover, .nav-menu li:hover{
    color: #323031;
    transform: scale(1.20);
} */

</style>