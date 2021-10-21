<template>
  <div class="compliance">
   
    <b-tabs  type="is-toggle" expanded>
         
         <b-tab-item label="Amended Permits" icon="book-edit">
          <b-tabs vertical position="is-left" type="is-toggle" expanded>
           
            <b-tab-item label="Amended Permits" icon="plus-circle-multiple">
              <add-amended-permit></add-amended-permit>
            </b-tab-item>
            <b-tab-item label="Amended Permits" icon="eye-check">
             <amended-permit-table></amended-permit-table>
            </b-tab-item>
          </b-tabs>
        </b-tab-item>

        <b-tab-item label="Permits" icon="book-open-page-variant">
          <b-tabs vertical position="is-left" type="is-toggle" expanded>

            <b-tab-item label="Add Permit Application" icon="plus-box">
              <add-permit-application></add-permit-application>
            </b-tab-item>

             <b-tab-item label="View Permit Applications" icon="eye-check">
              <permits-application-table></permits-application-table>
            </b-tab-item>

            <b-tab-item label="Add Permit " icon="plus-box-multiple">
              <add-permit></add-permit>
            </b-tab-item>
  

            <b-tab-item label="View Permits" icon="eye-check-outline">
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
import AddAmendedPermit from '~/components/forms/add-amended-permit-application.vue'
import AmendedPermitTable from '~/components/tables/amended-permit-table.vue'
import AddPermitApplication from '~/components/forms/add-permit-application.vue'
import PermitsApplicationTable from '~/components/tables/permits-application-table.vue'
export default {
 components:{
   AddPermit,
   AddAmendedPermit,
    PermitsTable,
    PermitsApplicationTable,
    ComplianceTable,
  AmendedPermitTable,
  AddPermitApplication
 }
}
</script>

<style>

 
</style>,
  PermitsApplicationTable
