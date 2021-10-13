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
        enctype="multipart/form-data" 
        v-model="purchaseForm">
        <div
         :class="['block box']"
         >

        <div class="columns">
            <div class="column is-one-quarter">
                <b-field label="Purchase Order No.">
                    <b-input 
                    v-model="purchaseOrderNumber"
                    type="number"
                    placeholder="    Purchase Order No."></b-input>
                </b-field>
            </div>

            <div class="column is-one-quarter">
                <b-field label="PFI No.">
                    <b-input
                    v-model="pfiNumber"
                    type="number"
                    placeholder="    PFI No."></b-input>
                </b-field>
            </div>

             <div class="column is-one-quarter">
                <b-field  label="Supplier Name" required="true"> 
                    <b-input
                    v-model="supplierName"
                    type="text"
                    placeholder="Enter supplier name here..."></b-input>
                </b-field>
            </div>


            <div class="column is-one-quarter">

        <b-field label="Supplier Email" >
            <b-input 
                type="email"
                v-model="supplierEmail"
                placeholder="supplier@example.co.zm"
                maxlength="50">
            </b-input>
        </b-field>
            </div>
    
        </div>
        
            <div>
                <upload></upload>
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
        },
        computed:{},

        methods:{
             async onSubmit() {
     // this.$emit('submit', this.modal)
     // await this.createIndividualClient()
      this.$buefy.toast.open({
        message: 'PFI Added Successfully!',
        duration: 2000,
        position: 'is-top',
        type: 'is-success',
      })
     // this.$parent.close()
    },
        }
    }
</script>