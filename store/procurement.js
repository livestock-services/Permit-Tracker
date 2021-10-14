import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'
import { ADD_PFI,SET_PFI, SET_LOADING } from '@/helpers/mutation-types'

export const state = () => ({
    loading: false,
    all:[],
    
    purchaseForm:{
        purchaseOrderNumber:null,
        pfiNumber:null,
        supplierName:null,
        supplierEmail:null
    }
})

export const getters = {
     getField,

    loading(state) {
        return state.loading
    },

    allPfis(state){
        return state.all
    }

}

export const mutations = {
    updateField,

    [SET_LOADING](state, loading) {
        state.loading = loading
    },
    [SET_PFI](state, payload) {
        state.all = payload
    },

    [ADD_PFI](state, payload){
        state.pfis.push(payload)
    }
}

export const actions = {

}

