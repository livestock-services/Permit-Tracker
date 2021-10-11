<template>
  <div class="procurement">
   
    <b-tabs type="is-toggle" expanded>
        <b-tab-item label="Add New Purchase Order" icon="plus">
            <add-new-purchase-order></add-new-purchase-order>
        </b-tab-item>
        <b-tab-item label="View Purchase Orders" icon="book"></b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
export default {
 components:{
     AddNewPurchaseOrder
 }
}
</script>

<style>

</style>
AddNewPurchaseOrder