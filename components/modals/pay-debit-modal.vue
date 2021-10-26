<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Operation</h3>
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form class="form">
         <div class="columns">
           <div class="column is-half">
            <p placeholder="Supplier Name">
              {{supplierName}}
            </p>
           </div>
         </div>

         <div class="columns">
           <div class="column is-half">
            <b-input placeholder="Supplier Email"></b-input>
           </div>
         </div>

         <div class="columns">
           <div class="column is-half">
            <b-input placeholder="Purchase Order Number"></b-input>
           </div>
         </div>

         <div class="columns">
           <div class="column is-half">
            <b-input placeholder="PFI Number"></b-input>
           </div>
         </div>

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Cancel" @click="close" />
      <b-button
        label="Submit"
        type="is-primary"
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
        message: 'Operation cancelled...',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
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
</style>
