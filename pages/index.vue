<template>
  <div class="container">
    <div class="px-4 mt-6 columns">
      <div class="column">
        <h2 class="title is-size-2">Available Actions</h2>
        <div class="box">
          <b-field grouped group-multiline position="is-centered">
            <b-button
              v-for="({ name, icon, type, path }, index) in actions"
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }}</b-button
            >
            <b-button
              class="mx-2 my-4"
              type="is-danger is-inverted"
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>
        </div>

         <b-menu-list  type="is-success" size="is-medium">
          <div class="welcome">
            <h3>You are signed in as</h3>
            <br />
            <div class="names">
              <!-- {{ this.$auth.user.email }} -->
              
              
              
             
            </div>
          </div>
        </b-menu-list>

      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Dashboard',

  data() {
    return {
      actions: [
        {
          type: 'is-info  ',
          icon: 'cash',
          name: 'Manage Procurement',
          path: '/procurement/procurement',
        },

         {
          type: 'is-warning ',
          icon: 'file-chart',
          name: 'Manage Compliance',
          path: '/compliance/compliance',
        },

        {
          type: 'is-success ',
          icon: 'finance',
          name: 'Manage Finance',
          path: '/finance/finance',
        },
        
       

        
        
      ],

       isLoading: false,
    }
  },

  computed: {
    //  ...mapGetters('users', {
    //   loading: 'loading',
    //   Users: 'allUsers',
   // }),
  },

  methods: {

    endSession(){
     this.$router.push('/auth/login')
    }
    //  ...mapActions('users', ['getAllUsers']),
  },
     

   
}
</script>
<style>
.names{
  color:cornflowerblue;
  font-size: 1.2rem;
}
</style>