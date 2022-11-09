<template>
  <div class="container">
    <div class="px-4 mt-6 columns">
      <div class="column">
        <h2 class="title is-size-2">Available Actions</h2>
        <div class="box">
          <b-field grouped group-multiline position="is-centered">
            <!-- <b-button
              v-for="({ name, icon, type, path, role }, index) in actions"
              
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              :role="role"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }} </b-button
            > -->

           

           

           

<!--Button for Procurement-----------------------  -->

            <b-button
            v-if="this.$auth.user.email ==='jennyc@livestock.co.zm'"
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check"
            ico
            @click="onProc">
              Manage Procurement
            </b-button>


            <b-button
              v-if="this.$auth.user.email === 'jennyc@livestock.co.zm'" grouped group-multiline position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button>

               
 <!-- End of Procurement-----------============================= -->


 <!--Button for Procurement-----------------------  -->

            <b-button
            v-if="this.$auth.user.email ==='henryb@livestock.co.zm'"
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check"
            ico
            @click="onProc">
              Manage Procurement
            </b-button>


            <b-button
              v-if="this.$auth.user.email === 'henryb@livestock.co.zm'" grouped group-multiline position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button>

               
 <!-- End of Procurement-----------============================= -->

<!-- Button for Compliance------------------ -->

             <b-button
            v-if="this.$auth.user.email ==='gaving@livestock.co.zm'"
            class="mx-2 my-4"
            type="is-warning"
            size="is-large"
             icon-left="file-star"
            @click="onComp">
             Manage Compliance
            </b-button>


             <b-button
              v-if="this.$auth.user.email ===  'gaving@livestock.co.zm'" grouped group-multiline position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button>

  <!-- End of Compliance-----------============================= -->


<!-- Button for Finance----------------------------------- -->
             <b-button
            v-if="this.$auth.user.email ==='timothyk@livestock.co.zm'"
            class="mx-2 my-4"
            type="is-success"
            size="is-large"
            icon-left="finance"
            path='/finance/finance'
            @click="onFin">
              Manage Finance
            </b-button>


             <b-button
              v-if="this.$auth.user.email === 'timothyk@livestock.co.zm'" grouped group-multiline position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button

              
            >


          </b-field>
<!-- Azwel's Field----------------------------------------- -->
           <b-field v-if="this.$auth.user.email === 'azwels@livestock.co.zm' " grouped group-multiline position="is-centered">
            <!-- <b-button
              v-for="({ name, icon, type, path, role }, index) in actions"
              
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              :role="role"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }} </b-button
            > -->

            <b-button
           
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check"
            path='/procurement/procurement'
            ico
            @click="onProc">
              Manage Procurement
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-warning"
            size="is-large"
             icon-left="file-star"
             path='/compliance/compliance'
            @click="onComp">
             Manage Compliance
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-success"
            size="is-large"
            icon-left="finance"
            path='/finance/finance'
            @click="onFin">
              Manage Finance
            </b-button>

           
            <b-button
            
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>

<!--End of Azwel's Field----------------------------  -->



<!-- Kondwani's Field-------------------------------- -->
<b-field v-if="this.$auth.user.email === 'kondwanim@livestock.co.zm' " grouped group-multiline position="is-centered">
            <!-- <b-button
              v-for="({ name, icon, type, path, role }, index) in actions"
              
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              :role="role"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }} </b-button
            > -->

            <b-button
           
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check"
            ico
            @click="onProc">
              Manage Procurement
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-warning"
            size="is-large"
             icon-left="file-star"
            @click="onComp">
             Manage Compliance
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-success"
            size="is-large"
            icon-left="finance"
            path='/finance/finance'
            @click="onFin">
              Manage Finance
            </b-button>

           
            <b-button
            
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>
<!-- End of Kondwani's Field--------------------------------- -->

<!-- Mutinta's Field--------------------------- -->
<b-field v-if="this.$auth.user.email === 'mutintac@livestock.co.zm' " grouped group-multiline position="is-centered">
            <!-- <b-button
              v-for="({ name, icon, type, path, role }, index) in actions"
              
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              :role="role"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }} </b-button
            > -->

            <b-button
           
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check"
            ico
            @click="onProc">
              Manage Procurement
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-warning"
            size="is-large"
             icon-left="file-star"
            @click="onComp">
             Manage Compliance
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-success"
            size="is-large"
            icon-left="finance"
            path='/finance/finance'
            @click="onFin">
              Manage Finance
            </b-button>

           
            <b-button
            
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>

<!-- End of Mutinta's Field------------------------>



<!-- Euston's Field----------------------------- -->

<b-field v-if="this.$auth.user.email === 'eustonk@livestock.co.zm' " grouped group-multiline position="is-centered">
            <!-- <b-button
              v-for="({ name, icon, type, path, role }, index) in actions"
              
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              :role="role"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }} </b-button
            > -->

            <b-button
           
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check-alt"
            ico
            @click="onProc">
              Manage Procurement
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-warning"
            size="is-large"
             icon-left="file-star"
            @click="onComp">
             Manage Compliance
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-success"
            size="is-large"
            icon-left="finance"
            path='/finance/finance'
            @click="onFin">
              Manage Finance
            </b-button>

           
            <b-button
            
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>


<!-- End of Euston's Field-------------- -->

<!---------------------------------------------Bally's Field----------------------------- -->
<b-field v-if="this.$auth.user.email === 'dilipk@livestock.co.zm' " grouped group-multiline position="is-centered">
            <!-- <b-button
              v-for="({ name, icon, type, path, role }, index) in actions"
              
              :key="index"
              class="mx-2 my-4"
              :type="type"
              :icon-left="icon"
              :role="role"
              size="is-large"
              @click="$router.push({ path })"
              >{{ name  }} </b-button
            > -->

            <b-button
           
            class="mx-2 my-4"
            type="is-info"
            size="is-large"
            icon-left= "cash-check-alt"
            ico
            @click="onProc">
              Manage Procurement
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-warning"
            size="is-large"
             icon-left="file-star"
            @click="onComp">
             Manage Compliance
            </b-button>

            <b-button
           
            class="mx-2 my-4"
            type="is-success"
            size="is-large"
            icon-left="finance"
            path='/finance/finance'
            @click="onFin">
              Manage Finance
            </b-button>

           
            <b-button
            
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>

        </div>

         <b-menu-list  type="is-success" size="is-medium">
          <div class="welcome">
            <h3>Signed in as</h3>
            <br />
            <div class="names">
               {{ this.$auth.user.email }}, <br/>
               
             
            </div>
          </div>
        </b-menu-list>

      </div>
    </div>
  </div>
</template>

|| 'kondwanim@livestock.co.zm' || 'azwels@livestock.co.zm' || 'mutintac@livestock.co.zm' || 'eustonk@livestock.co.zm'
<script>
import {mapActions, mapGetters} from 'vuex'
import { api } from '@/helpers/axios-instance'
export default {
  name: 'Dashboard',

  data() {
    return {
      actions: [
        {
          type: 'is-info  ',
          icon: 'cash-check',
          name: 'Manage Procurement',
          path: '/procurement/procurement',
          role: 'procurement'
          
        },

         {
          type: 'is-warning ',
          icon: 'file-star',
          name: 'Manage Compliance',
          path: '/compliance/compliance',
          role: 'compliance'
        },

        {
          type: 'is-success ',
          icon: 'finance',
          name: 'Manage Finance',
          path: '/finance/finance',
          role: 'finance'
        },
        
       

        
        
      ],

       isLoading: false,
    }
  },

  computed: {
     ...mapGetters('users', {
        loading: 'loading',
         Users: 'allUsers',
    }),
  },

  async created(){
    function showNotifications(){
   const notification = new Notification("Welcome to your LSCS Permit Tracker dashboard.", {
       body: "This section gives an overview of all your vehicles. More details are in the Fleet section.",
        icon: "litmas3.png",
      

    }); 
 }

 if (Notification.permission === "granted") {
     showNotifications();
 } else if(Notification.permission !== "denied") {
     Notification.requestPermission().then(permission =>{
         if (permission === "granted") {
             showNotifications();
         }
      
     })
 }
  },

  methods: {

         ...mapActions('users', ['getAllUsers']),
       
       async onProc(){
        await this.$router.push('/procurement/procurement')
      },

       async onComp(){
          
        await this.$router.push('/compliance/compliance')
        
      },

      async onFin(){
        await this.$router.push('/finance/finance')
      },

       async endSession() {

      await this.$buefy.dialog.confirm({
        title: 'Log out',
        message: 'Are you sure you want to <b>log out</b>?',
        cancelText: 'Cancel',
        confirmText: 'Yes',
        type: 'is-warning',
        hasIcon: true,
        onConfirm: async () => {
          
          await this.$auth.logout()
           
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Until next time!',
            position: 'is-top',
            type: 'is-greeen',
          })
          this.$router.push({ path: '/auth/login' })
          
        },
      })
    },
    //  ...mapActions('users', ['getAllUsers']),
  },
     

   
}
</script>
<style>
.names{
  color:cornflowerblue;
  font-size: 1.2rem;
}

.is-greeen{
  background-color: rgb(120, 206, 177);
  color: whitesmoke;
}
</style>