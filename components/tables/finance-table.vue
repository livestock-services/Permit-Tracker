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
        <b-button type="is-success" icon-left="refresh" @click="load">Refresh</b-button>
        
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

     <!-- <b-table-column
        v-slot="props"
        field="supplierName"
        label="Supplier Name"
        searchable
      >
        {{ props.row.supplierName }}
      </b-table-column> -->

      <b-table-column
        v-slot="props"
        field="clientID"
        label="Supplier"
        sortable
      >
        {{ props.row.supplierName }}
      </b-table-column>

      
        <b-table-column
        v-slot="props"
        field="coverType"
        label="PFI No."
        sortable
      >
      <b-tooltip label="PFI No."> {{ props.row.pfiNumber }}</b-tooltip>
      </b-table-column>
      
      
      

      <b-table-column
        v-slot="props"
        field="date"
        label="Date Received from Compliance "
        searchable
      >
        {{ props.row.date }}
      </b-table-column>

       <b-table-column
        
        v-slot="props"
        field="authBody"
        label="Market Auth Fee (ZMW)"
        sortable
      >
      <span 
      :class="[
      
          'tag',

          {
             'is-info is-light': props.row.marketAuthFee.toFixed(2),
          },

        
      
      
      
      ]">  <b-tooltip type="is-info is-light" label="Fee charged for drugs imported at the DG's discretion at 1.5% of the local currency + ZMW 100.00 permit fee"> {{ (props.row.marketAuthFee).toFixed(2) }} </b-tooltip></span>  
      </b-table-column>

       <b-table-column
        
        v-slot="props"
        field="authBody"
        label=" Fee Type"
        sortable
      >

        <span
          :class="[
            'tag',
            {
              'is-info': props.row.feeType ===  'Market Authorized',
            },
            {
              'is-danger': props.row.feeType === 'Market Non-Authorized',
            },
          ]"
          > {{ props.row.feeType }} </span
        >
       
      </b-table-column>


            <b-table-column
        v-slot="props"
        field="authBody"
        label="Non-Market Auth Fee (ZMW)" 
        sortable
      >
        <span 
      :class="[
      
          'tag',

          {
             'is-danger is-light': props.row.marketNonAuthFee.toFixed(2),
          },

        
      
      
      
      ]"><b-tooltip position="is-top" type="is-danger is-light" label="Fee charged for drugs imported at the DG's discretion at 5% of the local currency + ZMW 750.00 + ZMW 100.00 permit fee"> {{ (props.row.marketNonAuthFee).toFixed(2) }} </b-tooltip></span>  

        
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="permitStatus"
        label="Permit Application Status"
        sortable
      >
        <span
          :class="[
            'tag',
            {
              'is-success': props.row.permitStatus ===  `PA Approved, awaiting Permit from ${props.row.authBody}`,
            },
            {
              'is-warning': props.row.permitStatus === 'PA in motion, awaiting Finance Approval',
            },
          ]"
          >{{ props.row.permitStatus }}</span
        >
      </b-table-column>
      

        
     <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
          <b-button
            type="is-secondary-outline"
            icon-left="cash-multiple"
            class="approve"
            @click="captureReceipt(props.row)"
            >Approve</b-button
          >
        </span>
      </b-table-column>
       


      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Finance Information yet. &#x1F4CC;. Click the  
          
          <span
          :class="[
            'tag',
            {
              'is-success': 'Refresh',
            }
            
          ]"
          >
          
          Refresh</span> button above to load your data</h4>
      </template>
    </b-table>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import PermitAppModal from '@/components/modals/permitAppApproval.vue'
export default {
  name: 'UnreceiptedDebitsTable',

  data() {
    return {
      lightMode: true,
      isPaginated: true,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 25, 50, 100],
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
    }
  },
  computed: {
    
  ...mapGetters('compliance', {
      loading: 'loading',
      PAs: 'allPermitApplications',
    }),

     

     ...mapGetters('finance', {
      loading: 'loading',
      PAs: 'allPermitApplications',
    }),

    
   isEmpty() {
     return this.PAs.length === 0
    },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.PAs
    },
  },


  methods: {
   
 ...mapActions('compliance', ['getAllPermitApplications','load' ]),
 
 ...mapActions('finance', ['getAllPermitApplications','load', 'selectPermitApplication' ]),

    async load(){
      await this.getAllPermitApplications();
    },

    async onApprove(){
    
    this.selectPermitApplication () 
    //await this.approvePermitApplication();

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


    captureReceipt(PA) {
      this.selectPermitApplication(PA)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: PermitAppModal,
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

.approve{
  background-color: rgb(223, 240, 231);
}
</style>
