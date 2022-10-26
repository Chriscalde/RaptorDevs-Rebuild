<template>
  <div class="background-main">
    <Header class="top-0 w-full"></Header>
    <div id="main">
      <section id="hero" class="my-16 md:mx-24">
        <div class="grid md:grid-cols-2 gap-8 p-10">
          <div class="left-hero justify-center items-center mx-auto">
            <h1 class="text-6xl font-extrabold text-white">{{$t('hero.h1')}}</h1>
            <p class="my-8 text-2xl">{{$t('hero.p')}}</p>
            <div class="text-center">
            <nuxt-link :to="{ path: localePath('/'),hash:'#services'}"><a id="learn-btn" class="justify-center text-center items-center py-4 px-6 mt-12  text-white text-xl rounded-xl align-middle">{{$t('hero.button')}} <i href="" class="bx bx-chevron-right align-middle text-4xl"></i></a></nuxt-link>
            </div>
          </div>
          <div class="right-hero">
            <img  src="../assets/img/mb.png" alt="macbook" rel="preload">
          </div>
        </div>
      </section>
    </div>
    <div class="waves">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
      </svg>
    </div>
    <div id="services" class="bg-white px-24 py-12 block">
      <h1 class="text-4xl font-bold my-6">{{$t('services.hero.one')}}</h1>
      <div class="flex flex-col md:grid md:grid-cols-3 items-stretch justify-evenly gap-8 m-4">
        <div  class="flex flex-col rounded-lg bg-gray-100 p-4 my-auto group card">
          <i class="bx bx-code-alt bg-black rounded-full p-8 mx-auto text-3xl text-white group-hover:border-gray-300 border-8 border-gray-100"></i>
          <h2 class="text-2xl text-center">{{$t('index.s1')}}</h2>
          <div class="content">
            <p class="text-center">{{$t('home.web')}}</p>
          </div>
        </div>
        <div class="flex flex-col rounded-lg bg-gray-100 my-auto p-4 group card">
          <i class="bx bx-devices bg-black rounded-full p-8 mx-auto text-3xl text-white group-hover:border-gray-300 border-8 border-gray-100"></i>
          <h2 class="text-2xl text-center">{{$t('index.s2')}}</h2>
          <div class="content">
            <p class="text-center">{{$t('home.apps')}}</p>
          </div>
        </div>
        <div class="flex flex-col rounded-lg bg-gray-100 p-4 my-auto group card">
          <i id="icons" class="bx bx-desktop bg-black rounded-full p-8 mx-auto text-3xl text-white hover:ring group-hover:border-gray-300 border-8 border-gray-100"></i>
          <h2 class="text-2xl text-center">{{$t('index.s3')}}</h2>
          <div class="content">
            <p class="text-center">{{$t('home.pc')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-4 flex flex-col">
      <h2 class="text-white text-2xl my-2">{{$t('services.int')}}</h2>
      <nuxt-link :to="localePath('/contact')" class="mt-2 mx-auto"><a class="py-1 px-2 rounded border-2 border-gray-800 mt-4 hover:bg-gray-800 text-gray-800 hover:text-white">{{$t('services.contact')}}</a></nuxt-link>
    </div>
    <footer-top/>
    <Footer></Footer>
  </div>
</template>

<script>
import FooterTop from '../components/FooterTop.vue'
export default {
  components: { FooterTop },
  name: 'IndexPage',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


  .background-main{
    background: hsla(358, 85%, 68%, 1);

background: linear-gradient(235deg, #f4762d 0%, #f74c06 100%);

background: -moz-linear-gradient(235deg, #f4762d 0%, #f74c06 100%);

background: -webkit-linear-gradient(235deg, #f4762d 0%, #f74c06 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F3696E", endColorstr="#F8A902", GradientType=1 );
  }
  .waves {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.waves svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 122px;
}

.waves .shape-fill {
    fill: #FFFFFF;
}
@media (max-width: 767px) {
    .waves svg {
        width: calc(100% + 1.3px);
        height: 50px;
    }
    .card .content{
      visibility : visible;
      opacity : 1;
      transition : 0.3s ease-in-out;
      position: relative;
    }
}

#hero h1{
  font-family: 'Poppins',sans-serif;
  font-weight: 800;
}
#learn-btn{
  background-color: #323031;
  cursor: pointer;
}

#learn-btn:hover{
  color:#f74c06
}
.contact-btn:hover{
  background: linear-gradient(235deg, #f4762d 0%, #f74c06 100%);;
}
.card .content{
  transition : 0.3s ease-in-out;
  position: relative;
}

.card:hover .content{
  visibility: visible;
  transition-delay: 0.2s;
  opacity: 1;
  margin-bottom: 2rem;
  margin-top: 2rem;
  transition: 0.3s ease-in-out;
} 


</style>