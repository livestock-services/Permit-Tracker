<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Permit Snapshot</h3>
       
        <button type="button" class="delete" @click="close"></button>
      </header>
      <section class="modal-card-body has-background-white">
        <!-- Modal Content -->
        <div>
         <b-form class="form">
           <div class="columns">
             <div  class="column is-half">
               <h4> <span class="is-blue">  Supplier Name</span></h4>
              <p >
                <span class="tag is-info is-light"> {{pfi.supplierName}} </span>
                
              </p>
             </div>
           </div>
  
           
  
          <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">  Purchase Order Number</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-green ">{{pfi.purchaseOrderNumber}}, created on {{pfi.stageOneDate}}</span>
              </p>
             </div>
           </div>
  
          <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">  PFI Number</span></h4>
              <p  placeholder="Supplier Name">
               

                <span class="tag is-peach "> {{pfi.pfiNumber}}, created on  {{pfi.pfiDate}} </span>
              </p>
             </div>
           </div>


           <div v-if="pfi.status === 'New PFI added, awaiting acknowledgement'">


                            <div  class="columns">
                            <div  class="column is-half">
                                <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
                              <p  placeholder="Supplier Name">
                              

                                <span class="tag is-peach "> {{ daysElapsed }} days</span>
                              </p>
                            </div>
                          </div>  

                          <div v-if="pfi.status === 'New PFI added, awaiting acknowledgement'" class="columns">
                            <div  class="column is-half">
                                <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
                              <p  placeholder="Supplier Name">
                              

                                <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
                              </p>
                            </div>
                          </div>  

                          


           </div>



                        <div v-if="pfi.status === 'Acknowledged By Compliance'">


                                  <div  class="columns">
                                  <div  class="column is-half">
                                      <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
                                    <p  placeholder="Supplier Name">
                                    

                                      <span class="tag is-peach "> {{ daysElapsed }} days</span>
                                    </p>
                                  </div>
                                  </div>  

                                  <div class="columns">
                                  <div  class="column is-half">
                                      <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
                                    <p  placeholder="Supplier Name">
                                    

                                      <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
                                    </p>
                                  </div>
                                  </div>  

                                  
                                 

                        </div>


                        <div v-if="pfi.status === 'PA in motion, awaiting Finance Approval'">


                                  <div  class="columns">
                                  <div  class="column is-half">
                                      <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
                                    <p  placeholder="Supplier Name">
                                    

                                      <span class="tag is-peach "> {{ daysElapsed }} days</span>
                                    </p>
                                  </div>
                                  </div>  

                                  <div class="columns">
                                  <div  class="column is-half">
                                      <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
                                    <p  placeholder="Supplier Name">
                                    

                                      <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
                                    </p>
                                  </div>
                                  </div>  

                                  <div  class="columns">
                                  <div  class="column is-half">
                                      <h4> <span class="is-blue">  &#128336; between PFI Acknowledgement &#x2192; PA Creation</span></h4>
                                    <p  placeholder="Supplier Name">
                                    

                                      <span class="tag is-peach "> {{ daysElapsed2 }} days</span>
                                    </p>
                                  </div>
                                  </div>  

                                 

                                 


                      </div>



                          <div v-if="pfi.status === 'PA approved, awaiting Permit'">


                                    <div  class="columns">
                                    <div  class="column is-half">
                                        <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
                                      <p  placeholder="Supplier Name">
                                      

                                        <span class="tag is-peach "> {{ daysElapsed }} days</span>
                                      </p>
                                    </div>
                                    </div>  

                                    <div  class="columns">
                                    <div  class="column is-half">
                                        <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
                                      <p  placeholder="Supplier Name">
                                      

                                        <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
                                      </p>
                                    </div>
                                    </div>  

                                    <div  class="columns">
                                    <div  class="column is-half">
                                        <h4> <span class="is-blue">  &#128336; between PFI Acknowledgement &#x2192; PA Creation</span></h4>
                                      <p  placeholder="Supplier Name">
                                      

                                        <span class="tag is-peach "> {{ daysElapsed2 }} days</span>
                                      </p>
                                    </div>
                                    </div>  

                                    <div  class="columns">
                                    <div  class="column is-half">
                                        <h4> <span class="is-blue">  &#128336; between PA Creation &#x2192; PA Approval</span></h4>
                                      <p  placeholder="Supplier Name">
                                      

                                        <span class="tag is-peach "> {{ daysElapsed3 }} days</span>
                                      </p>
                                    </div>
                                    </div>  



                          </div>


                          <div v-if="pfi.status === 'Permit received'" >


                                      <div  class="columns">
                                      <div  class="column is-half">
                                          <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
                                        <p  placeholder="Supplier Name">
                                        

                                          <span class="tag is-peach "> {{ daysElapsed }} days</span>
                                        </p>
                                      </div>
                                      </div>  

                                      <div  class="columns">
                                      <div  class="column is-half">
                                          <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
                                        <p  placeholder="Supplier Name">
                                        

                                          <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
                                        </p>
                                      </div>
                                      </div>  

                                      <div  class="columns">
                                      <div  class="column is-half">
                                          <h4> <span class="is-blue">  &#128336; between PFI Acknowledgement &#x2192; PA Creation</span></h4>
                                        <p  placeholder="Supplier Name">
                                        

                                          <span class="tag is-peach "> {{ daysElapsed2 }} days</span>
                                        </p>
                                      </div>
                                      </div>  

                                      <div  class="columns">
                                      <div  class="column is-half">
                                          <h4> <span class="is-blue">  &#128336; between PA Creation &#x2192; PA Approval</span></h4>
                                        <p  placeholder="Supplier Name">
                                        

                                          <span class="tag is-peach "> {{ daysElapsed3 }} days</span>
                                        </p>
                                      </div>
                                      </div>  

                                      <div  class="columns">
                                      <div  class="column is-half">
                                          <h4> <span class="is-blue">  &#128336; between PA Approval &#x2192; Permit Receipt</span></h4>
                                        <p  placeholder="Supplier Name">
                                        

                                          <span class="tag is-peach "> {{ daysElapsed4 }} days</span>
                                        </p>
                                      </div>
                                      </div>  


                                      <div class="columns">
                                      <div  class="column is-half">
                                          <h4> <span class="is-blue">  &#128336; between PO &#x2192; Permit Receipt</span></h4>
                                        <p  placeholder="Supplier Name">
                                        

                                          <span class="tag is-peach "> {{ daysElapsed4 }} days</span>
                                        </p>
                                      </div>
                                    </div>  


                            </div>



  
           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Current Status was updated on this date </span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-info is-light"> {{pfi.date}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Status Log  </span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-warning is-light">New PFI added, awaiting acknowledgement:  {{pfi.stageOneDate}} </span>
                <span class="tag is-success is-light">Acknowledged By Compliance:  {{pfi.stageTwoDate}} </span>
                <span class="tag is-warning">PA in motion, awaiting Finance Approval:  {{pfi.stageThreeDate}} </span>
                <span class="tag is-success">PA approved, awaiting Permit:  {{pfi.stageFourDate}} </span>
                <span class="tag is-pink">Permit received:  {{pfi.stageFiveDate}} </span>
              </p>
             </div>
           </div>


           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Current Status</span></h4>
              <p  placeholder="Supplier Name">
                <span
                :class="[
                  'tag',
                  {
                    'is-warning is-light ': pfi.status ==='New PFI added, awaiting acknowledgement',
                  },
                  {
                    'is-success is-light': pfi.status === 'Acknowledged By Compliance',
                  },
                  {
                    'is-warning': pfi.status ===  'PA in motion, awaiting Finance Approval',
                  },
                  {
                    'is-success': pfi.status === `PA approved, awaiting Permit`,
                  },
                  {
                    'is-pink': pfi.status === `Permit received`,
                  },
                ]"
                
                > {{pfi.status}} </span>
              </p>
             </div>
           </div>
  
         </b-form>
  
        </div>
      </section>
    
      <footer class="modal-card-foot">

       

     <b-tooltip label="Acknowledge Receipt" position="is-top" type="is-blue"> 
      <b-button 
      v-model="acknowledgePfi" 
      v-if="pfi.status ==='New PFI added, awaiting acknowledgement'  &&
          this.$auth.user.email === 'compliance@livestock.co.zm' && pfi.pfiNumber != isNullOrUndefined" 
      class="is-blue mx-2 ml-4" 
      icon-left="check"
      label="Acknowledge Receipt" 
      @click="onAcknowledge" /> 
    </b-tooltip>

    <b-tooltip label="Acknowledge Receipt" position="is-top" type="is-blue"> 
      <b-button 
      v-model="acknowledgePfi" 
      v-if="pfi.status ==='New PFI added, awaiting acknowledgement'  &&
          this.$auth.user.email === 'itsupport@livestock.co.zm'  && pfi.pfiNumber != isNullOrUndefined " 
      class="is-blue mx-2 ml-4" 
      icon-left="check"
      label="Acknowledge Receipt" 
      @click="onAcknowledge" /> 
    </b-tooltip>


  
      <b-button
      v-model="acknowledgePfi" 
      v-if="pfi.status ==='New PFI added, awaiting acknowledgement'  &&
          this.$auth.user.email === 'compliance@livestock.co.zm' && pfi.pfiNumber == isNullOrUndefined" 
      class="mx-2 ml-4" 
      icon-left="alert"
      type="is-danger"
      label="You need a PFI to acknowledge receipt" 
      /> 

    
      <b-button
      v-model="acknowledgePfi" 
      v-if="pfi.status ==='New PFI added, awaiting acknowledgement'  &&
          this.$auth.user.email === 'itsupport@livestock.co.zm'  && pfi.pfiNumber == isNullOrUndefined " 
      class=" mx-2 ml-4" 
      icon-left="alert"
      type="is-danger"
      label="You need a PFI to acknowledge receipt"
       /> 
 
    
     <b-tooltip label="Put PA in motion" position="is-top" icon-left="handshake"> 
        <b-button
          v-model="putPAinMotion" 
          v-if="pfi.status ==='Acknowledged By Compliance' &&
          this.$auth.user.email !== 'finance@livestock.co.zm'" 
          class="is-warning is-light mx-2" 
          icon-left="handshake" 
          label="Put Permit Application in motion"
          @click="onPutPaInMotion" />
      </b-tooltip>
        
     

    <b-tooltip label="Approve PA" position="is-top" type="is-success is-light" icon-left="money">
     <b-button
        v-model="approvePA"
        v-if="pfi.status ==='PA in motion, awaiting Finance Approval' &&
         this.$auth.user.email === 'itsupport@livestock.co.zm'"
        type="is-success"
        icon-left="cash"
        label="Approve Permit Application"
        @click="onApprovePA"
      />
      
    </b-tooltip>

    

    <b-tooltip label="Receive Permit" type="is-coral" position="is-top" icon-left="money">
     <b-button
        v-model="receivePermit"
        v-if="pfi.status=== 'PA approved, awaiting Permit' 
        &&  this.$auth.user.email === 'compliance@livestock.co.zm'"
        class="mx-2"
        type="is-greenAccent"
        icon-left="book"
        label="Receive Permit"
        @click="onReceivePermit"
      />
      
    </b-tooltip>

    <b-tooltip label="Receive Permit" type="is-coral" position="is-top" icon-left="money">
     <b-button
        v-model="receivePermit"
        v-if="pfi.status=== 'PA approved, awaiting Permit'
        &&  this.$auth.user.email === 'itsupport@livestock.co.zm'"
        class="mx-2"
        type="is-greenAccent"
        icon-left="book"
        label="Receive Permit"
        @click="onReceivePermit"
      />
      
    </b-tooltip>

        <b-button label="Close" class="mx-2" @click="close" />

        <!-- <b-button
          label="Submit"
          type="is-primary"
          icon-left="account"
          @click="onSubmit"
        /> -->
      </footer>
    </div>
  </template>
  
  <script>
  
  import { isNullOrUndefined } from '@syncfusion/ej2-base'
import { mapActions, mapGetters } from 'vuex'
import { computed } from 'vue';
  export default {
    name: 'OperationModal',
  
     data() {

   
      

      return {

      
        isFullPage: true,
        form: {
          supplierName: null,
          supplierEmail: null,
          purchaseOrderNumber: null,
          pfiNumber: null,
          
        },
       
      }
    },
  
    computed: {
       ...mapGetters('procurement', {
        pfi: 'selectedPfi',
        daysElapsed:'daysElapsed',
        daysElapsed1:'daysElapsed1',
        daysElapsed2:'daysElapsed2',
        daysElapsed3:'daysElapsed3',
        daysElapsed4:'daysElapsed4',
        pfiLoading: 'loading',
      }),
  
      loading() {
        return this.pfiLoading 
      },
      
  
    },
  
    mounted() {},
  
    
  
    methods: {
      ...mapActions('procurement', ['load', 'selectPfi']),
      ...mapActions('compliance',['acknowledgePfi','approvePA', 'receivePermit', 'putPaInMotion', 'selectPA'] ),

      async onSubmit() {
        const msg = await Promise.resolve('Operation successfull')
        this.$buefy.toast.open({
          message: msg, // 'Operation successful',
          duration: 5000,
          position: 'is-top',
          type: 'is-info',
        })
        this.$parent.close()
      },

      async onAcknowledge() {

    await this.acknowledgePfi();
    const msg = await Promise.resolve('Acknowledged Successfully!')
    this.$buefy.toast.open({
    message: msg, // 'Operation successful',
    duration: 5000,
    position: 'is-top',
    type: 'is-info',
    })
    this.$parent.close()
    },

    async onPutPaInMotion(){
      await this.putPaInMotion();
    const msg = await Promise.resolve('Permit Application is being processed for approval by Finance.')
    this.$buefy.toast.open({
    message: msg, // 'Operation successful',
    duration: 5000,
    position: 'is-top',
    type: 'is-info is-light',
    })
    this.$parent.close()
    },

    async onApprovePA(){
      await this.approvePA();
    const msg = await Promise.resolve('Permit Application has been approved by Finance.')
    this.$buefy.toast.open({
    message: msg, // 'Operation successful',
    duration: 5000,
    position: 'is-top',
    type: 'is-success is-light',
    })
    this.$parent.close()
    },

        async onReceivePermit() {

    await this.receivePermit();
    const msg = await Promise.resolve('Permit received Successfully!')
    this.$buefy.toast.open({
    message: msg, // 'Operation successful',
    duration: 2000,
    position: 'is-bottom',
    type: 'is-success',
    })
    this.$parent.close()

    },

  
      close() {
        this.$buefy.toast.open({
          message: 'Compliance Snapshot closed.',
          duration: 2000,
          position: 'is-top',
          type: 'is-warning ',
        })
        this.$parent.close()
      },
    },
  }
  </script>
  
  <style scoped>
  .modal-width-auto {
    width: auto;
  }
  
  
  .is-blue{
    color: rgb(10, 103, 55);
  font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
    
  }

  .is-pink{
  background-color: rgb(248, 173, 219);
}

  .is-greenAccent{
    background-color: rgb(179, 245, 103)
  }

  .is-peach{
  background-color: peachpuff;
}


.is-green{
  background-color: rgb(200, 244, 134)
}

  .is-comp{
  background-color: rgb(255, 217, 168);
 
}
  
  p{
    font-size: 1.5rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>
  