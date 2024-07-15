<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-5 shadow rounded px-2 my-2 py-2">
                <p class="fs-4">{{name}}</p> <hr>
                <p class="">Phone No: <b>{{phonenumber}}</b></p>
                <p class="">Data Balance: <b>{{databalance}}</b>GB</p>
                <button class="btn btn-warning" @click="buyData"> Buy Data </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { RouterLink, RouterView, createRouter, createWebHistory } from "vue-router";
import Data from '../views/DataView.vue'; import Login from '../views/LoginView.vue'
export default {
    data(){
            return{
                router: createRouter({
                history:createWebHistory(),
                routes:[
                       {path:'/data', name:'data', component:Data},
                       {path:'/login', name:'login', component:Login}
                ],    
            }),
            //https://nodejs-mtn.onrender.com
                //dashboardURL: "http://localhost:7000/user/getdashboard",
                dashboardURL: "https://nodejs-mtn.onrender.com/user/getdashboard",
                
                //detailsURL: "http://localhost:7000/user/userDetails" ,
                detailsURL: "https://nodejs-mtn.onrender.com/user/userDetails" ,
                
                dataURL:'https://our_site_name.com/api/data/',
                
                email:"", name:"", phonenumber:"",   databalance:"", 
            }
    },
    mounted(){
            let token = localStorage.token;
            this.email = JSON.parse(localStorage['email'])
        
            axios.get(this.dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
            .then((response)=>{
                //console.log(response);
                if(!response.data.status){
                    alert("Login expired")
                    this.$router.push('/login')
                }
                else{
                    this.name = response.data.user.name;
                    this.phonenumber= response.data.user.phonenumber;
                    this.databalance=response.data.user.databalance   
                }
            })
        },

    methods:{
        buyData (){
            this.$router.push('/data')
        },
        // logout(){
        //     localStorage.removeItem('email')
        //     localStorage.removeItem('token')
        // }
    }
}
</script>
