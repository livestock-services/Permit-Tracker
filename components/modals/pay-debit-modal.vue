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
              {{pfi.supplierName}}
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Supplier Email</span></h4>
            <p  placeholder="Supplier Name">
              {{pfi.supplierEmail}}
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Purchase Order Number</span></h4>
            <p  placeholder="Supplier Name">
              {{pfi.purchaseOrderNumber}}
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  PFI Number</span></h4>
            <p  placeholder="Supplier Name">
              {{pfi.pfiNumber}}
            </p>
           </div>
         </div>

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="close" />
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
.is-blue{
  color: blue;
}
</style>
