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
             
           

            
         <div class="columns">
                    
                    <div  class="column is-full">
                      <h5 class="my-2">Suppliers List</h5>    
                  <b-autocomplete
                  rounded
                  v-model="supplierName"
                  :data="allSupps"
                  placeholder="select a supplier from the list"
                  icon="magnify"
                  clearable
                  @select="option => selected = option">
  
                  <template #empty>No results found</template>
              </b-autocomplete>
  
            
                    </div>
                  </div>

            <div class="column is-one-quarter">
                <b-field label="Purchase Order No.">
                     <template v-slot:label>
                        Purchase Order No. <span class="has-text-danger">*</span>
                    </template>
                    <b-input 
                    :disabled="!supplierName"
                    v-model="purchaseOrderNumber"
                    
                     maxlength="25"
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
                    type="text"
                    maxlength="25"
                    placeholder="    PFI No."></b-input>
                </b-field>
            </div>

            


           

            
    
        </div>
        
        <!-- <div class="column is-one-quarter">
                  <b-field>
                   <Upload/>
                </b-field>
             </div> -->
          
             <p class="content"><b>Selected Supplier:</b> {{ supplierName }}</p>
             <p class="content"><b>Purchase Order:</b> {{ purchaseOrderNumber }}</p>
             <p class="content"><b>PFI Number:</b> {{ pfiNumber }}</p>

         <div class="buttons columns">
                <div class="column is-one-third">
                    <b-button  @click="onSubmit" type="is-info" expanded>
                        Submit
                    </b-button>

                    
                 </div>

                 <!-- <div class="column is-one-third">
                    <b-button @click="onSave" type="is-success" expanded>
                        Save
                    </b-button>

                    
                 </div> -->
        
        </div>

        </div>

        </b-form>
        
        
    </section>
</template>

<script>
import { computed } from "vue";
import { mapFields } from 'vuex-map-fields'
import { mapActions, mapGetters } from 'vuex'

import Upload from '../upload/upload.vue'

    export default {
    name: "Purchase Order",
    data() {
        const today = new Date();

    
        return {


            data:[

            computed(()=>this.allSupps),

            ],
           

                name: '',
                selected: null,
                date: today.toDateString,
                minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate())
        };
    },
    computed: {
        ...mapFields("procurement", [
            "form",
            "form.supplierName",
            "form.supplierEmail",
            "form.purchaseOrderNumber",
            "form.pfiNumber"
        ]),

        ...mapGetters('procurement', {
            allSupps:'allSuppliers'
             }),

             filteredDataArray() {
      return this.data.filter((option) => {
        return option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0;
      });
    }

    },
     created() {
    this.getAllSuppliers(); // Fetch the suppliers from the database on component creation
  },
    methods: {
        ...mapActions("procurement", ["addNewPfi","getAllSuppliers", "load"]),
        async onSubmit() {
            try {
                // await this.load();    
                await this.addNewPfi();
                this.$buefy.toast.open({
                    message: "New Record Added Successfully!",
                    duration: 2000,
                    position: "is-top",
                    type: "is-success",
                });
                this.clearForm();
            }
            catch (error) {
                this.$buefy.toast.open({
                    message: "Please Verify Your Details!",
                    duration: 2000,
                    position: "is-top",
                    type: "is-danger",
                });
            }
        },
        clearForm() {
            this.form = {
                supplierName: null,
                supplierEmail: null,
                purchasOrderNumber: null,
                pfiNumber: null,
            };
            //this.reloadPage()
        },
        reloadPage() {
            location.reload();
        }
    },
    components: { Upload }
}
</script>