<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 shadow rounded" style="height:70vh; overflow:auto" >
                <div class="row my-2 mx-2 py-2 px-2 shadow rounded">
                    <b>1.2GB + 5mins Monthly Plan </b>
                    <p> 1.2GB Monthly Plan + FREE 2GB for Youtube and 200MB for YouTube Music + 5mins.</p> <hr>
                    <p>30 days <span class="fs-4">|</span> #1000 <span class="ms-3"> <button @click="oneThousand" class="btn btn-outline-warning rounded"> Buy Now </button></span></p>
                </div> <hr>
                <div class="row my-2 mx-2 py-2 px-2 shadow rounded">
                    <b>1.5GB + 5mins Monthly Plan </b>
                    <p> 1.5GB + 2.4GB Youtube Night+3hrs-200MB-YouTube Weekly + 5mins.</p> <hr>
                    <p>30 days <span class="fs-4">|</span> #1,200 <span class="ms-3"> <button @click="oneThousand200" class="btn btn-outline-warning rounded"> Buy Now </button></span></p>
                </div> <hr>
                <div class="row my-2 mx-2 py-2 px-2 shadow rounded">
                    <b>5GB Xtraspecial </b>
                    <p> Get 5GB Xtraspecial Plan for N1,500. valid for 30days</p> <hr>
                    <p>30 days <span class="fs-4">|</span> #1,500 <span class="ms-3"> <button @click="oneThousand500" class="btn btn-outline-warning rounded"> Buy Now </button></span></p>
                </div> <hr>
                <div class="row my-2 mx-2 py-2 px-2 shadow rounded">
                    <b>3GB +5mins Monthly Plan </b>
                    <p> 3GB + 2GB Youtube Night+200MB Youtube Music + 5mins.</p> <hr>
                    <p>30 days <span class="fs-4">|</span> #1600 <span class="ms-3"> <button @click="twoThousand" class="btn btn-outline-warning rounded"> Buy Now </button></span></p>
                </div> <hr>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'; //import {onMounted} from 'vue';
import Dashboard from '../views/DashboardView.vue'; 
import { RouterLink, RouterView, createRouter, createWebHistory } from "vue-router";

export default {
    data(){
            return{
                router: createRouter({
                history:createWebHistory(),
                routes:[
                       {path:'/dashboard', name:'dashboard', component:Dashboard}
                ],    
            }),
                            //https://nodejs-mtn.onrender.com
                //dashboardURL: "http://localhost:7000/user/getdashboard",
                dashboardURL: "https://nodejs-mtn.onrender.com/user/getdashboard",
                
                //detailsURL: "http://localhost:7000/user/userDetails" ,
                detailsURL: "https://nodejs-mtn.onrender.com/user/userDetails" ,
                
                //dataURL:"http://localhost:7000/user/dataDetails",
                dataURL:"https://nodejs-mtn.onrender.com/user/dataDetails",
                
                //dataBalanceURL:"http://localhost:7000/user/dataBalance",
                dataBalanceURL:"https://nodejs-mtn.onrender.com/user/dataBalance",
                
                email : "", password : "", name:"", phonenumber:"", databalance:"",
                status1:false, status2:false,
            }
    },
    mounted(){
        let token = localStorage.token;
           this.email = JSON.parse(localStorage['email'])
            axios.get(this.dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
            .then((response)=>{
                if(!response.data.status){
                     alert("Login expired")
                    this.$router.push('/login')
                }
                else{
                    this.name = response.data.user.name;
                    this.phonenumber= response.data.user.phonenumber;
                    this.databalance=response.data.user.databalance;      
                }
            })
        },
    
    methods:{

        oneThousand(){
            axios.post(this.dataURL, {name:this.name, phonenumber:this.phonenumber,email:this.email, price:'1000', dataamount:'1.2GB' })
            .then((response)=>{
                this.status1= response.data.status
            })
            .catch((err)=>{console.log(err);})

            let databal = 1200 + this.databalance;
            axios.post(this.dataBalanceURL,{databalance:databal, email:this.email})
            .then((response)=>{
                if(response.data.status){
                    alert("Data Purchased Successful")
                    this.$router.push('/dashboard')
                    this.status1 = false; this.status2=false
                }
                else{
                    alert("Data Purchased Failed")
                }
            })
            .catch((err)=>{console.log(err);})

        },

        oneThousand200(){
            axios.post(this.dataURL, {name:this.name, phonenumber:this.phonenumber,email:this.email, price:'1200', dataamount:'1.5GB' })
            .then((response)=>{
                this.status1= response.data.status
            })
            .catch((err)=>{console.log(err);})

            let databal = 1500 + this.databalance;
            axios.post(this.dataBalanceURL,{databalance:databal, email:this.email})
            .then((response)=>{
                if(response.data.status){
                    alert("Data Purchased Successful")
                    this.$router.push('/dashboard')
                    this.status1 = false; this.status2=false
                }
                else{
                    alert("Data Purchased Failed")
                }
            })
            .catch((err)=>{console.log(err);})
        },

        oneThousand500(){
            axios.post(this.dataURL, {name:this.name, phonenumber:this.phonenumber,email:this.email, price:'1500', dataamount:'5GB' })
            .then((response)=>{
                this.status1= response.data.status
            })
            .catch((err)=>{console.log(err);})

            let databal = 5000 + this.databalance;
            axios.post(this.dataBalanceURL,{databalance:databal, email:this.email})
            .then((response)=>{
                if(response.data.status){
                    alert("Data Purchased Successful")
                    this.$router.push('/dashboard')
                    this.status1 = false; this.status2=false
                }
                else{
                    alert("Data Purchased Failed")
                }
            })
            .catch((err)=>{console.log(err);})
        },

        twoThousand(){
            axios.post(this.dataURL, {name:this.name, phonenumber:this.phonenumber,email:this.email, price:'2000', dataamount:'7GB' })
            .then((response)=>{
                this.status1= response.data.status
            })
            .catch((err)=>{console.log(err);})

            let databal = 7000 + this.databalance;
            axios.post(this.dataBalanceURL,{databalance:databal, email:this.email})
            .then((response)=>{
                if(response.data.status){
                    alert("Data Purchased Successful")
                    this.$router.push('/dashboard')
                    this.status1 = false; this.status2=false
                }
                else{
                    alert("Data Purchased Failed")
                }
            })
            .catch((err)=>{console.log(err);})
        },



    }
}
</script>