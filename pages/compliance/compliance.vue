<template>
  <div class="compliance">
   
    <b-tabs  type="is-toggle" expanded>
         
         <b-tab-item label="Amended Permits" icon="book">
          <b-tabs vertical position="is-left" type="is-toggle" expanded>
           
            <b-tab-item label="Amended Permits" icon="plus">
              <add-amended-permit></add-amended-permit>
            </b-tab-item>
            <b-tab-item label="Amended Permits" icon="eye">
             <amended-permit-table></amended-permit-table>
            </b-tab-item>
          </b-tabs>
        </b-tab-item>

        <b-tab-item label="Permits" icon="book">
          <b-tabs vertical position="is-left" type="is-toggle" expanded>
            <b-tab-item label="Add Permit" icon="plus">
              <add-permit></add-permit>
            </b-tab-item>
            <b-tab-item label="View Permits" icon="eye">
              <permits-table></permits-table>
            </b-tab-item>
           
          </b-tabs>
        </b-tab-item>

        <b-tab-item label="View Compliance Information" icon="handshake">
            <compliance-table></compliance-table>
        </b-tab-item>
        
    </b-tabs>

  </div>
</template>

<script>
import AddPermit from '../../components/forms/add-permit.vue'
import PermitsTable from '../../components/tables/permits-table.vue'
import ComplianceTable from '../../components/tables/compliance-table.vue'
import AddAmendedPermit from '~/components/forms/add-amended-permit.vue'
import AmendedPermitTable from '~/components/tables/amended-permit-table.vue'
export default {
 components:{
   AddPermit,
   AddAmendedPermit,
    PermitsTable,
    ComplianceTable,
  AmendedPermitTable
 }
}
</script>

<style>

 
</style>
