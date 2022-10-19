<template>
    <section class="card block">
        
         <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Add a Permit</h4>
            <span class="card-header-icon">
            <b-icon icon="note-text-outline"></b-icon>
            </span>
        </div>
        </div>

        <b-form v-model="permitForm">

       
        <div
         :class="['block box']"
         >

        <div class="box">
            <div class="columns is-right">

            <div class="column is-one-quarter">
            <b-field label="Supplier">
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

            <div class="column is-one-quarter">
         <b-field label="Permit No." >
            <b-input v-model="permitNumber" :disabled="!supplierName" ></b-input>
        </b-field>

            </div>

            <div class="column is-one-quarter">
         <b-field label="PFI No." >
            <b-input v-model="pfiNumber" :disabled="!permitNumber" ></b-input>
        </b-field>

            </div>

          

             

        </div>

        <b-button type="is-info" :disabled="!pfiNumber"   @click="onSubmit">
            Submit
        </b-button>

        

       
        </div>
        </div>
        
        </b-form> 

    </section>
</template>

<script>
    import { mapFields } from 'vuex-map-fields'
   import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'Permit Form',
        
        data() {
            const today = new Date()
            
            return {
                
                date: today.toDateString,
                minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate())
            }
        },

         computed: {

    ...mapFields('compliance', [
      'permitForm',  
      'permitForm.permitNumber',
      'permitForm.pfiNumber',
      'permitForm.supplierName'
      
      
    ]),
        },

        created(){
        // this.clearForm()
        },

        methods:{
    
    ...mapActions('compliance', ['addNewPermit', 'load']),


             async onSubmit() {

                  try {
                     await this.addNewPermit();

                     console.log("Clicked")

                     this.clearForm();

                      this.$buefy.toast.open({
                        message: 'Permit Added Successfully!',
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

    
    clearForm() {
     this.permitForm = {
        supplierName: null,
        pfiNumber:null,
        permitNumber:null,
       
       
      }

      //this.reloadPage()
     },

        reloadPage() {
        location.reload();
        }
    }
    }
</script>

<style scoped>

</style>