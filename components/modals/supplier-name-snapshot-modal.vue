<template>
    <div class="modal-card ">
      <header class="modal-card-head">
        <h3 class="modal-card-title">Supplier Details</h3>
       
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
                <b-input v-if="this.$auth.user.email === 'procurement@livestock.co.zm' || this.$auth.user.email === 'itsupport@livestock.co.zm'" v-model="supp.supplierName"></b-input>
                
              </p>
             </div>
           </div>
  
           
         </b-form>
  
        
        </div>
      </section>
      <footer class="modal-card-foot">
  
        
  
     
  
  
      
  
  
  
   
      <b-button
          v-if="( this.$auth.user.email === 'procurement@livestock.co.zm' || this.$auth.user.email === 'itsupport@livestock.co.zm')"
          label="Update"
          type="is-info"
          icon-left="account"
          @click="updateSupplier"
        /> 
  
        <b-button
          v-if="( this.$auth.user.email === 'procurement@livestock.co.zm' || this.$auth.user.email === 'itsupport@livestock.co.zm')"
          label="Delete"
          type="is-danger"
          icon-left="delete"
          @click="deleteSupplier"
        /> 
  
        <b-tooltip multilined label="Approve PA" position="is-top" type="is-success is-light" icon-left="money">
       
        
      </b-tooltip>
  
        <b-button label="Close" @click="close" />
       
      </footer>
    </div>
  </template>
  
  <script>
  
  import { mapFields } from 'vuex-map-fields'
  import { mapActions, mapGetters } from 'vuex'
  import {_, cloneDeep } from 'lodash';
  
  export default {
    name: 'OperationModal',
  
     data() {
      return {
        isFullPage: true,
        
       
      }
    },
  
    computed: {
  
            supplierName:{
                get () {
                    return cloneDeep(this.$store.state.supplierForm.supplierName)
                    },
  
                    set (value) {
                  cloneDeep(this.$store.commit('UPDATE_SELECTED_SUPPLIER', value))
               },
               
             },
  
              
  
  
       ...mapGetters('procurement', {
        supp: 'selectedSupplier',
        pfiLoading: 'loading',
        daysElapsed:'daysElapsed',
          daysElapsed1:'daysElapsed1',
        daysElapsed2:'daysElapsed2',
        daysElapsed3:'daysElapsed3',
        daysElapsed4:'daysElapsed4',
      }),
  
      ...mapFields("compliance", [
              "form",
              "form.pfiNumber",
              "form.purchaseOrderNumber"
          ]),
  
      loading() {
        return this.pfiLoading 
      },
  
    },
  
    mounted() {},
  
    
  
    methods: {
  
      ...mapActions('procurement', ['load', 'selectPfi', 'onDeletePFI','onDeleteSupplier']),
        ...mapActions('compliance',['markAsReadyForUse','approvePA', 'receivePermit','receivePermitByProcurement', 'putPaInMotion', 'selectPA', 'onUpdate','onUpdateSupplier'] ),
  
      
        async onMarkAsReadyForUse() {
  
        await this.markAsReadyForUse();
        const msg = await Promise.resolve('Mark As Ready For Use!')
        this.$buefy.toast.open({
        message: msg, // 'Operation successful',
        duration: 5000,
        position: 'is-top',
        type: 'is-info',
        })
        this.$parent.close()
        },
      


      async updateSupplier() {
        await this.onUpdateSupplier();
        const msg = await Promise.resolve('Record Updated!')
        this.$buefy.toast.open({
          message: msg, // 'Operation successful',
          duration: 5000,
          position: 'is-top',
          type: 'is-info',
        })
  
        this.clearForm()
        this.$parent.close()
        
      },
  
      async deleteSupplier() {
        await this.onDeleteSupplier();
        const msg = await Promise.resolve('Record Deleted!')
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
                supplierComment:null,
                pfiNumber: null,
                purchaseOrderNumber:null
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
  