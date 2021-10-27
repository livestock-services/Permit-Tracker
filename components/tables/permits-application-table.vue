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
        field="authBody"
        label="Authorization Body"
        sortable
      >
        {{ props.row.authBody }}
      </b-table-column>
      
      <b-table-column
        v-slot="props"
        field="applicationDate"
        label="Application Date "
        sortable
      >
        {{ props.row.date }}
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="permitApplicationAmount"
        label="Permit Application Amount "
        sortable
      >
        {{ props.row.permitApplicationAmount }}
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
              'is-success': props.row.permitStatus.approved ===  'Approved',
            },
            {
              'is-warning': props.row.permitStatus.pending === 'Pending',
            },
          ]"
          >{{ props.row.permitStatus.pending }}</span
        >
      </b-table-column>
      

     


      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Permit Applications yet. &#x1F4DB;</h4>
      </template>
    </b-table>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
//import PayDebitModal from '@/components/modals/pay-debit-modal'
export default {
  name: 'PermitApplicationsTable',

  data() {

    
    return {
      status: 'Active',
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

    async load(){
      await this.getAllPermitApplications();
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
