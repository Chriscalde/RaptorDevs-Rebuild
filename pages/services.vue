<template>
  <div>
    <Header class="background-header"></Header>
    <div class="wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
    <div id="services">
        <section id="sect-one">
            <div id="service-one" class="text-center flex flex-col">
                <i class="bx bx-desktop text-3xl"></i>
                <h1 class="text-4xl font-bold">{{$t('services.hero.one')}}</h1>
                <p class="text-xl text-gray-400 my-8">{{$t('services.hero.two')}}</p>
            </div>
        </section>
        <section id="sect-two">
            <div id="services-opts" class="md:mx-36 grid md:grid-cols-3 md:gap-8">
                <div class="text-center md:p-8 p-2">
                    <i class="bx bx-devices text-2xl text-white rounded-full border-2 border-white p-4"></i>
                        <h1 class="text-2xl text-white mt-4">{{$t('services.s1')}}</h1>
                </div>
                <div class="text-center md:p-8">
                    <i class="bx bx-code-alt text-2xl text-white rounded-full border-2 border-white p-4"></i>
                        <h1 class="text-2xl text-white mt-4">{{$t('services.s2')}}</h1>
                </div>
                <div class="text-center md:p-8 p-2">
                    <i class="bx bx-shopping-bag text-2xl text-white rounded-full border-2 border-white p-4"></i>
                    <h1 class="text-2xl text-white mt-4">{{$t('services.s3')}}</h1>
                </div>   
            </div>
        </section>
        <section id="sect-three">
            <div id="services-rep" class="md:mx-36 grid lg:grid-cols-2">
                <div><img src="../assets/img/nikolai-chernichenko-s6uS36SF91Y-unsplash.jpeg" alt="Image by Nikolai Chernichenko" class="img-repair w-full" ></div>
                <div class="flex flex-col items-center justify-center text-center p-12">
                    <h1 class="text-4xl repair-text">{{$t('services.cr')}}</h1>
                    <p class="text-xl">{{$t('services.crp')}}</p>
                </div>
                
            </div>
        </section>
        <section id="sect-four">
            <div id="services-con" class="p-14 text-center">
                <h1 class="text-2xl text-white">{{$t('services.int')}}</h1>
                <button class="text-xl text-white rounded border-2 border-white px-4 mt-4 hover:bg-white hover:text-black ">{{$t('services.contact')}}</button>
            </div>
        </section>
    </div>
   <FooterTop/>
    <Footer></Footer>
  </div>
</template>

<script>

export default {
    name:'ServicesPage'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

.wave {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave svg {
    position: relative;
    display: block;
    width: calc(267% + 1.3px);
    height: 130px;
}

.wave .shape-fill {
    fill: #f4762d;
}
@media (max-width: 767px) {
    .wave svg {
        width: calc(100% + 1px);
        height: 50px;
        line-height: 0;
    }
}
.background-main{
    background: #F74C06;

background: linear-gradient(90deg, #f4762d 40%, #f74c06 100%);

background: -moz-linear-gradient(90deg, #f4762d 40%, #f74c06 100%);

background: -webkit-linear-gradient(90deg, #f4762d 40%, #f74c06 100%);

 filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F3696E", endColorstr="#F8A902", GradientType=1 ); 
}

.background-header{
    background-color: #f4762d;
}
#sect-two, #sect-four{
    background: #F74C06;

background: linear-gradient(45deg, #f4762d 0%, #f74c06 100%);

background: -moz-linear-gradient(45deg, #f4762d 0%, #f74c06 100%);

background: -webkit-linear-gradient(45deg, #f4762d 0%, #f74c06 100%);

 filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F3696E", endColorstr="#F8A902", GradientType=1 ); 
}

#services-opts h1{
    font-family: 'Roboto', sans-serif !important;
}
.repair-text{
    color:#F74C06
}
.img-repair{
    display: block;
}
</style>