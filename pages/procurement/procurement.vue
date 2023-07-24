<template>
  <div class="procurement">
   
    <b-tabs  type="is-toggle" expanded>

      <b-tab-item label="Add New Supplier" icon="plus-circle-multiple ">
            <add-supplier></add-supplier>
        </b-tab-item>

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
import AddSupplier from '~/components/forms/add-supplier.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: 'is-admin',
 
 components:{
    AddNewPurchaseOrder,
    ProcurementTable,
    PermitsApplicationTable,
    Calendar,
  AddSupplier,
   
   
},

computed: {
       

        ...mapGetters('procurement', {
            allSupps:'allSuppliers'
             }),

            },

async created(){
  let allSuppliers = await this.getAllSuppliers();
},

methods:{
  ...mapActions("procurement", ["addNewPfi","getAllSuppliers", "load"]),
}
}
</script>

<style>

</style>
