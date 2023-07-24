import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_PFI,
        ADD_NEW_SUPPLIER,
        GET_ALL_SUPPLIERS,

        ADD_NEW_SUPPLIERS_TO_LIST,
        REMOVE_ALL_SUPPLIERS_FROM_LIST,


         SET_ALL_PFIS, 
         GET_ALL_PFIS, 
         SET_LOADING,
         SET_SELECTED_PFI ,

         SET_SELECTED_NEW_PFI_AWAITING_ACKNOWLEDGMENT,
         SET_ALL_PFIS_AWAITING_ACKNOWLEDGEMENT,
         GET_ALL_PFIS_AWAITING_ACKNOWLEDGEMENT,

         SET_SELECTED_PFI_ACKNOWLEDGED_BY_COMPLIANCE,
         SET_ALL_PFIS_ACKNOWLEDGED_BY_COMPLIANCE,
         GET_ALL_PFIS_ACKNOWLEDGED_BY_COMPLIANCE,

         SET_SELECTED_PA_IN_MOTION_AWAITING_FINANCE_APPROVAL,
         SET_ALL_PAs_IN_MOTION_AWAITING_FINANCE_APPROVAL,
         GET_ALL_PAs_IN_MOTION_AWAITING_FINANCE_APPROVAL,

         SET_SELECTED_PA_APPROVED_AWAITING_PERMIT,
         SET_ALL_PAs_APPROVED_AWAITING_PERMIT,
         GET_ALL_PAs_APPROVED_AWAITING_PERMIT,

         SET_SELECTED_PERMIT_RECEIVED,
         SET_ALL_PERMITS_RECEIVED,
         GET_ALL_PERMITS_RECEIVED


        } from '@/helpers/mutation-types'

export const state = () => ({
    loading: false,
    all:[],
    allSuppliers:[],
    allNewPfisAwaitingAcknowledgement:[],
    allPfisAcknowledgedByCompliance:[],
    allPAsInMotionAwaitingFinanceApproval:[],
    allPAsApprovedAwaitingPermit:[],
    allPermitsReceived:[],

    selectedPfiAwaitingAcknowledgement:null,
    selectedPfiAcknowledgedByCompliance:null,
    selectedPaInMotionAwaitingFinanceApproval:null,
    selectedPaApprovedAwaitingPermit:null,
    selectedPermitReceived:null,

    selectedPfi: null,

    form:{
        supplierName:null,
        supplierEmail:null,
        purchaseOrderNumber:null,
        pfiNumber:null,
      
        
    },

    supplierForm:{
        supplierName:null
    }

    
})

export const getters = {
     getField,

    loading(state) {
        return state.loading
    },
    selectedPfi(state) {
        return state.selectedPfi
      },

    allPfis(state){
        return state.all
    },

    allSuppliers(state){
        return state.allSuppliers
    },

    allNewPfisAwaitingAcknowledgement(state){
        return state.allNewPfisAwaitingAcknowledgement
    },

    allPfisAcknowledgedByCompliance(state){
        return state.allPfisAcknowledgedByCompliance
    },

    allPAsInMotionAwaitingFinanceApproval(state){
        return state.allPAsInMotionAwaitingFinanceApproval
    },

    allPAsApprovedAwaitingPermit(state){
        return state.allPAsApprovedAwaitingPermit
    },

    allPermitsReceived(state){
        return state.allPermitsReceived
    },





      selectedPfiAwaitingAcknowledgement(state) {
        return state.selectedPfiAwaitingAcknowledgement
      },

      selectedPfiAcknowledgedByCompliance(state) {
        return state.selectedPfiAcknowledgedByCompliance
      },


      selectedPfiAwaitingAcknowledgement(state) {
        return state.selectedPfiAwaitingAcknowledgement
      },


      selectedPaInMotionAwaitingFinanceApproval(state) {
        return state.selectedPaInMotionAwaitingFinanceApproval
      },


      selectedPaApprovedAwaitingPermit(state) {
        return state.selectedPaApprovedAwaitingPermit
      },

      selectedPermitReceived(state) {
        return state.selectedPermitReceived
      },


   

}

export const mutations = {
    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING PFIs
    [ADD_PFI](state, pfi){
        state.all.push(pfi)
    },

    [ADD_NEW_SUPPLIER](state, supplier){
        state.allSuppliers.push(supplier)
    },

    [SET_SELECTED_PFI](state, pfi) {
        state.selectedPfi = pfi
      },
    [GET_ALL_PFIS](state, payload) {
        state.all = payload
    },
    [GET_ALL_SUPPLIERS](state, payload){
        state.allSuppliers = payload
    },

    [ADD_NEW_SUPPLIERS_TO_LIST](state, payload){
        state.allSuppliers.push(payload)
    },

    [REMOVE_ALL_SUPPLIERS_FROM_LIST](state, payload){
        state.allSuppliers = payload
    },

  
    

    [SET_SELECTED_NEW_PFI_AWAITING_ACKNOWLEDGMENT](state, pfi) {
        state.selectedPfiAwaitingAcknowledgement = pfi
      },
    [SET_ALL_PFIS_AWAITING_ACKNOWLEDGEMENT](state, payload) {
        state.allNewPfisAwaitingAcknowledgement = payload
    },
    [GET_ALL_PFIS_AWAITING_ACKNOWLEDGEMENT](state, payload){
        state.allNewPfisAwaitingAcknowledgement = payload
    },


    [SET_SELECTED_PFI_ACKNOWLEDGED_BY_COMPLIANCE](state, pfi) {
        state.selectedPfiAcknowledgedByCompliance = pfi
      },
    [SET_ALL_PFIS_ACKNOWLEDGED_BY_COMPLIANCE](state, payload) {
        state.allPfisAcknowledgedByCompliance = payload
    },
    [GET_ALL_PFIS_ACKNOWLEDGED_BY_COMPLIANCE](state, payload){
        state.allPfisAcknowledgedByCompliance = payload
    },



    [SET_SELECTED_PA_IN_MOTION_AWAITING_FINANCE_APPROVAL](state, pfi) {
        state.selectedPaInMotionAwaitingFinanceApproval = pfi
      },
    [SET_ALL_PAs_IN_MOTION_AWAITING_FINANCE_APPROVAL](state, payload) {
        state.allPAsInMotionAwaitingFinanceApproval = payload
    },
    [GET_ALL_PAs_IN_MOTION_AWAITING_FINANCE_APPROVAL](state, payload){
        state.allPAsInMotionAwaitingFinanceApproval = payload
    },


    [SET_SELECTED_PA_APPROVED_AWAITING_PERMIT](state, pfi) {
        state.selectedPaApprovedAwaitingPermit = pfi
      },
    [SET_ALL_PAs_APPROVED_AWAITING_PERMIT](state, payload) {
        state.allPAsApprovedAwaitingPermit = payload
    },
    [GET_ALL_PAs_APPROVED_AWAITING_PERMIT](state, payload){
        state.allPAsApprovedAwaitingPermit = payload
    },


    [SET_SELECTED_PERMIT_RECEIVED](state, pfi) {
        state.selectedPermitReceived = pfi
      },
    [SET_ALL_PERMITS_RECEIVED](state, payload) {
        state.allPermitsReceived = payload
    },
    [GET_ALL_PERMITS_RECEIVED](state, payload){
        state.allPermitsReceived = payload
    },




    
}

export const actions = {

    //LOAD ALL PFIS UPON REFRESH
    async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/api/pfis/AllPfis`)
           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_PFIS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },


    async getAllSuppliers({ state, commit,_,rootGetters }) {
        try {
            commit(SET_LOADING, true)

            const {data: response} = await api.get(`/pfis/allSuppliers`)

            const allSupps = response.data;


            console.log(allSupps.length);


          


            let filteredSuppliersList = ["Your Suppliers List:"];

        
 
            for(let i =0; i < allSupps.length; i++){

            console.log(allSupps.length)

            let suppliersList =  rootGetters['procurement/allSuppliers']
            console.log(suppliersList);
            
            commit(REMOVE_ALL_SUPPLIERS_FROM_LIST, filteredSuppliersList);
         

          //  console.log(filteredCattle[i].purchasedEarTagID); 

            
            commit(ADD_NEW_SUPPLIERS_TO_LIST, allSupps[i].supplierName);

            console.log(allSupps[i]);


            }
           
 
          console.log(filteredSuppliersList);
          
          

           // await dispatch('getInactivePolicies')
        console.log(allSupps.data)
             commit(GET_ALL_SUPPLIERS, allSupps.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },


 //GET ALL PFIS
    async getAllPfis({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allPfis} = await api.get(`/pfis/AllPfis`)

           

           const {data: allAmendedPermitApplications} = await api.get(`/comp/permits/allAmendedPermitApplications`)

           const pfiLength = allPfis.data.length;

         console.log(pfiLength);

      

        //  const filteredPFIs = allPfis.data.filter(fp =>
        //     fp)
         
           //--------FILTER TO GET DATA BASED ON LOGGED IN USER -----------------//
         const filteredPfiAwaitingAcknowledgement = allPfis.data.filter( ap => 
          ap.status ==='New PFI added, awaiting acknowledgement'
         );

         const filteredPfiAcknowledgedByCompliance = allPfis.data.filter( bp => 
            bp.status ==='Acknowledged By Compliance'
           );

           
           const filteredPaInMotionAwaitingFinanceApproval = allPfis.data.filter( cp => 
            cp.status ==='PA in motion, awaiting Finance Approval'
           );

           
           const filteredPaApprovedAwaitingPermit = allPfis.data.filter( dp => 
            dp.status ==='PA approved, awaiting Permit'
           );

           const filteredPermitReceived = allPfis.data.filter( ep => 
            ep.status ==='Permit received'
           );
  


         console.log(filteredPfiAwaitingAcknowledgement.length);

         console.log(filteredPfiAcknowledgedByCompliance.length);

         console.log(filteredPaInMotionAwaitingFinanceApproval.length);

         console.log(filteredPaApprovedAwaitingPermit.length);

         console.log(filteredPermitReceived.length);


          

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PFIS, allPfis.data);

           commit(GET_ALL_PFIS_AWAITING_ACKNOWLEDGEMENT, filteredPfiAwaitingAcknowledgement);

           commit(GET_ALL_PFIS_ACKNOWLEDGED_BY_COMPLIANCE, filteredPfiAcknowledgedByCompliance);

           commit(GET_ALL_PAs_IN_MOTION_AWAITING_FINANCE_APPROVAL, filteredPaInMotionAwaitingFinanceApproval);
            
           commit(GET_ALL_PAs_APPROVED_AWAITING_PERMIT, filteredPaApprovedAwaitingPermit);

           commit(GET_ALL_PERMITS_RECEIVED, filteredPermitReceived);
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },

    //ADD NEW PFI TO ALL PFIs
    async addNewPfi({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const pfi = state.form;

          
           
            console.log(pfi.date)
            
            const response = await api.post(`/pfis/addNewPfi`, pfi);

         //   console.log(response.data);

            commit(ADD_PFI, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error("Could not add details. Please try again!");
        }
    },

     //ADD NEW PFI TO ALL PFIs
     async addNewSupplier({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const supplier = state.supplierForm;

          
           
            console.log(supplier.supplierName)
            
            const response = await api.post(`/pfis/addNewSupplier`, supplier);

            console.log(response.data);

            commit(ADD_NEW_SUPPLIER, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error("Could not add details. Please try again!");
        }
    },

    

    selectPfi({ commit }, pfi) {
        try {
            commit(SET_SELECTED_PFI, pfi)
            console.log(pfi._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
}

