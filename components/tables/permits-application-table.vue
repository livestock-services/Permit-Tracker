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
      class="table"
      default-sort="policyNumber"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
    >
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
        field="clientID"
        label="PFI No."
        sortable
      >

         {{ props.row.pfiNumber }}   

       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="clientID"
        label="Currency"
        sortable
      >

       <span 
      :class="[
      
          'tag',

          {
             'is-success is-light': props.row.selectCurrency,
          },

        
      
      
      
      ]">     {{ props.row.selectCurrency }} </span>  

      
      </b-table-column>

       <b-table-column
        v-slot="props"
        field="authBody"
        label="PFI Value"
        sortable
       
      >
        <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light': props.row.pfiValue,
          },

        
      
      
      
      ]">    {{ (props.row.pfiValue) }}</span>  

      
      
      </b-table-column>
<!-- 
      <b-table-column
        v-slot="props"
        field="authBody"
        label="Ex. Rate"
        sortable
      >

        <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light':props.row.exchangeRate,
          },

        
      
      
      
      ]">  {{ (props.row.exchangeRate) }} </span>  
       
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="authBody"
        label="Local Currency (ZMW)"
        sortable
      >

       <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light':props.row.localCurrency,
          },

        
      
      
      
      ]">   {{ (props.row.localCurrency) }} </span>  


      </b-table-column> -->

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
             'is-info is-light': props.row.marketAuthFee,
          },

        
      
      
      
      ]">{{ (props.row.marketAuthFee) }}</span>  
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
             'is-danger is-light': props.row.marketNonAuthFee,
          },

        
      
      
      
      ]">{{ (props.row.marketNonAuthFee) }}</span>  

        
      </b-table-column>
      

      <b-table-column
        v-slot="props"
        field="authBody"
        label="Auth Body"
        sortable
      >
      <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light': props.row.authBody,
          },

        
      
      
      
      ]"> {{ props.row.authBody }} </span>  
       
      </b-table-column>
      

       <!-- <b-table-column
        v-slot="props"
        field="date"
        label="Date"
        searchable
      >
      
      
      {{ props.row.date}} 
     
      </b-table-column> -->


      <!-- <b-table-column
        v-slot="props"
        field="permitApplicationAmount"
        label="Permit Paper "
        sortable
      >

      <span 
      :class="[
      
          'tag',

          {
             'is-primary is-light': (props.row.permitPaper).toFixed(2),
          },

        
      
      
      
      ]"> {{ (props.row.permitPaper).toFixed(2) }} </span>  

       
      </b-table-column> -->

     
    


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
              'is-success': props.row.permitStatus ===  'PA Approved, awaiting Permit from ZAMRA',
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
         
          <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview"
            >View More</b-button
          >
        </span>
      </b-table-column>
      
    
     


      <template #empty>
        <h4 class="is-size-4 has-text-centered">No Permit Applications yet. &#x1F4DB;. Click the 
           <span
          :class="[
            'tag',
            {
              'is-success': 'Refresh',
            }
            
          ]"
          >
          
          Refresh</span> button above to load your data.</h4>
      </template>
    </b-table>
  </div>

  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import PASnapshotModal from '../modals/PA-snapshot-modal.vue'


        

export default {
  name: 'PermitApplicationsTable',
 
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
   

    ...mapActions('compliance', ['getAllPermitApplications','load', 'selectPA' ]),

    async load(){
      await this.getAllPermitApplications();
    },

    captureReceipt(allPA) {
      this.selectPA(allPA)
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: PASnapshotModal,
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

.table{
  margin-right: 12rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 8rem;
}
</style>
