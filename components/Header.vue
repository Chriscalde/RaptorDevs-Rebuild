<template>
  <div id="header" class="justify-between flex flex-wrap">
    <a href="/" class="logo ml-24 mr-auto mt-4"><img src="../assets/img/logo-2.png" alt="logo"></a>
    <button class="text-white cursor-pointer text-4xl border border-solid border-transparent rounded bg-transparent md:hidden" type="button" v-on:click="toggleNavbar()"><i class="bx bx-menu"></i></button>
    <div v-bind:class="{'hidden':!showMenu, 'flex':showMenu}" class="nav-menu md:flex justify-center text-center items-center md:mr-24">
      <ul class="p-8 text-xl">
        <li><nuxt-link to="/"><a href="#hero" class="px-2"></a>{{$t('nav.home')}}</nuxt-link></li>
        <li><nuxt-link to="/"><a href="" class="px-2"></a>{{$t('nav.about')}}</nuxt-link></li>
        <li><nuxt-link style="text-decoration: none; color:inherit;" to="/services"><a class="px-2"></a>{{$t('nav.services')}}</nuxt-link></li>
        <li><nuxt-link to="/"><a href="" class="px-2"></a>{{$t('nav.contact')}}</nuxt-link></li>
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
.nav-menu a:hover, .nav-menu li:hover{
    color: #323031;
    transform: scale(1.20);
    
}

</style>