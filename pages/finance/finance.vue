<template>
  <div class="finance">
   
    <b-tabs vertical position="is-left" type="is-toggle" expanded>
         <b-tab-item label="Add Finance Information" icon="plus is-inverted">
           
        </b-tab-item>

        <b-tab-item label="View Finance Information" icon="finance">
            <finance-table></finance-table>
        </b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
import FinanceTable from '~/components/tables/finance-table.vue'
//import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
//import ComplianceTable from '../../components/tables/compliance-table.vue'
export default {
 components:{
    
  FinanceTable
 }
}
</script>

<style>

</style>
AddNewPurchaseOrder