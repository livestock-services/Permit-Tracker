<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Supplier Snapshot</h3>
       
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
                <span class="tag is-primary is-light"> {{pfi.supplierName}} </span>
                
              </p>
             </div>
           </div>
  
           
  
          <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">  Purchase Order Number</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light">{{pfi.purchaseOrderNumber}} </span>
              </p>
             </div>
           </div>
  
          <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue">  PFI Number</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{pfi.pfiNumber}} </span>
              </p>
             </div>
           </div>
  
           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Current Status was updated on this date </span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{pfi.date}} </span>
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

        <b-tooltip type="is-primary is-light"> 
          <b-button class="is-primary is-light mx-2 " 
          icon-left="" @click="click" /> 
        </b-tooltip>

     <b-tooltip label="Acknowledge Receipt" position="is-top" type="is-blue"> 
      <b-button 
      v-model="acknowledgePfi" 
      v-if="pfi.status ==='New PFI added, awaiting acknowledgement'  &&
          this.$auth.user.email === 'compliance@livestock.co.zm'" 
      class="is-blue mx-2 ml-4" 
      icon-left="check"
      label="Acknowledge Receipt" 
      @click="onAcknowledge" /> 
    </b-tooltip>

    <b-tooltip label="Acknowledge Receipt" position="is-top" type="is-blue"> 
      <b-button 
      v-model="acknowledgePfi" 
      v-if="pfi.status ==='New PFI added, awaiting acknowledgement'  &&
          this.$auth.user.email === 'itsupport@livestock.co.zm'" 
      class="is-blue mx-2 ml-4" 
      icon-left="check"
      label="Acknowledge Receipt" 
      @click="onAcknowledge" /> 
    </b-tooltip>
    
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
         this.$auth.user.email === 'finance@livestock.co.zm'"
        type="is-success"
        icon-left="cash"
        label="Approve Permit Application"
        @click="onApprovePA"
      />
      
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
       ...mapGetters('procurement', {
        pfi: 'selectedPfi',
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
    type: 'is-greenAccent',
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
    color: rgb(0, 118, 228);
  font-family:'Times New Roman', Times, serif;
    font-size: 1.2rem;
    
  }

  .is-pink{
  background-color: rgb(248, 173, 219);
}

  .is-greenAccent{
    background-color: rgb(179, 245, 103)
  }

  .is-comp{
  background-color: rgb(255, 217, 168);
 
}
  
  p{
    font-size: 1.5rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>
  