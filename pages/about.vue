<template>
  <div class="background-header flex flex-col">
    <Header></Header>
    <main>
        <div class="py-16 items-center justify-center mx-auto flex flex-col">
            <h1 class="text-4xl text-center font-bold text-slate-800 text-white">{{$t('about.us')}}</h1>
            <a class="text-center items-center py-2 px-4 text-white text-xl justify-center align-middle my-4 rounded-md mx-auto" id="learn-btn">{{$t('about.more')}}</a>
        </div>
        <div class="md:grid md:grid-cols-2 flex flex-col gap-8 bg-white">
            <div class="flex flex-col">
                <nuxt-img src="/rd-iphone.png" sizes="sm:50vw lg:250px" class="mx-auto"/>
            </div>
            <div class="flex flex-col">
                <!-- <div class="content-start items-start my-auto">
                    <h2 class="text-orange font-bold text-2xl text-left">{{$t('about.mission')}}</h2>
                    <p class="text-left">{{$t('about.mp')}}</p>
                </div>
                <div class="content-end items-end justify-end my-auto">
                    <h2 class="text-orange font-bold text-2xl text-right">{{$t('about.vision')}}</h2>
                    <p class="text-right">{{$t('about.vp')}}</p>
                </div> -->
                <div class="text-left flex-auto">
                    <h1 class="text-3xl font-bold text-orange md:mt-4">{{$t('about.who')}}</h1>
                    <p class="text-xl my-4">{{$t('about.info')}}</p>
                </div>
                <div class="bg-contact items-end content-end flex-none text-center">
                    <div class="m-4 grid-cols-2 grid gap-2 bg-gray-700 text-white py-2 rounded-md">
                        <a class="font-bold" href="mailto:contact@raptordevs.com">contact@raptordevs.com</a>
                        <a class="font-bold" href="tel:+13852349700">+1 385 234 97 00</a>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
.background-header{
    background: linear-gradient(to right,#222126d7,#bd5e20d7),url("../assets/img/meg-boulden-3ojU4UXDydA-unsplash.jpeg");
    background-size: cover;
}
#learn-btn{
  background-color: #323031;
  color:#f74c06;
  cursor: default;
}
.text-orange{
    color:#f74c06;
}
.bg-contact{
    background-color: #eab592;
    /* background-image: url("data:image/sxvg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='40' viewBox='0 0 50 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23f64b08' fill-opacity='1'%3E%3Cpath d='M40 10L36.67 0h-2.11l3.33 10H20l-2.28 6.84L12.11 0H10l6.67 20H10l-2.28 6.84L2.11 10 5.44 0h-2.1L0 10l6.67 20-3.34 10h2.11l2.28-6.84L10 40h20l2.28-6.84L34.56 40h2.1l-3.33-10H40l2.28-6.84L47.89 40H50l-6.67-20L50 0h-2.1l-5.62 16.84L40 10zm1.23 10l-2.28-6.84L34 28h4.56l2.67-8zm-10.67 8l-2-6h-9.12l2 6h9.12zm-12.84-4.84L12.77 38h15.79l2.67-8H20l-2.28-6.84zM18.77 20H30l2.28 6.84L37.23 12H21.44l-2.67 8zm-7.33 2H16l-4.95 14.84L8.77 30l2.67-8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
}
</style>