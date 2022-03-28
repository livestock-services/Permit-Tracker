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
        <b-button type="is-warning" icon-left="refresh" @click="load">Refresh</b-button>
        
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
        field="pfiNumber"
        label="Permit No."
        sortable
      >
        {{ props.row.pfiNumber }}
      </b-table-column>


        <b-table-column
        v-slot="props"
        field="date"
        label="Date of Amendment"
        searchable
      >
        {{ props.row.date}}
      </b-table-column>

      
       <b-table-column
        v-slot="props"
        field="reasonForAmendment"
        label="Reason For Amendment"
        sortable
      >
        {{ props.row.reasonForAmendment}}
      </b-table-column>

      


      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Amended Permit Applications yet. &#x1F4DB;. Click the 
          
            <span
          :class="[
            'tag',
            {
              'is-warning': 'Refresh',
            }
            
          ]"
          >
          
          Refresh</span>
          
          button above to load your data</h4>
      </template>
    </b-table>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
//import PayDebitModal from '@/components/modals/pay-debit-modal'
export default {
  name: 'AmendedPermitApplicationsTable',

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
    
    ...mapGetters('compliance', {
      loading: 'loading',
      allAPAs: 'allAmendedPermitApplications',
    }),
    
   isEmpty() {
     return this.allAPAs.length === 0
    },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.allAPAs
    },
  },

  

  methods: {
   

    ...mapActions('compliance', ['getAllAmendedPermitApplications','load' ]),

    async load(){
      await this.getAllAmendedPermitApplications();
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
