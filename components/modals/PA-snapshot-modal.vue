<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Permit Application Snapshot</h3>
       
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
                <span class="tag is-primary is-light"> {{PA.supplierName}} </span>
                
              </p>
             </div>
           </div>
  
           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> PFI No.</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light">  {{PA.pfiNumber}} </span>
              </p>
             </div>
           </div>
  
          <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">  Currency</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-success is-light">{{PA.selectCurrency}} </span>
              </p>
             </div>
           </div>
  
          <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">  PFI Value</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{PA.pfiValue}} </span>
              </p>
             </div>
           </div>
  
           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Exchange Rate</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{PA.exchangeRate}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Local Currency (ZMW)</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{PA.localCurrency}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Market Auth Fee</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-info is-light "> {{PA.marketAuthFee}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Fee Type</span></h4>
              <p  placeholder="Supplier Name">
                <span 
                :class="[
                        'tag',
                        {
                        'is-info': PA.feeType ===  'Market Authorized',
                        },
                        {
                        'is-danger': PA.feeType === 'Market Non-Authorized',
                        },
                    ]"
                > {{PA.feeType}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Market Non Auth Fee</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-danger is-light"> {{PA.marketNonAuthFee}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Authorization Body</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{PA.authBody}} </span>
              </p>
             </div>
           </div>


           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Date</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{PA.date}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Permit Application Status</span></h4>
              <p  placeholder="Supplier Name">
                <span
                :class="[
                  'tag',
                 
                  {
                    'is-warning': PA.permitStatus ===  'PA in motion, awaiting Finance Approval',
                  },
                  {
                    'is-success': PA.permitStatus === `PA approved, awaiting Permit from ${PA.authBody}`,
                  },
                ]"
                
                > {{PA.permitStatus}} </span>
              </p>
             </div>
           </div>
  
         </b-form>
  
        </div>
      </section>
      <footer class="modal-card-foot">
       <b-button v-if="PA.permitStatus !== 'PA in motion, awaiting Finance Approval'" icon-left="handshake" label="Acknowledge Receipt of Permit" class="is-success mx-2" @click="receivePermit" /> 

        <b-button label="Close" class="mx-2" @click="close" />

      
      </footer>
    </div>
  </template>
  
  <script>
  
  import { mapActions, mapGetters } from 'vuex'
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
       ...mapGetters('compliance', {
        PA: 'selectedPA',
        paLoading: 'loading',
      }),
  
      loading() {
        return this.paLoading 
      },
  
    },
  
    mounted() {},
  
    
  
    methods: {
      ...mapActions('compliance', ['load', 'selectPA']),
  
      async onSubmit() {
        const msg = await Promise.resolve('Operation successful')
        this.$buefy.toast.open({
          message: msg, // 'Operation successful',
          duration: 5000,
          position: 'is-top',
          type: 'is-info',
        })
        this.$parent.close()
      },

      async onAcknowledge() {

    await this.onAcknowledgeReceipt();
    const msg = await Promise.resolve('Permit Application Approved Successfully!')
    this.$buefy.toast.open({
    message: msg, // 'Operation successful',
    duration: 5000,
    position: 'is-top',
    type: 'is-info',
    })
    this.$parent.close()
    
    },

    
      

  
      close() {
        this.$buefy.toast.open({
          message: 'Supplier Snapshot closed.',
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
    color: rgb(0, 118, 228);
  font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
    
  }

  .is-comp{
  background-color: rgb(255, 217, 168);
 
}
  
  p{
    font-size: 1.5rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>
  