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
        {{ props.row.clientID }}
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="coverType"
        label="Created By"
        sortable
      >
        {{ props.row.coverType }}
      </b-table-column>
      
      

      <b-table-column
        v-slot="props"
        field="startDate"
        label="Issued Date"
        sortable
      >
        {{ props.row.startDate }}
      </b-table-column>

     

      <b-table-column
        v-slot="props"
        field="sumInsured"
        label="Supplier"
        sortable
        
      >
       {{ currencyValue(props.row, 'sumInsured') }}
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="proRata"
        label="Supplier Email"
        sortable
      >
        {{ props.row.proRata }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="proRata"
        label="Status"
        sortable
      >
        {{ props.row.proRata }}
      </b-table-column>

      


      

      <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
          <b-button
            type="is-secondary-outline"
            icon-left="cash-multiple"
            @click="captureInvoice(props.row)"
            >Capture Invoice</b-button
          >
        </span>
      </b-table-column>

      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Purchase Orders yet. &#x1F4DA;</h4>
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
    
   
    
    isEmpty() {
      return 'empty'
    },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.policies
    },
  },

  

  methods: {
   

    ...mapActions('policies', ['getAllPolicies','load', 'selectPolicy' ]),

        currencyValue(policy, field) {
      switch (policy.currency) {
        case 'USD':
          return this.$options.filters.currency_usd(policy[field])

        default:
          return this.$options.filters.currency(policy[field])
      }
    },

    restrictDecimal() {
      this.totalPremium = this.totalPremium.match(/^\d+\.?\d{0,2}/)
    },

    async load(){
      await this.getAllPolicies();
    },


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
