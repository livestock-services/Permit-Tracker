<template>
    <section class="card block">

         <!-- Policy Details -->
        <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Purchase Order Details</h4>
            <span class="card-header-icon">
            <b-icon icon="note-text-outline"></b-icon>
            </span>
        </div>
        </div>

        <b-form
        v-model="form"
        >
        <div
         :class="['block box']"
         >

        <div class="columns">

            
             <div class="column is-one-quarter">
                  <b-field label="Supplier Name.">
                    <template v-slot:label>
                        Supplier Name <span class="has-text-danger">*</span>
                    </template>
                    <b-input
                    v-model="supplierName"
                    type="text"
                    placeholder=" Supplier Name"></b-input>
                </b-field>
             </div>
             
            


            <div class="column is-one-quarter">

                <b-field label="Supplier Email" >
                    <template v-slot:label>
                                Supplier Email <span class="has-text-danger">*</span>
                    </template>
                    <b-input 
                        type="email"
                        :disabled="!supplierName"
                        v-model="supplierEmail"
                        placeholder="supplier@example.co.zm"
                        maxlength="50">
                    </b-input>
                </b-field>
            </div>

            <div class="column is-one-quarter">
                <b-field label="Purchase Order No.">
                     <template v-slot:label>
                        Purchase Order No. <span class="has-text-danger">*</span>
                    </template>
                    <b-input 
                    :disabled="!supplierEmail"
                    v-model="purchaseOrderNumber"
                    type="number"
                     maxlength="6"
                    placeholder="    Purchase Order No."></b-input>
                </b-field>
            </div>

            <div class="column is-one-quarter">
                <b-field label="PFI No.">
                    <template v-slot:label>
                        PFI No. <span class="has-text-danger">*</span>
                    </template>
                    <b-input
                    :disabled="!supplierEmail"
                    v-model="pfiNumber"
                    type="number"
                    maxlength="10"
                    placeholder="    PFI No."></b-input>
                </b-field>
            </div>

            


            

            
    
        </div>
        
       
          

         <div class="buttons columns">
                <div class="column is-one-third">
                    <b-button :disabled="!pfiNumber" @click="onSubmit" type="is-info" expanded>
                        Submit
                    </b-button>
        </div>
        
        </div>

        </div>

        </b-form>
        
        
    </section>
</template>

<script>

import { mapFields } from 'vuex-map-fields'
import { mapActions, mapGetters } from 'vuex'
import { DateTime } from 'luxon'
import cloneDeep from 'lodash/cloneDeep'

    export default {
        name: "Purchase Order",
        
        data() {
            const today = new Date()
            
            return {
                
                date: today.toDateString,
                minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate())
            }
        },
        
         computed: {

    ...mapFields('procurement', [
      'form',
      'form.supplierName',
      'form.supplierEmail',
      'form.purchaseOrderNumber',
      'form.pfiNumber'  
      
      
    ]),
        },

        created(){
        // this.clearForm()
        },

        methods:{
    
    ...mapActions('procurement', ['addNewPfi', 'load']),


             async onSubmit() {
                    try {
      
                   // await this.load();    
                    await this.addNewPfi(); 

                   

                    this.$buefy.toast.open({
                        message: 'PFI Added Successfully!',
                        duration: 2000,
                        position: 'is-top',
                        type: 'is-success',
                    })

                    this.clearForm();
                    
                    } catch (error) {
                   
                    
                    this.$buefy.toast.open({
                        message: 'Please Verify Your Details!',
                        duration: 2000,
                        position: 'is-top',
                        type: 'is-danger',
                    })
                    }
           
     
    },

    
    clearForm() {
     this.form = {
        supplierName: null,
        supplierEmail: null,
        purchasOrderNumber: null,
        pfiNumber: null,
       
      }

      //this.reloadPage()
     },

 reloadPage() {
  location.reload();
}

    
        }
    }
</script>