<template>
  <div class="compliance">
   
    <b-tabs type="is-toggle" expanded>
         <b-tab-item label="Add Compliance Information" icon="plus is-inverted">
            <add-new-purchase-order></add-new-purchase-order>
        </b-tab-item>

        <b-tab-item label="View Compliance Information" icon="handshake">
            <compliance-table></compliance-table>
        </b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
//import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
import ComplianceTable from '../../components/tables/compliance-table.vue'
export default {
 components:{
    
     ComplianceTable
 }
}
</script>

<style>

</style>
AddNewPurchaseOrder