<template>
    <div class="container-fluid">
        <button @click="transaction" class="btn btn-info my-1 py-1"> View Transactions </button>
        <div class="row" v-if="!editStatus">
            <div class="col-lg-12">
                 <p class="mx-2 shadow py-3 px-2 fs-5">
                            <span>S/N</span>
                            <span class="mx-3">Name</span>
                            <span class="mx-3">Email</span>
                            <span class="mx-3">Phone Number</span>
                            <span class="mx-3">Registration Date</span>
                </p>
            </div>
        </div>
        <div class="row" v-if="!editStatus">
            <div class="col-lg-12 my-1" v-for="(each, index) in usersArray" v-bind:key="each.email" >
                    <div  class="card shadow mx-auto text-left " style="" >
                        <!-- <p><button class="btn"><img class="mx-auto d-flex" width="100%"   :src=each.productImage alt=""></button></p> -->
                        <div class="card-body">
                            {{index+1}}
                            <span class="mx-1">{{each.name}}</span> 
                            <span class="mx-2">{{each.email}}</span>
                            <span class="mx-2">{{each.phonenumber}}</span>
                            <span class="mx-3">{{each.registrationDate.substring(0,10)}}</span>
                            <span style="position:relative; float:right">
                                <button  class="btn btn-outline-warning mx-1 float-right align-right text-right" @click="showEditUser(each)">Edit</button> 
                                <button @click="deleteUser(each)" class="btn btn-outline-danger">Delete </button>
                            </span>          
                        </div>
                    </div>
            </div>
        </div>  
        <div class="row" v-if="editStatus">
            <div class="col-lg-12 shadow">
                <form action="" @submit.prevent="editUser">
                    <input type="text" class="form-control my-2" value={{editName}} v-model="editName" />
                    <input type="email" class="form-control my-2" value={{editEmail}} v-model="editEmail" />
                    <input type="number" class="form-control my-2" value={{editPhonenumber}} v-model="editPhonenumber" />
            
                    <!-- <p>I agree with <a href="">Terms and Conditions</a><span><input type="checkbox" v-model="terms"></span></p> -->
                    <button  type="submit"  class=" shadow btn btn-warning w-100 mx-auto my-2"> 
                        Confirm Edit 
                    </button>
                </form>
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
                //  deleteURL:"http://localhost:7000/user/deleteuser",
                //  editURL:"http://localhost:7000/user/edituser",

                dashboardURL:"https://nodejs-mtn.onrender.com/user/admindashboard",
                transactionsURL:"https://nodejs-mtn.onrender.com/user/transactions",
                deleteURL:"https://nodejs-mtn.onrender.com/user/deleteuser",
                editURL:"https://nodejs-mtn.onrender.com/user/edituser",


                email : "",
                password : "",
                usersArray:[], transactionsArray:[], transactionStatus:false, usersStatus:true, editStatus:false,
                userID:"",
                editName:"", editPhonenumber:"", editEmail:"",  editID:"",
            }
    },
    
    mounted(){
        axios.get(this.dashboardURL, { headers: {"Content-Type": "application/json", "Accept": "application/json" }})
        .then((response)=>{
            this.usersArray= response.data.result
        }) 
        //this.showEditUser=false
    },

    methods:{
        reload(){
                axios.get(this.dashboardURL, { headers: {"Content-Type": "application/json", "Accept": "application/json" }})
                .then((response)=>{
                this.usersArray= response.data.result;
                this.showEditUser=false
            })
        },
        transaction(){     
            this.$router.push('/transaction')
        },
        deleteUser(each){
            this.userID = each._id;
            axios.post(this.deleteURL, {id:this.userID})
            .then((response)=>{
                console.log(response);
                if(response.data.status){
                    alert(response.data.message)
                    this.reload();
                }
                else{
                    alert(response.data.message)
                }
            })
        },
        showEditUser(each){
            this.editName=each.name;
            this.editEmail=each.email;
            this.editPhonenumber=each.phonenumber
            this.editID=each._id;
            this.editStatus=true;
        },

        editUser(){
            let obj={name:this.editName, email:this.editEmail, phonenumber:this.editPhonenumber, id:this.editID}
            axios.post(this.editURL, obj)
            .then((response)=>{
                if(response.data.status){
                    alert(response.data.message)
                    this.editStatus=false;
                    this.reload()
                }
                else{
                    alert(response.data.message)
                }
            })
        },
       
    }

    
}
</script>