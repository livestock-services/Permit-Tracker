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
    

    [SET_SELECTED_PERMIT_APPLICATION](state, PA) {
        state.selectedPermitApplication = PA
      },

      
  [APPROVE_PERMIT_APPLICATION](state) {
    state.selectedPermitApplication.permitStatus = 'Approved'

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


    async approvePermitApplication({ commit, state }) {
        try {
          commit(SET_LOADING, true)

          commit(APPROVE_PERMIT_APPLICATION)
         const {data: putResponse} = await api.put(`/comp/permits/allPermitApplications/${state.selectedPermitApplication.id}`, state.selectedPermitApplication)

         console.log(putResponse);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },
    
      
    
    
}

