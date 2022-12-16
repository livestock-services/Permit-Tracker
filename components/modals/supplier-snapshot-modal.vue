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
              <span class="tag is-primary is-light">  {{pfi.supplierName}} </span>
              
            </p>
           </div>
         </div>

       

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Purchase Order Number</span></h4>
            <p  placeholder="Supplier Name">
              <span class="tag is-primary is-light">   {{pfi.purchaseOrderNumber}}, created on {{pfi.date}} </span>
            </p>
           </div>
         </div>

        <div class="columns">
           <div class="column is-half">
              <h4> <span class="is-blue">  PFI Number</span></h4>
            <p  placeholder="Supplier Name">
              <span  class="tag is-primary is-light">{{pfi.pfiNumber}}, created on {{pfi.date}} </span>


            </p>

            <b-input v-if="pfi.status === 'New PFI added, awaiting acknowledgement'" v-model="pfiNumber" placeholder="Enter PFI here..."></b-input>
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
                <span class="tag is-primary">Permit received:  {{pfi.stageFiveDate}} </span>
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
            <p  placeholder="Current Status">
              <span :class="[
                
                'tag',
                {
                    'is-warning is-light': pfi.status ===  'New PFI added, awaiting acknowledgement',
                  },
                  {
                    'is-success is-light': pfi.status === 'Acknowledged By Compliance',
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
      <b-button label="Close" @click="close" />
     <b-button
        v-if="pfi.status === 'New PFI added, awaiting acknowledgement'"
        label="Update"
        type="is-info"
        icon-left="account"
        @click="onSubmit"
      /> 
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

    async onSubmit() {
      const msg = await Promise.resolve('Operation successul')
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

.is-pink{
  background-color: rgb(248, 173, 219);
}

.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
