/* eslint-disable prettier/prettier */
import { api } from '@/helpers/axios-instance'
import { getField, updateField } from 'vuex-map-fields'
import { SET_LOADING, SET_USERS, ADD_NEW_USER, SET_CURRENT_USER } from '@/helpers/mutation-types'
// import { _ } from 'lodash'
export const state = () => ({
    all: [],
    users: [],
    user:null

    
})

export const getters = {
    getField,

    allUsers(state) {
        return state.users
    },

     currentUser(state) {
        return state.user
    },
}

export const mutations = {
    updateField,

    [SET_USERS](state, payload) {
        state.users = payload
    },
    [SET_CURRENT_USER](state, selectedUser) {
        state.user = selectedUser
    },

    [SET_LOADING](state, payload) {
        state.loading = payload
    },

    [ADD_NEW_USER](state, payload) {
        state.users.push(payload)
    },

}

export const actions = {

    async getAllUsers({  commit }) {
        try {
            commit(SET_LOADING, true)


            const { data:fetchUsers } = await api.get(`/auth/allUsers`)

            console.log(fetchUsers.data)

           
         
            
           for(var i = 0; i < fetchUsers.data.length ; i++){

            if(fetchUsers.data[i].email === this.$auth.user.email){
                console.log( fetchUsers.data[i].email)

                const name = fetchUsers.data[i].name
                console.log(name)

              switch (name) {
               

                case 'Azwel Simwinga':

                    console.log(fetchUsers.data[i].role.admin)
                      
                      break;

                case  'Mutinta Chijoka':

                    console.log(fetchUsers.data[i].role.admin)
                      
                      break;

                 case  'Euston Kazembe':

                        console.log(fetchUsers.data[i].role.admin)
                          
                          break;

                 case  'Kondwani Mwale':

                    console.log(fetchUsers.data[i].role.admin)
                      
                      break;


                 case 'Jenny Emmerson':

                        console.log(fetchUsers.data[i].role.proc)
                         
                         break;


                case 'Henry Beckett':

                        console.log(fetchUsers.data[i].role.proc)
                            
                        break;

                 case  'Gavin Gavinson':

                    console.log(fetchUsers.data[i].role.comp)
                      
                      break;

                 case  'George M\'tonga':

                        console.log(fetchUsers.data[i].role.comp)
                          
                          break;


                case  'Bob Gondwe':

                console.log(fetchUsers.data[i].role.fin)
                    
                    break;

                case  'Timothy K':

                    console.log(fetchUsers.data[i].role.fin)
                        
                        break;

              
                  default:
                    console.log('Could not find any user')
                      break;
              } 
                
            
                
            }
           
            // if(fetchUsers.data[i].name === 'Azwel Simwinga' || 'Euston Kazembe' || 'Kondwani Mwale' || 'Mutinta Chijoka'){
            //    // console.log('True',fetchUsers.data[i].name )
            //     console.log(fetchUsers.data[i].role.admin)
               
            

            //  if(fetchUsers.data[i].name === 'Jenny Emmerson' || 'Henry Beckett'){
            
            //     console.log(fetchUsers.data[i].role.proc)
            // }

            //  if(fetchUsers.data[i].name === 'Gavin Gavinson' || 'George M\'tonga'){
               
            //         console.log(fetchUsers.data[i].role.comp)
            //     }

            // if(fetchUsers.data[i].name === 'Bob Gondwe' || 'Timothy K'){
                
            //         console.log(fetchUsers.data[i].role.fin)
            //     }

            // }

            else {
                console.log('Could not find any user')
            }

           }
            commit(SET_USERS, fetchUsers.data)

            

            commit(SET_LOADING, false)

           

        } catch (error) {
            commit(SET_LOADING, false)
            throw error
        }
    },

    async getUser({state, commit }) {
        try {
            commit(SET_LOADING, true)

            // const selectedUser = state.user
            // //  const newPA = rootGetters['finance/selectedPermitApplication'] 
            //    console.log(selectedUser)


          //  const fetchUser = await api.get(`/auth/User/${selectedUser._id}`)
            console.log(fetchUser.data)

            commit(SET_CURRENT_USER, fetchUser.data)
            commit(SET_LOADING, false)

        } catch (error) {
            commit(SET_LOADING, false)
            throw error
        }
    },


    // selectUser ({ commit }, selectedUser) {
    //     try {
            
    //         commit(SET_CURRENT_USER, selectedUser)
    //         console.log(selectedUser._id)
    //     } catch (error) {
    //         console.log('Error')
    //     }
        
    //   },
    
}