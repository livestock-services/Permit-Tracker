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
             <h4> <span class="is-blue">  PFI No.</span></h4>
            <p >
              {{PA.pfiNumber }}
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Authorization Body</span></h4>
            <p  placeholder="Supplier Name">
              {{PA.authBody}}
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Date Received from Compliance</span></h4>
            <p  placeholder="Supplier Name">
              {{PA.date}}
            </p>
           </div>
         </div>

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Permit Fee Type</span></h4>
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
          > {{PA.feeType}} </span
        >

              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Market Authorization Fee</span></h4>
            <p  placeholder="Supplier Name">
              <span 
                :class="[
      
                  'tag',

                  {
                    'is-info': PA.marketAuthFee,
                  },
        
                  ]">{{ PA.marketAuthFee }}</span>  

                    
            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Market Non-Authorization Fee</span></h4>
            <p  placeholder="Supplier Name">
            <span 
                :class="[
      
                  'tag',

                  {
                    'is-danger ': PA.marketNonAuthFee,
                  },
        
                  ]">{{ PA.marketNonAuthFee }}</span>  

            </p>
           </div>
         </div>


         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Permit Application Status</span></h4>
            <p  placeholder="Supplier Name">

               <span
                :class="[
                  'tag',
                  {
                    'is-success': PA.permitStatus ===  'Approved',
                  },
                  {
                    'is-warning': PA.permitStatus === 'Pending',
                  },
                ]"
                >{{PA.permitStatus}}</span>
            
            </p>
           </div>
         </div>
         

       </b-form>

      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button type="is-warning" label="Close" @click="close" />
      <b-button
        label="Confirm"
        type="is-primary"
        icon-left="account"
        @click="onApprove"
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
     ...mapGetters('finance', {
      PA: 'selectedPermitApplication',
      PALoading: 'loading',
    }),

    loading() {
      return this.PALoading 
    },

  },

  mounted() {},

  

  methods: {
    ...mapActions('finance', ['load','approvePermitApplication', 'selectPermitApplication']),

    async onApprove() {

     await this.approvePermitApplication();
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
        message: 'Permit Application Snapshot closed.',
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
  color: rgb(90, 63, 12);
}

.is-green{
  color: orange;
}
</style>
