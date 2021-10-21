import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { 

         SET_LOADING, 
         ADD_AMENDED_PERMIT_APPLICATION,
         SET_ALL_AMENDED_PERMIT_APPLICATIONS,
         GET_ALL_AMENDED_PERMIT_APPLICATIONS
        } from '@/helpers/mutation-types'


export const state = () => ({
    loading: false,
    all:[],
    
    form:{
        
        pfiNumber:null,
        reasonForAmendment:null
              
    },
})

export const getters = {
    getField,

    loading(state) {
        return state.loading
    },

    allAmendedPermitApplications(state){
        return state.all
    },
}

export const mutations = {
    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },  

    //MUTATIONS FOR ADDING, SETTING AND GETTING PFIs
    [ADD_AMENDED_PERMIT_APPLICATION](state, newAmendedPermitApplication){
        state.all.push(newAmendedPermitApplication)
    },
    [SET_ALL_AMENDED_PERMIT_APPLICATIONS](state, payload) {
        state.all = payload
    },
    [GET_ALL_AMENDED_PERMIT_APPLICATIONS](state, payload){
        state.all = payload
    },
}

export const actions = {
      //LOAD ALL PFIS UPON REFRESH
      async load({ commit }) {
        try {
            commit(SET_LOADING, true)
           const newLoad= await api.get(`/comp/permits/allAmendedPermitApplications`)
           // await dispatch('getInactivePolicies')
        console.log(newLoad.data)
             commit(SET_ALL_AMENDED_PERMIT_APPLICATIONS, newLoad.data);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },
 //GET ALL PFIS
    async getAllAmendedPermitApplications({ commit }){
        try {
            //ENABLE LOADING FEATURE WHILE API REQUEST IS BEING MADE
            commit(SET_LOADING, true)

           
            //API REQUEST IS MADE AND RESULT IS STORED IN CONST
           const {data: allAmendedPermitApplications} = await api.get(`/comp/permits/allAmendedPermitApplications`)

          

          

           console.log(allAmendedPermitApplications);


           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_AMENDED_PERMIT_APPLICATIONS, allAmendedPermitApplications.data);
            
           
           //AFTER ALL ACTIONS HAVE BEEN PERFORMED, LOADING IS SET TO FALSE AND RESULTS ARE DISPLAYED
           commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error(error.message)
        }
    },

    //ADD NEW PFI TO ALL PFIs
    async addNewAmendedPermitApplication({ commit, state}){
        try {
            commit(SET_LOADING, true);

            const newAmendedPermitApplication = state.form;
           
           
            const response = await api.post(`/comp/permits/addNewAmendedPermitApplication`, newAmendedPermitApplication);

            console.log(response.data);

            commit(ADD_PFI, response.data);
            
            commit(SET_LOADING, false);

        } catch (error) {
            commit(SET_LOADING, false);
            this.log.error(error.message);
        }
    }
}

