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
        field="supplierName"
        label="Supplier  "
        sortable
      >
      <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light': props.row.supplierName,
          },

        
      
      
      
      ]">
        {{ props.row.supplierName }} </span>
      </b-table-column>



       <b-table-column
        v-slot="props"
        field="pfiNumber"
        label="PFI No."
        sortable
       
      >
        <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light': props.row.pfiNumber,
          },

        
      
      
      
      ]">    {{ props.row.pfiNumber }}</span>  

      
      
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="coverType"
        label="Permit No."
        sortable
      >

       <span 
      :class="[
      
          'tag',

          {
             'is-info is-light': props.row.purchaseOrderNumber,
          },

        
      
      
      
      ]">  {{ props.row.purchaseOrderNumber }} </span>  

       
      </b-table-column>
      
     
      <b-table-column
        v-slot="props"
        field="date"
        label="Date"
        searchable
      >
      
      
      {{ props.row.date}} 
     
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="status"
        label="Status"
        searchable
      >
      
      
     <span class="tag is-pink"> {{ props.row.status}}  </span>
     
      </b-table-column>



      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Permits yet. &#x1F4DB;. Click the 
          
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
  name: 'UnreceiptedDebitsTable',

  data() {

    
    return {
      status: 'Active',
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
      allPs: 'allPermits',
    }),
    
  //  isEmpty() {
  //    return this.allPs.length === 0
  //   },

    isNames() {
      return this.names
    },
    
    tableData() {
      return this.isEmpty ? [] : this.allPs
    },

  },



  

  methods: {
   

    ...mapActions('compliance', ['getAllPermits','load' ]),

    async load(){
      await this.getAllPermits();
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

.is-pink{
  background-color: rgb(248, 173, 219);
}
</style>
