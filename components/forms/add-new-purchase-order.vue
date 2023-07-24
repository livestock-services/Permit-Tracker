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
                <b-field label="Select a Supplier">
                        <b-select
                        
                        v-model="supplierName"
                        placeholder="Select Supplier"
                    >

                    <option value= "Antrovet">Antrovet</option>
                        <option value="Biocheck">Biocheck</option>
                        <option value="Boehringer Air">Boehringer Air</option>
                        <option value="Boehringer Road">Boehringer Road</option>
                        <option value= "Bupo">Bupo</option>
                        <option value="CVRL">CVRL</option>
                        <option value="DIAG Air">DIAG Air</option>
                        <option value="DIAG Road">DIAG Road</option>
                        <option value="Elanco Air">Elanco Air</option>
                        <option value="Elanco Road">Elanco Road</option>
                      
                        <option value="Huvpharma">Huvpharma</option>
                        <option value="Kruuse">Kruuse</option>
                        <option value="Kyron">Kyron</option>
                        <option value="Kyron Agri">Kyron Agri</option>
                        <option value="MSD Air">MSD Air</option>
                        <option value="MSD Butalex">MSD Butalex</option>
                        <option value="MSD Imizol">MSD Imizol</option>
                        <option value="MSD Nilzan">MSD Nilzan</option>
                        <option value="MSD Poultry">MSD Poultry</option>
                        <option value="MSD Prondil">MSD Prondil</option>
                        <option value="MSD Road">MSD Road</option>
                        <option value="OBP">OBP</option>
                        <option value="Prionics">Prionics</option>
                        <option value="Provimi">Provimi</option>
                        <option value="Schippers">Schippers</option>
                        <option value="Virbac">Virbac</option>
                        <option value="Zoetis Belgium">Zoetis Belgium</option>
                        <option value="Zoetis SA Air">Zoetis SA Air</option>
                        <option value="Zoetis SA Road">Zoetis SA Road</option>
                
                    </b-select>
                    </b-field>
             </div>

            
         <div class="columns">
                    
                    <div  class="column is-three-quarters">
                      <h5 class="my-2">Suppliers List</h5>    
                  <b-autocomplete
                  rounded
                  
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
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
    },
    created() {
        // this.clearForm()
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