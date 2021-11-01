import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import {    ADD_PERMIT_APPLICATION,
            SET_ALL_PERMIT_APPLICATIONS,
            GET_ALL_PERMIT_APPLICATIONS,
            SET_LOADING,
            SET_SELECTED_PERMIT_APPLICATION,
            APPROVE_PERMIT_APPLICATION
        } from '@/helpers/mutation-types'

export const state = () => ({
    loading: false,

    allPermitApplications:[],

    permitApplicationForm:{
        
        pfiNumber:null,
        authBody: null,
        permitApplicationAmount:null,

              
    },
     //----------

    selectedPermitApplication: null,
})

export const getters = {
    getField,

    loading(state) {
        return state.loading
    },
    selectedPermitApplication(state) {
        return state.selectedPermitApplication
      },

    //--------------PERMIT APPLICATIONS---------------------------
    allPermitApplications(state){
        return state.allPermitApplications
    },
    //-------------------------------------------------------------

}

export const mutations = {
    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  


     //--------------PERMIT APPLICATIONS-----------------------------------------------------------------
     [ADD_PERMIT_APPLICATION](state, newPermitApplication){
        state.allPermitApplications.push(newPermitApplication)
    },
    [SET_ALL_PERMIT_APPLICATIONS](state, payload) {
        state.allPermitApplications = payload
    },
    [GET_ALL_PERMIT_APPLICATIONS](state, payload){
        state.allPermitApplications = payload
    },

     //---------------------------------------------------------------------------------------------------
    

    [SET_SELECTED_PERMIT_APPLICATION](state, newPermitApplication) {
        state.selectedPermitApplication = newPermitApplication 
      },

      
    [APPROVE_PERMIT_APPLICATION](state, putResponse) {
     state.selectedPermitApplication = putResponse

     }
    
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
            this.$log.error(error.message)
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
            this.$log.error(error.message)
        }
    },

     

      //APPROVE A PERMIT APPLCATION
    async approvePermitApplication({ state, commit }, newPA) {
        try {
          commit(SET_LOADING, true) 
            const newPA = state.selectedPermitApplication
       //  const newPA = rootGetters['finance/selectedPermitApplication'] 
          console.log(newPA._id)

         const {data: putResponse} = await api.put(`/comp/permits/allPermitApplications/${newPA._id}`, {newPA, permitStatus: "Approved"} )
        
         commit(APPROVE_PERMIT_APPLICATION, putResponse)

          console.log(putResponse.data);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
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
            this.log.error(error.message);
        }
    },


      selectPermitApplication ({ commit }, newPA) {
        try {
            
            commit(SET_SELECTED_PERMIT_APPLICATION, newPA)
            console.log(newPA._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
    
      
    
    
}

