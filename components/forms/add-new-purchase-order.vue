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
        v-model="form">
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
                    v-model="purchaseOrderNumber"
                    type="number"
                    placeholder="    Purchase Order No."></b-input>
                </b-field>
            </div>

            <div class="column is-one-quarter">
                <b-field label="PFI No.">
                    <template v-slot:label>
                        PFI No. <span class="has-text-danger">*</span>
                    </template>
                    <b-input
                    v-model="pfiNumber"
                    type="number"
                    placeholder="    PFI No."></b-input>
                </b-field>
            </div>


            

            
    
        </div>
        
       
          

         <div class="buttons columns">
                <div class="column is-one-third">
                    <b-button @click="onSubmit" type="is-info" expanded>
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
      'form.purchaseOrderNumber',
      'form.pfiNumber',
      'form.supplierName',
      'form.supplierEmail'
      
    ]),
        },

        methods:{
    
    ...mapActions('procurement', ['addNewPfi']),


             async onSubmit() {
                    try {
                        
                    await this.addNewPfi(); 
                    
                    this.$buefy.toast.open({
                        message: 'PFI Added Successfully!',
                        duration: 2000,
                        position: 'is-top',
                        type: 'is-success',
                    })

                    } catch (error) {
                   
                    
                    this.$buefy.toast.open({
                        message: 'Please Verify Your Details!',
                        duration: 2000,
                        position: 'is-top',
                        type: 'is-danger',
                    })
                    }
           
     
    },
        }
    }
</script>