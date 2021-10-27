<template>
  <div>
    <b-field grouped group-multiline>
      <b-select v-model="perPage">
        <option
          v-for="(option, index) in pageOptions"
          :key="index"
          :value="option"
        >
          {{ option }} entries
        </option>
      </b-select>

      <div class="buttons">
        <b-button icon-left="refresh" @click="load">Refresh</b-button>
        
      </div>
    </b-field>
    <b-table
      :data="tableData"
      :loading="loading"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      mobile-cards
      default-sort="policyNumber"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
    >
      <b-table-column
        v-slot="props"
        field="clientID"
        label="PFI No."
        sortable
      >
        {{ props.row.pfiNumber }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="coverType"
        label="Authorization Body"
        sortable
      >
        {{ props.row.authBody }}
      </b-table-column>
      
      

      <b-table-column
        v-slot="props"
        field="startDate"
        label="Date Received from Compliance "
        sortable
      >
        {{ props.row.date }}
      </b-table-column>


       <b-table-column
        v-slot="props"
        field="paymentStatus"
        label="Payment Status"
        sortable
      >
        {{ props.row.status }}
      </b-table-column>

      <b-table-column
       
        field="paymentStatus"
        label="Options"
        sortable
      >
        <b-button rounded type="is-info" class="btn is-small" @click="onApprove">Approve</b-button>
      </b-table-column>

       


      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Finance Information yet. &#x1F4CC;</h4>
      </template>
    </b-table>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
//import PayDebitModal from '@/components/modals/pay-debit-modal'
export default {
  name: 'UnreceiptedDebitsTable',

  data() {
    return {
      lightMode: true,
      isPaginated: true,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
    }
  },
  computed: {
    
  ...mapGetters('compliance', {
      loading: 'loading',
      allPAs: 'allPermitApplications',
    }),

     ...mapGetters('finance', {
      loading: 'loading',
      allPAs: 'allPermitApplications',
    }),

    
   isEmpty() {
     return this.allPAs.length === 0
    },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.allPAs
    },
  },


  methods: {
   
 ...mapActions('compliance', ['getAllPermitApplications','load' ]),
 
 ...mapActions('finance', ['getAllPermitApplications','load', 'approvePermitApplication' ]),

    async load(){
      await this.getAllPermitApplications();
    },

    async onApprove(){
      
    await this.approvePermitApplication();

       this.$buefy.toast.open({
              message: `Payment Approved!`,
              duration: 2000,
              position: 'is-top',
              type: 'is-success',
            });  

    },

  // confirm(){
     
       
  //        this.$buefy.dialog.confirm({
  //                   message: 'Proceed to approve payment?',
  //                   onConfirm: () => this.$buefy.toast.open({
  //                     message: 'Payment confirmed!',
  //                     duration: 1500,
  //                     position: 'is-top',
  //                     type: 'is-success'
  //                   })
  //               })        
     

          
  //   },


    captureInvoice(policy) {
       this.selectPolicy(policy)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: PayDebitModal,
          hasModalCard: true,
          trapFocus: true,
          canCancel: ['x'],
          destroyOnHide: true,
          customClass: '',
          onCancel: () => {
            this.$buefy.toast.open({
              message: `Payment cancelled!`,
              duration: 5000,
              position: 'is-top',
              type: 'is-info',
            })
          },
        })
      }, 300)
    },
  }

 

  
}

  
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.content-area {
  grid-column: 2/3;
}
</style>
