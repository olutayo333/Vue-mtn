<template>
    <div class="container-fluid">
        
        <div class="row" style="overflow:auto; width:60vw">
            <div class=" shadow rounded">
                   <table class="table table-dark ">
                        <!-- <thead class="thead-dark"> -->
                        <tbody>
                            <tr style="textalign:left; alignitems:left">
                                <th style="textalign:left; width:1%"> S/N</th>
                                
                                <th class="w-25" style="width:1%">Name</th>
                                <th class="" style="width:15%">Email</th>
                                <th>Reg Date</th>
                                
                                <th>Phone No</th>
                                
                                <th>Reg Date</th>
                                <th>Price</th>
                            </tr>
                        </tbody>
                        <!-- </thead> -->
                   </table>

                <!-- Transactions -->
                    <div v-for="(each, index) in transactionsArray" v-bind:key="each.email">
                    <table class="table  " >
                        <tbody>
                            <tr class="" style="text-align:left; align-items:left; align-self:left; justify-content:left" >
                               <td>{{index+1}}</td>
                               <td  class="w-1" style="textalign:left; "> {{each.name}}</td> 
                               <td style="textalign:left">{{each.email}}</td>
                     
                               <td class="me-5" style="width:1%">{{each.phonenumber}}</td>
                                         <td class="" style="width:10%"></td>
                               <td class="" style="text-align:left; align-items:left; align-self:left; justify-content:left">{{each.purchasedDate.substring(0,10)}}</td>
                                <td>{{each.dataamount}}</td>
                                <td>{{each.price}}</td>
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
//import Dashboard from '../views/DashboardView.vue'; 
import { RouterLink, RouterView, createRouter, createWebHistory } from "vue-router";

export default {
    data(){
            return{
                router: createRouter({
                history:createWebHistory(),
                routes:[
                        {path:'/admin', name:'admin', component:AdminDashboard},

                ],    
            }),
                //https://nodejs-mtn.onrender.com
                //transactionsURL:"http://localhost:7000/user/transactions",
                transactionsURL:"https://nodejs-mtn.onrender.com/user/transactions",
                
                email : "",
                password : "",
                transactionsArray:[], transactionStatus:false, usersStatus:true

            }
    },
    
    mounted(){
         axios.get(this.transactionsURL, {headers: {"Content-Type": "application/json", "Accept": "application/json" }})
            .then((response)=>{
            //console.log(response);
            this.transactionsArray=response.data.result
            console.log(this.transactionsArray);
        //    this.usersStatus=false; this.transactionStatus=true
        })
    },

    methods:{
        // transaction(){
             
        //      axios.get(this.transactionsURL, {headers: {"Content-Type": "application/json", "Accept": "application/json" }})
        //     .then((response)=>{
        //     //console.log(response);
        //     this.transactionsArray=response.data.result
        //     console.log(this.transactionsArray);
        //    this.usersStatus=false; this.transactionStatus=true
        // })
        // }
       
    }
    
}
</script>