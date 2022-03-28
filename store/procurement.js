import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_PFI,
         SET_ALL_PFIS, 
         GET_ALL_PFIS, 
         SET_LOADING,
         SET_SELECTED_PFI 
        } from '@/helpers/mutation-types'

export const state = () => ({
    loading: false,
    all:[],
    selectedPfi: null,
    form:{
        supplierName:null,
        supplierEmail:null,
        purchaseOrderNumber:null,
        pfiNumber:null
        
        
    },

    
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

    [SET_SELECTED_PFI](state, pfi) {
        state.selectedPfi = pfi
      },
    [SET_ALL_PFIS](state, payload) {
        state.all = payload
    },
    [GET_ALL_PFIS](state, payload){
        state.all = payload
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
 //GET ALL PFIS
    async getAllPfis({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allPfis} = await api.get(`/pfis/AllPfis`)

           const {data: allAmendedPermitApplications} = await api.get(`/comp/permits/allAmendedPermitApplications`)


           console.log(allPfis);
           console.log(allAmendedPermitApplications);
           
           console.log(allPfis.data[0].status.compliance);

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PFIS, allPfis.data);
            
           
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
           
           
            const response = await api.post(`/pfis/addNewPfi`, pfi);

         //   console.log(response.data);

            commit(ADD_PFI, response.data);
            
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

