<template>
  <div class="procurement">
   
    <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Add New Purchase Order" icon="plus is-inverted">
            <add-new-purchase-order></add-new-purchase-order>
        </b-tab-item>
        <b-tab-item label="View Purchase Orders" icon="book">
            <purchase-order-table></purchase-order-table>
        </b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
import PurchaseOrderTable from '../../components/tables/purchase-order-table.vue'
export default {
 components:{
     AddNewPurchaseOrder,
     PurchaseOrderTable
 }
}
</script>

<style>

</style>
AddNewPurchaseOrder