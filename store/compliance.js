import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 

         SET_LOADING, 
         ADD_AMENDED_PERMIT_APPLICATION,
         SET_ALL_AMENDED_PERMIT_APPLICATIONS,
         GET_ALL_AMENDED_PERMIT_APPLICATIONS,

         ADD_PERMIT_APPLICATION,
         SET_ALL_PERMIT_APPLICATIONS,
         GET_ALL_PERMIT_APPLICATIONS,
         ACKNOWLEDGE_RECEIPT,
         PUT_PA_IN_MOTION,

         ADD_PERMIT,
         SET_ALL_PERMITS,
         GET_ALL_PERMITS,
         SET_SELECTED_PERMIT_APPLICATION,
         


        } from '@/helpers/mutation-types'


export const state = () => ({
    loading: false,

    selectedPA: null,
    //--------------AMENDMENTS TO PERMIT APPLICATIONS------------
    allAmendedPermitApplications:[],
    
    amendmentForm:{
        
        pfiNumber:null,
        reasonForAmendment:null,

              
    },

    //-------------------------------------------------------------



     //--------------PERMIT APPLICATIONS---------------------------
     allPermitApplications:[],
    
    permitApplicationForm:{
        supplierName:null,
        pfiNumber:null,
        selectCurrency:null,
        pfiValue:null,
        exchangeRate:null,
        feeType:null,
        authBody:null,
        permitPaper:null
       
              
    },
     //-------------------------------------------------------------



     //----------------PERMITS--------------------------------------
     allPermits:[],
    
    permitForm:{
        
        pfiNumber:null,
        permitNumber:null,
        supplierName:null

              
    },
     //-------------------------------------------------------------

})


















export const getters = {
    getField,

    loading(state) {
        return state.loading
    },


    //--------------AMENDMENTS TO PERMIT APPLICATIONS------------

    allAmendedPermitApplications(state){
        return state.allAmendedPermitApplications
    },

    //-------------------------------------------------------------






    //--------------PERMIT APPLICATIONS---------------------------
    allPermitApplications(state){
        return state.allPermitApplications
    },

    selectedPA(state) {
        return state.selectedPA
      },
    //-------------------------------------------------------------





    //----------------PERMITS--------------------------------------
    allPermits(state){
        return state.allPermits
    },
    //-------------------------------------------------------------
}










export const mutations = {
    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //--------------AMENDMENTS TO PERMIT APPLICATIONS---------------------------------------------------
    [ADD_AMENDED_PERMIT_APPLICATION](state, newAmendedPermitApplication){
        state.allAmendedPermitApplications.push(newAmendedPermitApplication)
    },
    [SET_ALL_AMENDED_PERMIT_APPLICATIONS](state, payload) {
        state.allAmendedPermitApplications = payload
    },
    [GET_ALL_AMENDED_PERMIT_APPLICATIONS](state, payload){
        state.allAmendedPermitApplications = payload
    },

     //--------------------------------------------------------------------------------------------------



      //--------------PERMIT APPLICATIONS-----------------------------------------------------------------
    [ADD_PERMIT_APPLICATION](state, newPA){
        state.allPermitApplications.push(newPA)
    },
    [SET_ALL_PERMIT_APPLICATIONS](state, payload) {
        state.allPermitApplications = payload
    },
    [GET_ALL_PERMIT_APPLICATIONS](state, payload){
        state.allPermitApplications = payload
    },

    [SET_SELECTED_PERMIT_APPLICATION](state, newPA) {
        state.selectedPA = newPA
      },

    [ACKNOWLEDGE_RECEIPT](state, putResponse) {
        state.selectedPermitApplication = putResponse
        state.selectedPermitApplication.permitStatus = "Acknowledged By Compliance"
    },

    [PUT_PA_IN_MOTION](state, putResponse) {
        state.selectedPermitApplication = putResponse
        state.selectedPermitApplication.permitStatus = "PA in motion, awaiting Finance Approval"
    },

    
     //---------------------------------------------------------------------------------------------------





      //--------------PERMITS------------------------------------------------------------------------------
    [ADD_PERMIT](state, newPermit){
        state.allPermits.push(newPermit)
    },
    [SET_ALL_PERMITS](state, payload) {
        state.allPermits = payload
    },
    [GET_ALL_PERMITS](state, payload){
        state.allPermits = payload
    },

     //-----------------------------------------------------------------------------------------------------



}




export const actions = {

      //-------------------------------------------LOAD ALL RECORDS----------------------------------------------
      async load({ commit }) {
        try {
            commit(SET_LOADING, true)


            
           const amendLoad= await api.get(`/comp/permits/allAmendedPermitApplications`)
           // await dispatch('getInactivePolicies')
        console.log(amendLoad.data)

        const permitApplicationsLoad= await api.get(`/comp/permits/allPermitApplications`)
           // await dispatch('getInactivePolicies')
        console.log(permitApplicationsLoad.data)


        const permitsLoad= await api.get(`/comp/permits/allPermits`)
           // await dispatch('getInactivePolicies')
        console.log(permitsLoad.data)

         //GET ALL PFI RECORDS FROM API
         const {data: allPfis} = await api.get(`/pfis/AllPfis`)

         console.log(allPfis);

         
             commit(SET_ALL_AMENDED_PERMIT_APPLICATIONS, amendLoad.data);

             commit(SET_ALL_PERMIT_APPLICATIONS, permitApplicationsLoad.data);

             commit(SET_ALL_PERMITS, permitsLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },

//-------------------------------------------------------------------------------------------------------------------------------------------











  //------------------------------ACTIONS FOR AMENDMENTS TO PERMIT APPLICATIONS-------------------------------------------------------------

    async getAllAmendedPermitApplications({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allAmendedPermitApplications} = await api.get(`/comp/permits/allAmendedPermitApplications`)


           //GET ALL PFI RECORDS FROM API
           const {data: allPfis} = await api.get(`/pfis/AllPfis`)

           console.log(allPfis);

           console.log(allAmendedPermitApplications);


           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_AMENDED_PERMIT_APPLICATIONS, allAmendedPermitApplications.data);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },

    //ADD NEW AMENDED PERMIT TO ALL AMENDED PERMIT APPLICATIONS
    async addNewAmendedPermitApplication({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const newAmendedPermitApplication = state.amendmentForm;
           
           
            const response = await api.post(`/comp/permits/addNewAmendedPermitApplication`, newAmendedPermitApplication);

            console.log(response.data);

            commit(ADD_AMENDED_PERMIT_APPLICATION, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error("Could not add details. Please try again!");
        }
    },

 //-------------------------------------------------------------------------------------------------------------------------------------------











    //--------------------------------------ACTIONS FOR PERMIT APPLICATIONS-------------------------------------------------------------------
    async getAllPermitApplications({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allPermitApplications} = await api.get(`/comp/permits/allPermitApplications`)

           
           console.log(allPermitApplications);
           console.log(allPermitApplications.data[0]._id);


           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PERMIT_APPLICATIONS, allPermitApplications.data);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },

    //ADD NEW PERMIT APPLCATION TO ALL PERMIT APPLICATIONS
    async addNewPermitApplication({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const newPA = state.permitApplicationForm;
           
           
            const response = await api.post(`/comp/permits/addNewPermitApplication`, newPA);
            console.log(response.data);

            commit(ADD_PERMIT_APPLICATION, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error("Could not add details. Please try again!");
        }
    },
     //---------------------------------------------------------------------------------------------------------------------------------------











    //---------------------------------------ACTIONS FOR PERMITS------------------------------------------------------------------------------
    async getAllPermits({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allPermits} = await api.get(`/comp/permits/allPermits`)

           

           console.log(allPermits);


           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PERMITS, allPermits.data);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },

    //ADD NEW PERMIT TO ALL PERMITS
    async addNewPermit({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const newPermit = state.permitForm;
           
           
            const response = await api.post(`/comp/permits/addNewPermit`, newPermit);

            console.log(response.data);

            commit(ADD_PERMIT, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error("Could not add details. Please try again!");
        }
    },
     //---------------------------------------------------------------------------------------------------------------------------------------
    //--------------------------Acknowledge Receipt-------------------------------------------------------//

     //ACKNOWLEDGE RECEIPT
     async onAcknowledgeReceipt({ state, commit }, newPA) {
        try {
          commit(SET_LOADING, true) 
            const newPA = state.selectedPermitApplication
       //  const newPA = rootGetters['finance/selectedPermitApplication'] 
          console.log(newPA._id)

         const {data: putResponse} = await api.put(`/comp/permits/allPermitApplications/${newPA._id}`, {newPA, permitStatus: "Approved"} )
        
         commit(ACKNOWLEDGE_RECEIPT, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

        //ACKNOWLEDGE RECEIPT
     async putPaInMotion({ state, commit }, newPA) {
        try {
          commit(SET_LOADING, true) 
            const newPA = state.selectedPermitApplication
       //  const newPA = rootGetters['finance/selectedPermitApplication'] 
          console.log(newPA._id)

         const {data: putResponse} = await api.put(`/comp/permits/allPermitApplications/${newPA._id}`, {newPA, permitStatus: "Approved"} )
        
         commit(PUT_PA_IN_MOTION, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      selectPA({ commit }, newPA) {
        try {
            commit(SET_SELECTED_PERMIT_APPLICATION, newPA)
            console.log(newPA._id)
        } catch (error) {
            console.log('Error')
        }
        
      },

}

