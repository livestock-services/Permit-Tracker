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
                        <option value= "Antrovet">Antrovet</option>
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
                        <option value="Schippers">Schippers</option>
                        <option value="Virbac">Virbac</option>
                        <option value="Zoetis Belgium">Zoetis Belgium</option>
                        <option value="Zoetis SA Air">Zoetis SA Air</option>
                        <option value="Zoetis SA Road">Zoetis SA Road</option>
                
                    </b-select>
                    </b-field>
             </div>

            
             <!-- <div class="column is-one-quarter">
                  <b-field label="Supplier Name.">
                    <template v-slot:label>
                        Supplier Name <span class="has-text-danger">*</span>
                    </template>
                    <b-input
                    v-model="supplierName"
                    type="text"
                    placeholder=" Supplier Name"></b-input>
                </b-field>
             </div> -->
             
            


            <!-- <div class="column is-one-quarter">

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
            </div> -->

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

import Upload from '../upload/upload.vue'

    export default {
    name: "Purchase Order",
    data() {
        const today = new Date();
        return {
            data: [

                    'Antrovet',
                    'Biocheck',
                    'Boehringer Air',
                    'Boehringer Road',
                    'Bupo', 
                    'CVRL',
                    'DIAG air',              
                    'DIAG Road',
                    'Elanco Air',
                    'Elanco Road',
                    'Huvpharma',
                    'Kruuse',
                    'Kyron',
                    'Kyron Agri',
                    'MSD Air',
                    'MSD Butalex',
                    'MSD Imizol',
                    'MSD Nilzan',
                    'MSD Poultry',
                    'MSD Prondil',
                    'MSD Road',
                    'OBP',
                    'Prionics', 
                    'Schippers',
                    'Virbac',
                    'Zoetis Belgium', 
                    'Zoetis SA air',
                    'Zoetis SA road'


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
        ...mapActions("procurement", ["addNewPfi", "load"]),
        async onSubmit() {
            try {
                // await this.load();    
                await this.addNewPfi();
                this.$buefy.toast.open({
                    message: "PFI Added Successfully!",
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