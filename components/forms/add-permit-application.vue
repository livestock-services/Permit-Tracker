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

                <div class="column is-one-quarter">
            <b-field label="Supplier">
                <b-input  v-model="supplierName"  placeholder="Enter Supplier Name..."></b-input>
            </b-field>

                </div>


            <div class="column is-one-quarter">
         <b-field label="PFI No." >
            <b-input :disabled="!supplierName" v-model="pfiNumber"  placeholder="Enter PFI No..."></b-input>
        </b-field>

            </div>
            
          <div  class="column is-one-quarter">
                <b-field label="Currency">
                    <b-select 
                            :disabled="!pfiNumber"
                            v-model="selectCurrency" 
                            placeholder="Select Currency"
                               > 
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="ZAR">ZAR</option>
                    </b-select>
                </b-field>
               
              </div>
          
            <div  class="column is-one-quarter">
                <b-field label="PFI Value">
                    <b-input 
                            :disabled="!pfiNumber"
                            v-model="pfiValue" 
                            
                             placeholder="Enter PFI Value..."> 
                    </b-input>
                </b-field>
               
              </div>
              
               
          </div>

            
          <div class="columns">

             <div class="column is-one-quarter">
                <b-field label="Exchange Rate">
                    <b-input :disabled="!pfiValue" 
                    v-model="exchangeRate" 
                   
                     placeholder="Enter Exchange Rate..." > </b-input>
               </b-field>
            
               </div>
               
                <div class="column is-one-quarter">
              <b-field label="Fee Type">
                    <b-select 
                            :disabled="!exchangeRate"
                            v-model="feeType" 
                            placeholder="Select Fee Type"
                               > 
                            <option value="Market Authorized">Market Authorized</option>
                            <option value="Market Non-Authorized">Market Non-Authorized</option>
                           
                    </b-select>
                </b-field>
            
               </div> 

                
               
        
          </div>



        
           <div class="columns">

             <div class="column is-one-quarter">
            
                <b-field label="Regulatory Body">
                    <b-select 
                            :disabled="!exchangeRate"
                            v-model="authBody" 
                            placeholder="Select Regulatory Body"
                               > 
                            <option value="ZAMRA">ZAMRA</option>
                            <option value="ZEMA">ZEMA</option>
                           
                    </b-select>
                </b-field>
            
               </div>
               
               
           </div>


        <div v-if="exchangeRate" class="card box columns mx-2 mt-4">
             <b-field>
              <b-button class="mx-4" id="viewMNA" value="Market Non-Authorized Fee" type="is-success"  @click="onSubmit">
             Submit
             </b-button>
          </b-field>
        </div>


        


           

        </div>


<!--          
        <div class="columns">
          <div v-if="exchangeRate" class="column is-half">
                <h2>Summary</h2>
                <pre>Supplier Name: {{ supplierName }}</pre>
                <pre>PFI No: {{ pfiNumber }}</pre>
                <pre>PFI Value:{{selectCurrency}} {{ pfiValue }}</pre>
                <pre>Exchange Rate: {{ exchangeRate }}</pre>
                <pre>Local Currency: ZMW {{ result }}</pre>
          </div>
        </div> -->

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
               
               masks: {
                    
          numeral: {
              numeral: true,
              numeralDecimalScale:2,
              numeralThousandsGroupStyle: 'thousand',
              prefix: 'ZMW '
          },
          pfiValue: {
              numeral: true,
              numeralThousandsGroupStyle: 'thousand',
             
          }
             }
            }
        },

         computed: {

    ...mapFields('compliance', [
       'permitApplicationForm',
       'permitApplicationForm.supplierName',
       'permitApplicationForm.pfiNumber',
       'permitApplicationForm.selectCurrency',
       'permitApplicationForm.pfiValue',
       'permitApplicationForm.exchangeRate',
       'permitApplicationForm.feeType',
       'permitApplicationForm.authBody',
       'permitApplicationForm.permitPaper',
     
      
      
    ]),
        },

        created(){
        // this.clearForm()
        },

        watch:{
            localCurrency(){
                const localCurrency = this.pfiValue * this.exchangeRate;

            }
        },

        methods:{
    
    ...mapActions('compliance', ['addNewPermitApplication', 'load']),

            // async marketAuthFee(){
            //     var n1 = document.getElementById('n1').value;
            //     var n2 = document.getElementById('n2').value;
            //     var view = document.getElementById('viewMA').value;
               

               

            //     if(view === 'Market Authorized Fee' ){
            //       var res =  document.getElementById('result').value= (n1*n2).toFixed(2);
            //       var ma =  document.getElementById('MA').value= (.015*(n1*n2)).toFixed(2);
                 
                  

                   // console.log(res);

                  
            //     }
            // },

            
            // async marketNonAuthFee(){
            //     var n1 = document.getElementById('n1').value;
            //     var n2 = document.getElementById('n2').value;
            //      var view = document.getElementById('viewMNA').value;
               
               

            //     if(view === 'Market Non-Authorized Fee' ){
            //        document.getElementById('result').value= (n1*n2).toFixed(2);
            //        document.getElementById('MNA').value= ((.05*(n1*n2))+ 750.00).toFixed(2);
                 
                  

            //      //   console.log(res);

                  
            //     }
                    
            // },

        

            async validate (e) {
                    var t = e.value;
                    e.value = (t.indexOf(".") >= 0) 
                    ? (t.substr(0, t.indexOf("."))
                    + t.substr(t.indexOf("."), 3)) : t;
             },

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
         supplierName: null,
        pfiNumber:null,
        selectCurrency:null,
        pfiValue:null,
        exchangeRate:null,
        feeType:null,
        authBody:null,
        permitPaper:null
       
       
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