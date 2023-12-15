import { api } from '@/helpers/axios-instance'
import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

import { ADD_PFI,
        ADD_NEW_SUPPLIER,
        GET_ALL_SUPPLIERS,
        GET_ALL_SUPPS,
        GET_TOTAL_SUPPS,
        ADD_NEW_SUPPLIERS_TO_LIST,
        REMOVE_ALL_SUPPLIERS_FROM_LIST,
        SET_SELECTED_SUPPLIER,

        UPDATE_DAYS_ELAPSED,
        UPDATE_DAYS_ELAPSED_1,
        UPDATE_DAYS_ELAPSED_2,
        UPDATE_DAYS_ELAPSED_3,
        UPDATE_DAYS_ELAPSED_4,


         SET_ALL_PFIS, 
         GET_ALL_PFIS, 
         SET_LOADING,
         SET_SELECTED_PFI ,
         
         SET_SELECTED_NEW_RECORD_ADDED,
         SET_ALL_NEW_RECORDS_ADDED,
         GET_ALL_NEW_RECORDS_ADDED,

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
         GET_ALL_PERMITS_RECEIVED,
         GET_ALL_PERMITS_RECEIVED_BY_PROCUREMENT,

         DELETE_SELECTED_PFI,
         DELETE_SELECTED_SUPPLIER
         


        } from '@/helpers/mutation-types'

export const state = () => ({
    loading: false,
    all:[],
    allSuppliers:[],
    allSupps:[],
    totalSupps:null,
    allNewRecordsAdded:[],
    deleteError: null,
    allNewPfisAwaitingAcknowledgement:[],
    allPfisAcknowledgedByCompliance:[],
    allPAsInMotionAwaitingFinanceApproval:[],
    allPAsApprovedAwaitingPermit:[],
    allPermitsReceived:[],
    allPermitsReceivedByProc:[],

    selectedNewRecordAdded:null,
    selectedPfiAwaitingAcknowledgement:null,
    selectedPfiAcknowledgedByCompliance:null,
    selectedPaInMotionAwaitingFinanceApproval:null,
    selectedPaApprovedAwaitingPermit:null,
    selectedPermitReceived:null,

    selectedPfi: null,
    selectedSupplier:null,

    daysElapsed:null,
    daysElapsed1:null,
    daysElapsed2:null,
    daysElapsed3:null,
    daysElapsed4:null,


    form:{
        supplierName:null,
        supplierComment:null,
        purchaseOrderNumber:null,
        pfiNumber:null,
        pfiComments:null,
        pfiComplianceComments:null
      
        
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

      selectedSupplier(state) {
        return state.selectedSupplier
      },


    allPfis(state){
        return state.all
    },

    allSuppliers(state){
        return state.allSuppliers
    },
    allSupps(state){
        return state.allSupps
    },

    totalSupps(state){
        return state.totalSupps
    },

    allNewRecordsAdded(state){
        return state.allNewRecordsAdded
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

    allPermitsReceivedByProc(state){
        return state.allPermitsReceivedByProc
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

      daysElapsed(state){
        return state.daysElapsed
      },

      daysElapsed1(state){
        return state.daysElapsed1
      },

      daysElapsed2(state){
        return state.daysElapsed2
      },

      daysElapsed3(state){
        return state.daysElapsed3
      },
      daysElapsed4(state){
        return state.daysElapsed4
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
    
      [SET_SELECTED_SUPPLIER](state, supplier) {
        state.selectedSupplier = supplier
      },

    [GET_ALL_PFIS](state, payload) {
        state.all = payload
    },
    [GET_ALL_SUPPLIERS](state, payload){
        state.allSuppliers = payload
    },

    [GET_ALL_SUPPS](state, payload){
        state.allSupps = payload
    },

    [GET_TOTAL_SUPPS](state, payload){
        state.totalSupps = payload
    },

    [ADD_NEW_SUPPLIERS_TO_LIST](state, payload){
        state.allSuppliers.push(payload)
    },

    [REMOVE_ALL_SUPPLIERS_FROM_LIST](state, payload){
        state.allSuppliers = payload
    },

    
    
    [SET_SELECTED_NEW_RECORD_ADDED](state, pfi) {
        state.selectedNewRecordAdded = pfi
      },
    [SET_ALL_NEW_RECORDS_ADDED](state, payload) {
        state.allNewRecordsAdded = payload
    },
    [GET_ALL_NEW_RECORDS_ADDED](state, payload){
        state.allNewRecordsAdded= payload
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

    [GET_ALL_PERMITS_RECEIVED_BY_PROCUREMENT](state, payload){
        state.allPermitsReceivedByProc = payload
    },

    [UPDATE_DAYS_ELAPSED](state, payload){
        state.daysElapsed = payload
    },

    [UPDATE_DAYS_ELAPSED_1](state, payload){
        state.daysElapsed1 = payload
    },

    [UPDATE_DAYS_ELAPSED_2](state, payload){
        state.daysElapsed2 = payload
    },

    [UPDATE_DAYS_ELAPSED_3](state, payload){
        state.daysElapsed3 = payload
    },

    [UPDATE_DAYS_ELAPSED_4](state, payload){
        state.daysElapsed4 = payload
    },

    [DELETE_SELECTED_PFI](state, putResponse) {
        const index = state.all.findIndex(newPA => newPA._id === putResponse);
    if (index !== -1) {
      state.all.splice(index, 1);
    }
    state.deleteError = null;
    },

    
    [DELETE_SELECTED_SUPPLIER](state, putResponse) {
        const index = state.allSuppliers.findIndex(newSupplier => newSupplier._id === putResponse);
    if (index !== -1) {
      state.allSuppliers.splice(index, 1);
    }
    state.deleteError = null;
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
         

            
            commit(ADD_NEW_SUPPLIERS_TO_LIST, allSupps[i].supplierName);

            console.log(allSupps[i]);


            }
           
 
          console.log(filteredSuppliersList);
          
          

           // await dispatch('getInactivePolicies')
        console.log(allSupps)

             commit(GET_ALL_SUPPLIERS, filteredSuppliersList);
             commit(GET_TOTAL_SUPPS, filteredSuppliersList.length);
            //   ...getters.allPolicies,
            //   ...getters.inactivePolicies,
            commit(SET_LOADING, false);
            
        } catch (error) {
            commit(SET_LOADING, false);
            this.$log.error("Could not get details. Please try again!")
        }
    },

    async getAllSupps({ state, commit,_,rootGetters }) {
        try {
            commit(SET_LOADING, true)

            const {data: response} = await api.get(`/pfis/allSuppliers`)

            const allSupps = response.data;


            console.log(allSupps.length);

        
             commit(GET_ALL_SUPPS, allSupps);


             commit(GET_TOTAL_SUPPS, allSupps.length);
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

           const filteredRecordsAdded = allPfis.data.filter( apb => 
            apb.status ==='New record added'
           );

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

           const filteredPermitsReceivedByProc = allPfis.data.filter( fp=>
            fp.status ==='Permit received by Procurement'
           )
            

           const filteredPFIs = allPfis.data.filter( fPfis=>
            fPfis.status !=='Permit received by Procurement'
           )
  

         console.log(filteredRecordsAdded.length);

         console.log(filteredPfiAwaitingAcknowledgement.length);

         console.log(filteredPfiAcknowledgedByCompliance.length);

         console.log(filteredPaInMotionAwaitingFinanceApproval.length);

         console.log(filteredPaApprovedAwaitingPermit.length);

         console.log(filteredPermitsReceivedByProc.length);

            console.log(filteredPFIs)
          

           //RETRIEVED DATA IS COMMITTED TO THE MUTATION TO MAKE THE CHANGES EFFECTIVE
           commit(GET_ALL_PFIS, filteredPFIs);

           commit(GET_ALL_NEW_RECORDS_ADDED, filteredRecordsAdded);

           commit(GET_ALL_PFIS_AWAITING_ACKNOWLEDGEMENT, filteredPfiAwaitingAcknowledgement);

           commit(GET_ALL_PFIS_ACKNOWLEDGED_BY_COMPLIANCE, filteredPfiAcknowledgedByCompliance);

           commit(GET_ALL_PAs_IN_MOTION_AWAITING_FINANCE_APPROVAL, filteredPaInMotionAwaitingFinanceApproval);
            
           commit(GET_ALL_PAs_APPROVED_AWAITING_PERMIT, filteredPaApprovedAwaitingPermit);

           commit(GET_ALL_PERMITS_RECEIVED, filteredPermitsReceivedByProc);

           commit(GET_ALL_PERMITS_RECEIVED_BY_PROCUREMENT, filteredPermitsReceivedByProc);
           
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


    async onDeletePFI({ state, commit,_,rootGetters }, pfi) {
        try {
          commit(SET_LOADING, true) 
            const newPA = rootGetters['procurement/selectedPfi']
          
            

          console.log(newPA._id)

        

         const {data: putResponse} = await api.delete(`/pfis/allPfis/${newPA._id}`)
        
        let  deletedPfi = putResponse.data;

        

         console.log(newPA);

         commit(DELETE_SELECTED_PFI, deletedPfi)
        

          console.log(deletedPfi);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },

      async onDeleteSupplier({ state, commit,_,rootGetters }, pfi) {
        try {
          commit(SET_LOADING, true) 
            const newSupplier = rootGetters['procurement/selectedSupplier']
          
            

          console.log(newSupplier._id)
          console.log(newSupplier.supplierName)

        

         const {data: putResponse} = await api.delete(`/pfis/allSuppliers/${newSupplier._id}`)
        
        let  deletedSupplier = putResponse.data;

        

         console.log(newSupplier);

         commit(DELETE_SELECTED_SUPPLIER, deletedSupplier);
        

          console.log(deletedSupplier);
         
          commit(SET_LOADING, false)
        } catch (error) {
          commit(SET_LOADING, false)
          throw error
        }
      },


      selectSupplier({commit}, supplier){
        try {
            commit(SET_SELECTED_SUPPLIER, supplier)
            console.log(supplier._id) 
            console.log(supplier.supplierName) 
        } catch (error) {
            console.log('Error')  
        }
      },


    

    selectPfi({ commit }, pfi) {
        try {
            
            


              function parseDate(dateStr) {
                const dateParts = dateStr.split("/");
                // new Date(year, monthIndex, day)
                return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
              }

             



              // Let's assume the variable 'option' represents the current case
                const option = pfi.status;

                switch (option) {
                case 'New PFI added, awaiting acknowledgement':
                    const startDateStr = pfi.newRecordAddedDate;
                        const endDateStr = pfi.stageOneDate;
                        
                        function calculateDaysElapsed(startDateStr, endDateStr) {
                            const startDate = parseDate(startDateStr);
                            const endDate = parseDate(endDateStr);
                        
                            // Calculate the difference between the two dates in milliseconds
                            const timeDiff = endDate.getTime() - startDate.getTime();
                        
                            // Convert the difference to days
                            const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                        
                            return daysElapsed;
                        }
                        
                        
                        const daysElapsed = calculateDaysElapsed(startDateStr, endDateStr);
                        console.log("Number of days elapsed:", daysElapsed);

                        commit(UPDATE_DAYS_ELAPSED, daysElapsed);
                    break;





                case 'Acknowledged By Compliance':
                    const startDateStr1 = pfi.stageOneDate;
                    const endDateStr1 = pfi.stageTwoDate;
                    
                    function calculateDaysElapsed1(startDateStr1, endDateStr1) {
                        const startDate = parseDate(startDateStr1);
                        const endDate = parseDate(endDateStr1);
                    
                        // Calculate the difference between the two dates in milliseconds
                        const timeDiff = endDate.getTime() - startDate.getTime();
                    
                        // Convert the difference to days
                        const daysElapsed1 = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    
                        return daysElapsed1;
                    }
                    
                    
                    const daysElapsed1 = calculateDaysElapsed1(startDateStr1, endDateStr1);
                    console.log("Number of days elapsed:", daysElapsed1);

                    commit(UPDATE_DAYS_ELAPSED_1, daysElapsed1);
                    break;



                case 'PA in motion, awaiting Finance Approval':
                    const startDateStr2 = pfi.stageTwoDate;
                    const endDateStr2 = pfi.stageThreeDate;
                    
                    function calculateDaysElapsed2(startDateStr2, endDateStr2) {
                        const startDate = parseDate(startDateStr2);
                        const endDate = parseDate(endDateStr2);
                    
                        // Calculate the difference between the two dates in milliseconds
                        const timeDiff = endDate.getTime() - startDate.getTime();
                    
                        // Convert the difference to days
                        const daysElapsed2 = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    
                        return daysElapsed2;
                    }
                    
                    
                    const daysElapsed2 = calculateDaysElapsed2(startDateStr2, endDateStr2);
                    console.log("Number of days elapsed:", daysElapsed2);

                    commit(UPDATE_DAYS_ELAPSED_2, daysElapsed2);

                    break;





                case 'PA approved, awaiting Permit':
                    const startDateStr3 = pfi.stageThreeDate;
                    const endDateStr3 = pfi.stageFourDate;


                    console.log(startDateStr3);
                    console.log(endDateStr3);


                    
                    let initialDaysElapsed = 0;

                    commit(UPDATE_DAYS_ELAPSED_3, initialDaysElapsed);
                    
                    function calculateDaysElapsed3(startDateStr3, endDateStr3) {
                        const startDate = parseDate(startDateStr3);
                        const endDate = parseDate(endDateStr3);

                        
                    console.log(startDate);
                    console.log(endDate);


                    
                        // Calculate the difference between the two dates in milliseconds
                        const timeDiff = endDate.getTime() - startDate.getTime();

                        console.log(timeDiff);
                      
                    
                        // Convert the difference to days
                        const daysElapsed3 = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

                        console.log(daysElapsed3 );
                    
                        return daysElapsed3;
                    }
                    
                    
                    const daysElapsed3 = calculateDaysElapsed3(startDateStr3, endDateStr3);
                    console.log("Number of days elapsed:", daysElapsed3);

                    commit(UPDATE_DAYS_ELAPSED_3, daysElapsed3);
                    break;

                case 'Permit received':
                    const startDateStr4 = pfi.stageOneDate;
                    const endDateStr4 = pfi.stageFiveDate;
                    
                    function calculateDaysElapsed4(startDateStr4, endDateStr4) {
                        const startDate = parseDate(startDateStr4);
                        const endDate = parseDate(endDateStr4);
                    
                        // Calculate the difference between the two dates in milliseconds
                        const timeDiff = endDate.getTime() - startDate.getTime();
                    
                        // Convert the difference to days
                        const daysElapsed4 = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                    
                        return daysElapsed4;
                    }
                    
                    
                    const daysElapsed4 = calculateDaysElapsed4(startDateStr4, endDateStr4);
                    console.log("Number of days elapsed:", daysElapsed4);

                    commit(UPDATE_DAYS_ELAPSED_4, daysElapsed4);

                    break;

                default:
                    console.log("Invalid option selected.");
                }


             
              


                
            commit(SET_SELECTED_PFI, pfi)
            console.log(pfi._id)
        } catch (error) {
            console.log('Error')
        }
        
      },
}

