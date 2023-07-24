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
        v-model="supplierForm"
        >
        <div
         :class="['block box']"
         >

        <div class="columns">
             
            <div class="column is-one-quarter">
                <b-field label="Select a Supplier">
                    <b-input
                     v-model="supplierName"
                     placeholder="enter supplier name here..."
                    />
                    </b-field>
             </div>

            
           
            
    
        </div>
        
        <!-- <div class="column is-one-quarter">
                  <b-field>
                   <Upload/>
                </b-field>
             </div> -->
          
             <p class="content"><b>Selected Supplier:</b> {{ supplierName }}</p>
           
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
                    'Provimi', 
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
            "supplierForm",
            "supplierForm.supplierName",
           
        ]),

        ...mapGetters("procurement", {
            allSupps:"allSuppliers"
    })
        
    },
    
    created() {
        // this.clearForm()
    },
    methods: {
        ...mapActions("procurement", ["addNewSupplier", "load"]),
        async onSubmit() {
            try {
                // await this.load();    
                await this.addNewSupplier();
                this.$buefy.toast.open({
                    message: "New Supplier Added Successfully!",
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
            this.supplierForm = {
                supplierName: null,
              
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