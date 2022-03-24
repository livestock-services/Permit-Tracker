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
      default-sort="pfiNumber"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
    >
       <b-table-column
        v-slot="props"
        field="supplierName"
        label="Supplier"
        searchable
        
      >
       {{ props.row.supplierName }}
       
        <!-- {{ props.row.sumInsured }} -->
      </b-table-column>

     <b-table-column
        v-slot="props"
        field="supplierEmail"
        label="Supplier Email"
        sortable
      >
        {{ props.row.supplierEmail }}
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
        field="purchaseOrderNumber"
        label="Purchase Order Number"
        sortable
      >
        {{ props.row.purchaseOrderNumber }}
      </b-table-column>
      
      

      <b-table-column
        v-slot="props"
        field="date"
        label="Issued Date"
        searchable
      >
        {{ props.row.date }}
      </b-table-column>

       <b-table-column v-slot="props" field="status" label="PFI Status" sortable>

          <span class="tag is-proc">{{ props.row.status.procurement}}</span>

      </b-table-column>

      


      
     <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            >Preview</b-button
          >
        </span>
      </b-table-column>

      
                

      


      <template #empty>
        <h4 class="is-size-4 has-text-centered">No PFIs yet. &#x1F4DA;</h4>
      </template>
    </b-table>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import SupplierSnapshotModal from '@/components/modals/supplier-snapshot-modal.vue'
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

  async created() {
  //  await this.load()
    this.selectPfi(this.pfis[0])
  },

  

  methods: {
   

    ...mapActions('procurement', ['getAllPfis','load', 'selectPfi' ]),

    

    async load(){
      await this.getAllPfis();
    },


    captureReceipt(pfi) {
      this.selectPfi(pfi)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: SupplierSnapshotModal,
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

.is-proc{
 background-color: rgb(78, 159, 252);
 color: aliceblue;
}

.preview{
  background-color: rgb(177, 219, 243);
}

.content-area {
  grid-column: 2/3;
}
</style>
