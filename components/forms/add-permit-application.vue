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
            <div class="columns ">

            <div class="column is-one-third">
         <b-field label="Supplier">
            <b-input  v-model="supplierName"></b-input>
        </b-field>

            </div>


            <div class="column is-one-third">
         <b-field label="PFI No." >
            <b-input :disabled="!supplierName" v-model="pfiNumber"></b-input>
        </b-field>

            </div>
            

          

            


            <div class="column is-one-third">
         <b-field label="PFI Value">
            <b-input
             v-cleave="masks.pfiValue"
             :disabled="!pfiNumber"
             v-model="pfiValue">
             </b-input>
        </b-field>


            </div>

            

        </div>

         <div class="columns ">

           

            <div class="column is-one-third">
         <b-field label="Exchange Rate" >
            <b-input :disabled="!pfiValue" v-model="exchangeRate"></b-input>
        </b-field>

            </div>
            

           <div class="column is-one-third">
         <b-field label="Local Currency">
            <b-input :disabled="!exchangeRate" v-model="localCurrency"></b-input>
        </b-field>

            </div>

            


           

            

        </div>

    
        <div class="columns">
            <div class="column ">
        

         <b-field label="Market Authorized Fee">
            

            <b-radio-button v-model="radioButton"
                native-value="Authorized Fee (1.5%)"
                type="is-success is-light is-outlined">
                <b-icon icon="check"></b-icon>
                <span>{{radioButton}} </span>
            </b-radio-button>

            <b-radio-button v-model="radioButton2"
                native-value="Non-Authorized Fee (5% + ZMW750.00)"
                type="is-danger is-light is-outlined">
                <b-icon icon="close"></b-icon>
                <span>{{radioButton2}}</span>
                
            </b-radio-button>

            
        </b-field>

        <div>
                <b>Selection:</b>
                <div > 
                    {{ radioButton }}
                </div>

               
               
        </div>

            </div>

        </div>

        <b-button :disabled="!permitApplicationAmount" type="is-info" @click="onSubmit">
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
   import Cleave from 'cleave.js'

    const cleave = {
            name: 'cleave',
            bind(el, binding) {
                const input = el.querySelector('input')
                input._vCleave = new Cleave(input, binding.value)
            },
            unbind(el) {
                const input = el.querySelector('input')
                input._vCleave.destroy()
            }
        }
    export default {
        name: 'Permit Application',
        directives: { cleave },
        data() {
           
            
            return {
               radioButton1: {
                   authFee:'1.5%'
                   },

               radioButton2:{
                    nonAuthFee: '5% + ZMW 750.00'
               },
               masks: {
                    
          numeral: {
              numeral: true,
              numeralThousandsGroupStyle: 'thousand',
              prefix: 'ZMW '
          },
          pfiValue: {
              numeral: true,
              numeralThousandsGroupStyle: 'thousand',
              prefix: ' '
          }
             }
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
        },


    }
    }
</script>

<style scoped>

</style>