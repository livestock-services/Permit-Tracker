import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_PFI,
         SET_ALL_PFIS, 
         GET_ALL_PFIS, 
         SET_LOADING 
        } from '@/helpers/mutation-types'

export const state = () => ({
    loading: false,
    all:[],
    
    form:{
        purchaseOrderNumber:null,
        pfiNumber:null,
        supplierName:null,
        supplierEmail:null
    },

    individualOptions: {
       
        supplierNames:['Bayer Group', 'Virbac', 'Voemir', 'Zoer'],
        
        
    },
})

export const getters = {
     getField,

    loading(state) {
        return state.loading
    },

    allPfis(state){
        return state.all
    },

    individualOptions(state) {
        return state.individualOptions
    },

}

export const mutations = {
    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING PFIs
    [ADD_PFI](state, newPfi){
        state.all.push(newPfi)
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
           const newLoad= await api.get(`/pfis/AllPfis`)
           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_PFIS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL PFIS
    async getAllPfis({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const allPfis = await api.get(`/pfis/AllPfis`)
           
           console.log(allPfis.data);

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PFIS, allPfis.data);

           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW PFI TO ALL PFIs
    async addNewPfi({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const newPfi = cloneDeep(state.form);
            newPfi.createdBy = this.$auth.user.toString()
            newPfi.authorisedBy = this.$auth.user.toString()
            newPfi.issuedDate = new Date();
          
            date = `${issuedDate.getDate()}/${issuedDate.getMonth()+1}/${issuedDate.getFullYear()}`;
           
            const response = await api.post(`/pfis/addNewPfi`, newPfi);

            console.log(response.data);

            commit(ADD_PFI, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message);
        }
    }
}

