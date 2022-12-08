<template>
  <div class="finance">
   
    <b-tabs vertical position="is-left" type="is-toggle" label="Log Viewer" icon="eye-check" expanded>

  
            <compliance-table></compliance-table>
     
    </b-tabs>

  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import FinanceTable from '~/components/tables/finance-table.vue'
//import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
import ComplianceTable from '../../components/tables/compliance-table.vue'
export default {
  // auth: 'guest',
 components:{
    
  FinanceTable, ComplianceTable
 }
}
  Card
</script>

<style>

</style>
AddNewPurchaseOrder