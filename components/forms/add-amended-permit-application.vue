<template>
    <section class="card block">
        
         <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Add an Amended Permit</h4>
            <span class="card-header-icon">
            <b-icon icon="note-text-outline"></b-icon>
            </span>
        </div>
        </div>


        <b-form
        v-model="form" >
            <div
         :class="['block box']"
         >

        <div class="box">
            <div class="columns ">


            <div class="column is-one-third">
         <b-field label="PFI No." >
            <b-input  v-model="pfiNumber"></b-input>
        </b-field>

            </div>
            </div>

           <div class="columns">
            <div class="column is-half">
                <b-field label="Reason for Amendment">
                    <b-input :disabled="!pfiNumber" v-model="reasonForAmendment" maxlength="500" type="textarea"></b-input>
                </b-field>
            </div>
            </div>
        
        <b-button :disabled="!reasonForAmendment" @click="onSubmit"  type="is-info">
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
        name: 'Permit Amendment',
        
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
      'form',
      'form.pfiNumber',
      'form.reasonForAmendment'
      
      
    ]),
        },

        created(){
        // this.clearForm()
        },

        methods:{
    
    ...mapActions('compliance', ['addNewAmendedPermitApplication', 'load']),


             async onSubmit() {

                  try {
                     await this.addNewAmendedPermitApplication();

                     console.log("Clicked")

                     this.clearForm();

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

    
    clearForm() {
     this.form = {
        pfiNumber:null,
        reasonForAmendment:null
       
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