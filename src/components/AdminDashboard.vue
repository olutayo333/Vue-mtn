<template>
    <div class="container-fluid">
        <button @click="transaction" class="btn btn-info my-1 py-1"> View Transactions </button>
        <div class="row" style="overflow:auto; width:60vw">
            <div class=" shadow rounded">
                   <table class="table table-dark ">
                        <!-- <thead class="thead-dark"> -->
                        <tbody>
                            <tr style="textalign:left; alignitems:left">
                                <th style="textalign:left; width:1%"> S/N</th>
                                
                                <th class="w-25" style="width:1%">Name</th>
                                <th class="" style="width:15%">Email</th>
                                <th></th>
                                <th></th>
                                <th>Phone No</th>
                                
                                <th>Reg Date</th>

                            </tr>
                        </tbody>
                        <!-- </thead> -->
                   </table>
               
                <!-- <div class="col-12 col-lg-2 col-md-3 mx-auto" style="width: 90vw;"  v-for="let i = index; let each of transactionArray" > -->
                <div v-for="(each, index) in usersArray" v-bind:key="each.email">
                    <table class="table  " >
                        <tbody>
                            <tr class="" style="text-align:left; align-items:left; align-self:left; justify-content:left" >
                               <td>{{index+1}}</td>
                               <td  class="w-1" style="textalign:left; "> {{each.name}}</td> 
                               <td style="textalign:left">{{each.email}}</td>
                     
                               <td class="me-5" style="width:1%">{{each.phonenumber}}</td>
                                         <td class="" style="width:10%"></td>
                               <td class="" style="text-align:left; align-items:left; align-self:left; justify-content:left">{{each.registrationDate.substring(0,10)}}</td>
                                <td><button class="btn btn-outline-warning" @click="showModal">Edit</button> <button class="btn btn-outline-danger">Delete </button></td>
                                <!-- <td><button class="btn btn-outline-danger">Delete </button></td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AdminDashboard from '../views/AdminDashboardView.vue' 
import TransactionView from '../views/TransactionView.vue'
import { RouterLink, RouterView, createRouter, createWebHistory } from "vue-router";

export default {
    data(){
            return{
                router: createRouter({
                history:createWebHistory(),
                routes:[
                        {path:'/transaction', name:'transaction', component:TransactionView},

                ],    
            }),

                //dashboardURL:"http://localhost:7000/user/admindashboard",
                //transactionsURL:"http://localhost:7000/user/transactions",
                
                dashboardURL:"https://nodejs-mtn.onrender.com/user/admindashboard",
                transactionsURL:"https://nodejs-mtn.onrender.com/user/transactions",
                
                email : "",
                password : "",
                usersArray:[], transactionsArray:[], transactionStatus:false, usersStatus:true

            }
    },
    
    mounted(){
        axios.get(this.dashboardURL, { headers: {"Content-Type": "application/json", "Accept": "application/json" }})
        .then((response)=>{
            console.log(response);
            this.usersArray= response.data.result
            console.log(this.usersArray);
        })

        
    },

    methods:{
        transaction(){
             
        this.$router.push('/transaction')
        }
       
    }
    
}
</script>