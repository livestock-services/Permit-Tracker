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
                <h4> <span class="is-blue"> PFI Date Received from Procurement</span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-primary is-light"> {{pfi.date}} </span>
              </p>
             </div>
           </div>

           <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> PFI Status</span></h4>
              <p  placeholder="Supplier Name">
                <span
                :class="[
                  'tag',
                  {
                    'is-warning ': pfi.status ==='New PFI added, awaiting acknowledgement',
                  },
                  {
                    'is-success': pfi.status === 'Acknowledged By Compliance',
                  },
                  {
                    'is-primary': pfi.status ===  'PA in motion, awaiting Finance Approval',
                  },
                  {
                    'is-success': pfi.status === `PA approved, awaiting Permit from ${pfi.authBody}`,
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
        <b-button v-if="pfi.status !== 'Acknowledged By Compliance'" label="Acknowledge Receipt" class="is-success mx-2" @click="onAcknowledge" />

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
      ...mapActions('compliance',['acknowledgePfi'] ),

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

  .is-comp{
  background-color: rgb(255, 217, 168);
 
}
  
  p{
    font-size: 1.5rem;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  </style>
  