<template>
  <div class="procurement">
   
    <b-tabs  type="is-toggle" expanded>

      <b-tab-item label="View Permit Pipeline" icon="book-open">
            <procurement-table></procurement-table>
        </b-tab-item>

     

        <b-tab-item label="Add New Purchase Order" icon="plus-circle-multiple ">
          <div class="buttons">
            <b-button type="is-info" icon-left="refresh" @click="load"
              >Refresh</b-button
            >
          </div>
            <add-new-purchase-order></add-new-purchase-order>
        </b-tab-item>


        <b-tab-item label="Suppliers" icon="truck ">
            <b-tabs>
              <b-tab-item label="Add New Supplier" icon="plus-circle">
                <add-supplier></add-supplier>
            
              </b-tab-item>

              <b-tab-item label="All Suppliers" icon="account">
                
            <supplier-table ></supplier-table>
              </b-tab-item>
            </b-tabs>
        </b-tab-item>

        <b-tab-item label="View Permits" icon="eye-check-outline">
              <permits-table></permits-table>
            </b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
import AddNewPurchaseOrder from '../../components/forms/add-new-purchase-order.vue'
import ProcurementTable from '../../components/tables/procurement-table.vue'
import PermitsApplicationTable from '~/components/tables/permits-application-table.vue'
import PermitsTable from '../../components/tables/permits-table.vue'
import Calendar from '~/components/calendar.vue'
import AddSupplier from '~/components/forms/add-supplier.vue'
import { mapActions, mapGetters } from 'vuex'
import SupplierTable from '~/components/tables/supplier-table.vue'

export default {
  middleware: 'is-admin',
 
 components:{
    AddNewPurchaseOrder,
    ProcurementTable,
    PermitsTable,
    PermitsApplicationTable,
    Calendar,
  AddSupplier,
  SupplierTable,
   
   
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

  async load() {
      await this.getAllSuppliers();
    },

}
}
</script>

<style>

</style>
