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

        <div
         :class="['block box']"
         >

        <div class="columns">
            <div class="column is-one-third">
                <b-field label="Purchase Order No.">
                    <b-input v-model="purchaseOrderNumber"
                    placeholder="    Purchase Order No."></b-input>
                </b-field>
            </div>

            <div class="column is-one-third">
                <b-field label="PFI No.">
                    <b-input v-model="pfiNumber"
                    placeholder="    PFI No."></b-input>
                </b-field>
            </div>

             <div class="column is-one-third">
                <b-field  label="Supplier Name" required="true">
                    <b-input v-model="supplierName"
                    placeholder="Enter supplier name here..."></b-input>
                </b-field>
            </div>


            <div class="column is-one-third">

        <b-field label="Supplier Email"
        
            >
            <b-input type="email"
                placeholder="supplier@example.co.zm"
                maxlength="30">
            </b-input>
        </b-field>
            </div>

            

           

           
        </div>
        
       <div>
                <upload></upload>
            </div>

         <div class="buttons columns">
                <div class="column is-one-third">
                    <b-button type="is-info" expanded>
                        Submit
                    </b-button>
                </div>
            </div>

        </div>


        
        
    </section>
</template>

<script>
import upload from '../upload/upload.vue'
    export default {
  components: { upload },
        data() {
            const today = new Date()
            return {
                date: new Date(),
                minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate())
            }
        }
    }
</script>