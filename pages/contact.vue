<template>
  <div class="background-main">
    <Header></Header>
    <div class="md:mx-24 my-12 md:grid md:grid-cols-2 gap-12 justify-center">
        <div class="flex flex-col gap-8 self-center items-center">
            <div class="text-white mx-auto text-center">
                <i class="icon-color bx bx-phone text-4xl rounded-full p-4 bg-gray-200"></i>
                <h1 class="text-2xl font-bold">{{$t('contact.phone')}}</h1>
                <a href="tel:+13852349700">+1 385 234 97 00</a>
            </div>
            <div class=" text-white mx-auto text-center">
                <i class="icon-color bx bx-mail-send text-4xl rounded-full p-4 bg-gray-200"></i>
                <h1 class="text-2xl font-bold">{{$t('contact.mail')}}</h1>
                <a href="mailto:contact@raptordevs.com">contact@raptordevs.com</a>
            </div>
            <div class="text-white mx-auto text-center">
                <i class="icon-color bx bx-map-pin text-4xl rounded-full p-4 bg-gray-200"></i>
                <h1 class="text-2xl font-bold">{{$t('contact.address')}}</h1>
                <p>12542 S 1300 W.</p>
                <p>Riverton, UT</p>
            </div>
        </div>
        <div class="p-8">
            <h1 class="text-3xl text-white text-center font-bold">{{$t('contact.form')}}</h1>
            <form @submit.prevent="sendMail"  class="my-4 flex flex-col form">
                <label class="block">
                <span class="text-white text-lg">{{$t('contact.fn')}}</span>
                <input v-model="name" name="name" type="text" class="mt-1 py-2 px-4 w-full bg-gray-200 rounded-md focus:ring-4 focus:ring-gray-800" required>
                </label>
                <label class="block">
                <span class="text-white text-lg">{{$t('contact.phone')}}</span>
                <input v-model="phone" name="phone" type="tel" class="mt-1 py-2 px-4 w-full bg-gray-200 rounded-md focus:ring-4 focus:ring-gray-800" required pattern="[0-9]{10}" >
                </label>
                <label class="block">
                <span class="text-white text-lg">{{$t('contact.mail')}}</span>
                <input v-model="mail" name="mail" type="mail" class="mt-1 py-2 px-4 w-full bg-gray-200 rounded-md focus:ring-4 focus:ring-gray-800" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                </label>
                <label class="block">
                <span class="text-white text-lg">{{$t('contact.int')}}</span>
                <select v-model="type" name="type" class="mt-1 w-full px-4 py-2 ring-0 bg-gray-200 rounded-md focus:ring-4 focus:ring-gray-800" required>
                    <option>{{$t('contact.web')}}</option>
                    <option>{{$t('contact.app')}}</option>
                    <option>{{$t('contact.wd')}}</option>
                    <option>{{$t('contact.pc')}}</option>
                    <option>{{$t('contact.ts')}}</option>
                    <option>{{$t('contact.om')}}</option>
                </select>
                </label>
                <label class="block">
                <span class="text-white text-lg">{{$t('contact.details')}}</span>
                <textarea v-model="description" name="description" class="bg-gray-200 w-full rounded px-4 py-2" rows="3"></textarea>
                </label>
                <button id="btnSend" type="submit" value="Send" class="mt-3 px-5 py-2 mx-auto rounded-md text-2xl text-white bg-transparent border-2 border-white">{{$t('contact.send')}}</button>
            </form>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
    name:'ContactPage',
    data(){
        return{
            name: '',
            mail: '',
            phone: '',
            type: '',
            description: ''
        }
    },
    methods:{
        sendMail(e){
            try{
                emailjs.sendForm('service_oog6qul','template_riwb6hm',e.target,'user_yf8l6RazsRR1DqwdKclmB',{
                name: this.name,
                mail: this.mail,
                phone: this.phone,
                type: this.type,
                description: this.description
                })
            }catch(error){
                console.log(error)
            }
        }
    }
}
</script>

<style>
.background-main{
    background: #eb6632;
    background: linear-gradient(90deg, #f4762d 40%, #e36635 100%);
    background: -moz-linear-gradient(90deg, #f4762d 40%, #e36635 100%);
    background: -webkit-linear-gradient(90deg, #f4762d 40%, #e36635 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F3696E", endColorstr="#F8A902", GradientType=1 ); 
}
#btnSend:hover{
  background:#5e2e1c;
}
.form input , .form select, .form textarea{
    outline: none !important;
}
.icon-color{
    color: #eb6632;
}
</style>