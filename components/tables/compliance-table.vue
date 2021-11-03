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
        field="supplierName"
        label="Supplier Name"
        searchable
      >
        {{ props.row.supplierName }}
      </b-table-column>


      <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="PFI No."
        sortable
      >
        {{ props.row.pfiNumber }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="urchaseOrderNumber"
        label="Purchase Order No."
        sortable
      >
        {{ props.row.purchaseOrderNumber }}
      </b-table-column>

      
      
      

      <b-table-column
        v-slot="props"
        field="startDate"
        label="PFI Date Received from Procurement "
        sortable
      >
        {{ props.row.date }}
      </b-table-column>


      
      <b-table-column v-slot="props" field="status" label="PFI Status" sortable>

         <span class="tag is-comp">{{ props.row.status.compliance}}</span>

      </b-table-column>


      

      
      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Compliance Information yet. &#x1F4DC;</h4>
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
    
    ...mapGetters('procurement', {
      loading: 'loading',
      pfis: 'allPfis',
    }),
   
   isEmpty() {
     return this.pfis.length === 0
    },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.pfis
    },
  },

  

  methods: {
   

     ...mapActions('procurement', ['getAllPfis','load' ]),


       
    async load(){
      await this.getAllPfis();
    },


   
  }

 

  
}

  
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.is-comp{
  background-color: rgb(255, 217, 168);
 
}
.content-area {
  grid-column: 2/3;
}
</style>
