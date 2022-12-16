<template>
  <div class="procurement">
   
    <b-tabs  type="is-toggle" expanded>
        <b-tab-item label="Add New Purchase Order" icon="plus-circle-multiple ">
            <add-new-purchase-order></add-new-purchase-order>
        </b-tab-item>
        <b-tab-item label="View Permit Pipeline" icon="book-open">
            <procurement-table></procurement-table>
        </b-tab-item>

          <!-- <b-tab-item label="Sample Table" icon="eye-check">
            <sample-table></sample-table>
        </b-tab-item>   -->

        <!-- <b-tab-item label="Reminders" icon="clock-outline">
              <Calendar/>
        </b-tab-item> -->
        
    </b-tabs>

  </div>
</template>

<script>
import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
import ProcurementTable from '../../components/tables/procurement-table.vue'
import PermitsApplicationTable from '~/components/tables/permits-application-table.vue'
import Calendar from '~/components/calendar.vue'
//import SampleTable from '~/components/tables/sample-table.html'

export default {
  middleware: 'is-admin',
 
 components:{
    AddNewPurchaseOrder,
    ProcurementTable,
    PermitsApplicationTable,
    Calendar,
   
   
}
}
</script>

<style>

</style>
