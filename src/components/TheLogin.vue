<template>
    <div class="container-fluid">
        <div class="row">
            <div class="mt-5 col-lg-5 shadow rounded">
                <p class="display-5 text-warning mt-2"> User Login </p>
                <form action="" @submit.prevent='login'> 
                    <input type="email" class="form-control my-2" placeholder="Email" v-model="email" />
                    <input type="password" class="form-control my-2" placeholder="Password" v-model="password" />
            
                    <button :disabled="!email && !password" type="submit" class="btn btn-warning w-100 mx-auto my-2"> Login </button>
         
                </form>
                <p>Don't have an account yet?<RouterLink to="/register"> Register Here </RouterLink></p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
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
                //https://nodejs-mtn.onrender.com,
                //loginURL:"http://localhost:7000/user/signin",
                loginURL:"https://nodejs-mtn.onrender.com/user/signin",
                
                email : "",
                password : "",
            }
    },

    methods:{
   
        login(){
            let obj = {email:this.email, password:this.password}
            axios.post(this.loginURL, obj)
                .then(response=>{
                    if (response.data.status){
                        alert(response.data.message)
                        localStorage.token = response.data.token;  
                        localStorage.setItem('email', JSON.stringify(this.email));
                        this.$router.push('/dashboard')
                    }
                    else{
                        alert(response.data.message)
                    }
                })
                .catch(error=>{
                    console.log(error);
                })
            
        }
    }
}
</script>