<template>
  <div class="background-main">
    <Header class="top-0 w-full"></Header>
    <div id="main">
      <section id="hero" class="my-16 mx-24">
        <div class="grid grid-cols-2 gap-8 p-10">
          <div class="left-hero justify-center items-center mx-auto">
            <h1 class="text-6xl font-extrabold text-white">{{$t('hero.h1')}}</h1>
            <p class="my-8 text-2xl">{{$t('hero.p')}}</p>
            <div class="text-center">
            <a id="learn-btn" class="justify-center items-center text-center items-center py-4 px-6 mt-12 text-white text-xl rounded-xl align-middle" href="">{{$t('hero.button')}} <i href="" class="bx bx-chevron-right align-middle text-4xl"></i></a>
            </div>
          </div>
          <div class="right-hero">
            <img src="../assets/img/mb.png" alt="macbook" rel="preload">
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
  <section id="footer-top" class="bg-white">
    <div class="grid grid-cols-4 gap-8 p-24">
      <div class="flex flex-col">
        <h1 class="text-xl font-bold">{{$t('ft.contact')}}</h1>
        <a href="tel:+13852349700">+1 385 234 97 00</a>
        <p>12542 S 1300 W</p>
        <p>Riverton, Utah</p>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold">{{$t('ft.social')}}</h1>
        <a href="https://www.facebook.com/Raptordevs" target="_blank">Facebook</a>
        <a href="https://www.intagram.com/raptordevs/">Instagram</a>
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
  </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
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
</style>