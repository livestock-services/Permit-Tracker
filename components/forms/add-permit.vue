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
         <b-field label="Permit No." >
            <b-input v-model="permitNumber"></b-input>
        </b-field>

            </div>

            <div class="column is-one-quarter">
         <b-field label="PFI No." >
            <b-input v-model="pfiNumber"></b-input>
        </b-field>

            </div>

           <div class="column is-one-quarter">
         <b-field label="Authorization Body">
            <b-input v-model="authBody"></b-input>
        </b-field>

            </div>

             <div class="column is-one-quarter">
         <b-field label="Application Date">
            <b-input v-model="applicationDate"></b-input>
        </b-field>

            </div>

        </div>

        <b-button type="is-info">
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
      'permitForm.pfiNumber',
      'permitForm.authBody',
      'permitForm.permitApplicationAmount'
      
      
    ]),
        },

        created(){
        // this.clearForm()
        },

        methods:{
    
    ...mapActions('compliance', ['addNewPermitApplication', 'load']),


             async onSubmit() {

                  try {
                     await this.addNewPermitApplication();

                     console.log("Clicked")

                     this.clearForm();

                      this.$buefy.toast.open({
                        message: 'Permit Application Added Successfully!',
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
     this.form = {
        pfiNumber:null,
        authBody:null,
        permitApplicationAmount: null
       
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