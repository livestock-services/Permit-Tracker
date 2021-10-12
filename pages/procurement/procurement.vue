<template>
  <div class="procurement">
   
    <b-tabs  type="is-toggle" expanded>
        <b-tab-item label="Add New Purchase Order" icon="plus is-inverted">
            <add-new-purchase-order></add-new-purchase-order>
        </b-tab-item>
        <b-tab-item label="View PFIs" icon="book">
            <procurement-table></procurement-table>
        </b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
import ProcurementTable from '../../components/tables/procurement-table.vue'
export default {
 components:{
     AddNewPurchaseOrder,
     ProcurementTable
 }
}
</script>

<style>

</style>
AddNewPurchaseOrder