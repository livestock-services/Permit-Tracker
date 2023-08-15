<template>
  <div class="modal-card ">
    <header class="modal-card-head">
      <h3 class="modal-card-title">Permit Snapshot</h3>
     
      <button type="button" class="delete" @click="close"></button>
    </header>
    <section class="modal-card-body has-background-white">
      <!-- Modal Content -->
      <div>
       <b-form v-model="form" class="form">
         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue">  Supplier Name</span></h4>
            <p >
              <span class="tag is-primary is-light">  {{pfi.supplierName}} </span>

              
              
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
             <h4> <span class="is-blue">  Extra Details</span></h4>
            <p >
              <span class="tag is-primary is-light">  {{pfi.supplierComment }} </span>

              <b-input v-if="pfi.status === 'New PFI added, awaiting acknowledgement'" v-model="supplierComment" placeholder="Enter Comments here..."></b-input>
              
            </p>
           </div>
         </div>

       

        <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue">  Purchase Order Number</span></h4>
            <p  placeholder="Supplier Name">
              <span class="tag is-primary is-light">   {{pfi.purchaseOrderNumber}}, created on {{pfi.date}} </span>
            </p>

            <b-input v-if="pfi.status === 'New PFI added, awaiting acknowledgement'" v-model="purchaseOrderNumber" placeholder="Enter PO here..."></b-input>
           </div>
         </div>

        <div class="columns">
           <div class="column is-half">
              <h4> <span class="is-blue">  PFI Number</span></h4>
            <p  placeholder="Supplier Name">
              <span  class="tag is-primary is-light">{{pfi.pfiNumber}}, created on {{pfi.pfiDate}} </span>


            </p>

            <b-input v-if="pfi.status === 'New PFI added, awaiting acknowledgement'" v-model="pfiNumber" placeholder="Enter PFI here..."></b-input>
           </div>
         </div>

         <div>
          <h3> <span class="tag is-success"> Timeline at Each Stage</span></h3>
        </div>



         
         <div v-if="pfi.status === 'New PFI added, awaiting acknowledgement'">


<div  class="columns">
<div  class="column is-half">
    <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
  <p  placeholder="Supplier Name">
  

    <span class="tag is-peach "> {{ daysElapsed }} days</span>
  </p>
</div>
</div>  

<div v-if="pfi.status === 'New PFI added, awaiting acknowledgement'" class="columns">
<div  class="column is-half">
    <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
  <p  placeholder="Supplier Name">
  

    <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
  </p>
</div>
</div>  




</div>



<div v-if="pfi.status === 'Acknowledged By Compliance'">


      <div  class="columns">
      <div  class="column is-half">
          <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
        <p  placeholder="Supplier Name">
        

          <span class="tag is-peach "> {{ daysElapsed }} days</span>
        </p>
      </div>
      </div>  

      <div class="columns">
      <div  class="column is-half">
          <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
        <p  placeholder="Supplier Name">
        

          <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
        </p>
      </div>
      </div>  

      
     

</div>


<div v-if="pfi.status === 'PA in motion, awaiting Finance Approval'">


      <div  class="columns">
      <div  class="column is-half">
          <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
        <p  placeholder="Supplier Name">
        

          <span class="tag is-peach "> {{ daysElapsed }} days</span>
        </p>
      </div>
      </div>  

      <div class="columns">
      <div  class="column is-half">
          <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
        <p  placeholder="Supplier Name">
        

          <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
        </p>
      </div>
      </div>  

      <div  class="columns">
      <div  class="column is-half">
          <h4> <span class="is-blue">  &#128336; between PFI Acknowledgement &#x2192; PA Creation</span></h4>
        <p  placeholder="Supplier Name">
        

          <span class="tag is-peach "> {{ daysElapsed2 }} days</span>
        </p>
      </div>
      </div>  

     

     


</div>



<div v-if="pfi.status === 'PA approved, awaiting Permit'">


        <div  class="columns">
        <div  class="column is-half">
            <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
          <p  placeholder="Supplier Name">
          

            <span class="tag is-peach "> {{ daysElapsed }} days</span>
          </p>
        </div>
        </div>  

        <div  class="columns">
        <div  class="column is-half">
            <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
          <p  placeholder="Supplier Name">
          

            <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
          </p>
        </div>
        </div>  

        <div  class="columns">
        <div  class="column is-half">
            <h4> <span class="is-blue">  &#128336; between PFI Acknowledgement &#x2192; PA Creation</span></h4>
          <p  placeholder="Supplier Name">
          

            <span class="tag is-peach "> {{ daysElapsed2 }} days</span>
          </p>
        </div>
        </div>  

        <div  class="columns">
        <div  class="column is-half">
            <h4> <span class="is-blue">  &#128336; between PA Creation &#x2192; PA Approval</span></h4>
          <p  placeholder="Supplier Name">
          

            <span class="tag is-peach "> {{ daysElapsed3 }} days</span>
          </p>
        </div>
        </div>  



</div>


<div v-if="pfi.status === 'Permit received'" >


          <div  class="columns">
          <div  class="column is-half">
              <h4> <span class="is-blue">  &#128336; between PO &#x2192; PFI</span></h4>
            <p  placeholder="Supplier Name">
            

              <span class="tag is-peach "> {{ daysElapsed }} days</span>
            </p>
          </div>
          </div>  

          <div  class="columns">
          <div  class="column is-half">
              <h4> <span class="is-blue">  &#128336; between PFI Creation &#x2192; PFI Acknowledgement</span></h4>
            <p  placeholder="Supplier Name">
            

              <span class="tag is-peach "> {{ daysElapsed }} days</span>
            </p>
          </div>
          </div>  

          <div  class="columns">
          <div  class="column is-half">
              <h4> <span class="is-blue">  &#128336; between PFI Acknowledgement &#x2192; PA Creation</span></h4>
            <p  placeholder="Supplier Name">
            

              <span class="tag is-peach "> {{ daysElapsed1 }} days</span>
            </p>
          </div>
          </div>  

          <div  class="columns">
          <div  class="column is-half">
              <h4> <span class="is-blue">  &#128336; between PA Creation &#x2192; PA Approval</span></h4>
            <p  placeholder="Supplier Name">
            

              <span class="tag is-peach "> {{ daysElapsed2 }} days</span>
            </p>
          </div>
          </div>  

          <div  class="columns">
          <div  class="column is-half">
              <h4> <span class="is-blue">  &#128336; between PA Approval &#x2192; Permit Receipt</span></h4>
            <p  placeholder="Supplier Name">
            

              <span class="tag is-peach "> {{ daysElapsed3 }} days</span>
            </p>
          </div>
          </div>  


          <div class="columns">
          <div  class="column is-half">
              <h4> <span class="is-blue">  &#128336; from Start &#x2192; Finish </span></h4>
            <p  placeholder="Supplier Name">
            

              <span class="tag is-peach "> {{ daysElapsed4 }} days</span>
            </p>
          </div>
        </div>  


</div>



         <div class="columns">
             <div  class="column is-half">
                <h4> <span class="is-blue"> Status Log  </span></h4>
              <p  placeholder="Supplier Name">
                <span class="tag is-warning is-light">New PFI added, awaiting acknowledgement:  {{pfi.stageOneDate}} </span>
                <span class="tag is-success is-light">Acknowledged By Compliance:  {{pfi.stageTwoDate}} </span>
                <span class="tag is-warning">PA in motion, awaiting Finance Approval:  {{pfi.stageThreeDate}} </span>
                <span class="tag is-success">PA approved, awaiting Permit:  {{pfi.stageFourDate}} </span>
                <span class="tag is-primary">Permit received:  {{pfi.stageFiveDate}} </span>
              </p>
             </div>
           </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Current Status was updated on this date </span></h4>
            <p  placeholder="Supplier Name">
              <span class="tag is-primary is-light"> {{pfi.date}} </span>
            </p>
           </div>
         </div>

         <div class="columns">
           <div  class="column is-half">
              <h4> <span class="is-blue"> Current Status</span></h4>
            <p  placeholder="Current Status">
              <span :class="[
                
                'tag',
                {
                    'is-warning is-light': pfi.status ===  'New PFI added, awaiting acknowledgement',
                  },
                  {
                    'is-success is-light': pfi.status === 'Acknowledged By Compliance',
                  },

                  {
                    'is-pink': pfi.status === `Permit received`,
                  },
                  

              ]"
              > {{pfi.status}} </span>
            </p>
           </div>
         </div>

       </b-form>

       <pre v-if="this.$auth.user.email === 'procurement@livestock.co.zm' || this.$auth.user.email === 'itsupport@livestock.co.zm'">
       Updated PFI Number: {{ pfiNumber }}
       </pre>

      </div>
    </section>
    <footer class="modal-card-foot">

      <b-tooltip label="Approve PA" position="is-top" type="is-success is-light" icon-left="money">
     <b-button
        v-model="approvePA"
        v-if="pfi.status ==='PA in motion, awaiting Finance Approval' &&
          this.$auth.user.email === 'procurement@livestock.co.zm'"
        type="is-success"
        icon-left="cash"
        label="Approve Permit Application"
        @click="onApprovePA"
      />
      
    </b-tooltip>

    

      <b-tooltip label="Approve PA" position="is-top" type="is-success is-light" icon-left="money">
     <b-button
        v-model="approvePA"
        v-if="pfi.status ==='Permit received' &&
          this.$auth.user.email === 'procurement@livestock.co.zm'"
        type="is-primary"
        icon-left="cash"
        label="Acknowledge Permit"
        @click="onReceivePermitByProcurement"
      />
      
    </b-tooltip>


    <b-tooltip label="Approve PA" position="is-top" type="is-success is-light" icon-left="money">
     <b-button
        v-model="approvePA"
        v-if="pfi.status ==='PA in motion, awaiting Finance Approval' &&
          this.$auth.user.email === 'itsupport@livestock.co.zm'"
        type="is-success"
        icon-left="cash"
        label="Approve Permit Application"
        @click="onApprovePA"
      />
      
    </b-tooltip>

    <b-button
        v-if="pfi.status === 'New PFI added, awaiting acknowledgement'"
        label="Update"
        type="is-info"
        icon-left="account"
        @click="onUpdatePfi"
      /> 

      <b-button
        v-if="pfi.status === 'New PFI added, awaiting acknowledgement'"
        label="Delete"
        type="is-danger"
        icon-left="delete"
        @click="onDeletePfi"
      /> 

      <b-tooltip label="Approve PA" position="is-top" type="is-success is-light" icon-left="money">
     <b-button
        v-model="approvePA"
        v-if="pfi.status ==='Permit received' &&
          this.$auth.user.email === 'itsupport@livestock.co.zm'"
        type="is-primary"
        icon-left="cash"
        label="Acknowledge Permit"
        @click="onReceivePermitByProcurement"
      />
      
    </b-tooltip>

      <b-button label="Close" @click="close" />
     
    </footer>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'OperationModal',

   data() {
    return {
      isFullPage: true,
      form: {
        supplierName: null,
        supplierEmail: null,
        purchaseOrderNumber: null,
        pfiNumber: null,
        
      },
     
    }
  },

  computed: {
     ...mapGetters('procurement', {
      pfi: 'selectedPfi',
      pfiLoading: 'loading',
      daysElapsed:'daysElapsed',
        daysElapsed1:'daysElapsed1',
      daysElapsed2:'daysElapsed2',
      daysElapsed3:'daysElapsed3',
      daysElapsed4:'daysElapsed4',
    }),

    ...mapFields("compliance", [
            "form",
            "form.supplierComment",
            "form.pfiNumber",
            "form.purchaseOrderNumber"
        ]),

    loading() {
      return this.pfiLoading 
    },

  },

  mounted() {},

  

  methods: {

    ...mapActions('procurement', ['load', 'selectPfi', 'onDeletePFI']),
      ...mapActions('compliance',['acknowledgePfi','approvePA', 'receivePermit','receivePermitByProcurement', 'putPaInMotion', 'selectPA', 'onUpdate'] ),

    async onUpdatePfi() {
      await this.onUpdate();
      const msg = await Promise.resolve('PFI Added!')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
      })

      this.clearForm()
      this.$parent.close()
      
    },

    async onDeletePfi() {
      await this.onDeletePFI();
      const msg = await Promise.resolve('PFI Deleted!')
      this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-danger',
      })

      this.clearForm()
      this.$parent.close()
      
    },

    async onReceivePermitByProcurement() {

await this.receivePermitByProcurement();
const msg = await Promise.resolve('Permit received Successfully!')
this.$buefy.toast.open({
message: msg, // 'Operation successful',
duration: 2000,
position: 'is-bottom',
type: 'is-success',
})
this.$parent.close()

},


    async onApprovePA(){
      await this.approvePA();
    const msg = await Promise.resolve('Permit Application has been approved by Finance.')
    this.$buefy.toast.open({
    message: msg, // 'Operation successful',
    duration: 5000,
    position: 'is-top',
    type: 'is-success is-light',
    })
    this.$parent.close()
    },

    close() {
      this.$buefy.toast.open({
        message: 'Supplier Snapshot closed.',
        duration: 2000,
        position: 'is-top',
        type: 'is-warning ',
      })
      this.$parent.close()
    },

    clearForm() {
            this.form = {
              // supplierComment:null,
              //   pfiNumber: null,
            };
            //this.reloadPage()
        },
  },
}
</script>

<style scoped>
.modal-width-auto {
  width: auto;
}

.is-pink{
  background-color: rgb(248, 173, 219);
}

.is-blue{
  color: rgb(0, 118, 228);
font-family:'Times New Roman', Times, serif;
  font-size: 1.2rem;
  
}

p{
  font-size: 1.5rem;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
