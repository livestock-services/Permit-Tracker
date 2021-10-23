<template>
    <section class="card block">
        
         <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Add a Permit Application</h4>
            <span class="card-header-icon">
            <b-icon icon="note-text-outline"></b-icon>
            </span>
        </div>
        </div>


        <b-form
        v-model="permitApplicationForm">
        <div
         :class="['block box']"
         >

        <div class="box">
            <div class="columns is-right">

           

            <div class="column is-one-third">
         <b-field label="PFI No." >
            <b-input v-model="pfiNumber"></b-input>
        </b-field>

            </div>

           <div class="column is-one-third">
         <b-field label="Authorization Body">
            <b-input :disbled="!pfiNumber" v-model="authBody"></b-input>
        </b-field>

            </div>


            <div class="column is-one-third">
         <b-field label="Permit Application Amount">
            <b-input :disbled="!authBody" v-model="permitApplicationAmount"></b-input>
        </b-field>

            </div>

            

        </div>

        <b-button :disbled="!permitApplicationAmount" type="is-info" @click="onSubmit">
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
        name: 'Permit Application',
        
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
      'permitApplicationForm',
      'permitApplicationForm.pfiNumber',
      'permitApplicationForm.authBody',
      'permitApplicationForm.permitApplicationAmount'
      
      
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
     this.permitApplicationForm= {
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