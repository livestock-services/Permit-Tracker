<template>
  <div class="finance">
   
    <b-tabs vertical position="is-left" type="is-toggle" expanded>

        <b-tab-item label="View Finance Information" icon="finance">
            <finance-table></finance-table>
        </b-tab-item>

        
        
    </b-tabs>

  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import FinanceTable from '~/components/tables/finance-table.vue'
//import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
//import ComplianceTable from '../../components/tables/compliance-table.vue'
export default {
  // auth: 'guest',
 components:{
    
  FinanceTable
 }
}
  Card
</script>

<style>

</style>
AddNewPurchaseOrder