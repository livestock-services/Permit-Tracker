<template>
  <div>
    <b-navbar centered spaced shadow>
      <template v-slot:brand>
        <nuxt-link :to="{ path: '/' }">
          <img
            class="img"
            src="../../assets/images/permit.png"
            
            alt="Summit Insurance"
          />
        </nuxt-link>
      </template>
      <template v-slot:start>
        <b-navbar-item
          class="is-size-4 is-hidden-mobile is-uppercase has-text-weight-bold"
          tag="div"
        >
          LSC Permit Tracker  
        </b-navbar-item>

        

        
        <b-navbar-item
          v-for="({ items }, index) in menuList"
          :key="index"
          class="is-hidden-desktop"
          tag="div"
        >

       

          <b-navbar-item
            v-for="({ itemLabel, link }, key) in items"
            :key="key"
            :to="link"
            tag="router-link"
            >{{ itemLabel }}</b-navbar-item
          >
        </b-navbar-item>

      </template>

      <template  v-slot:end>
        <b-navbar-item tag="div" class="is-hidden-mobile">
          <b-button icon-left="menu" @click="sidebar = !sidebar"></b-button>
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-sidebar
      v-model="sidebar"
      class="is-hidden-mobile"
      type="is-light"
      fullheight
      overlay
      v-if="this.$auth.user.email === 'jennyc@livestock.co.zm'"
    >

    
      <b-menu class="menu" :activable="false">
        <b-menu-list
          v-for="({ label, items }, index) in menuListProc"
          :key="index"
          :label="label"
        >
          <b-menu-item
            v-for="({ icon, itemLabel, link }, key) in items"
            :key="key"
            :icon="icon"
            :label="itemLabel"
            @click="pushRoute(link)"
          ></b-menu-item>
        </b-menu-list>

        <!-- Account Actions -->
        <b-menu-list label="Account Actions">
          <b-menu-item
            icon="cog"
            label="Log out"
            @click="endSession"
          ></b-menu-item>
        </b-menu-list>

        <b-menu-list   type="is-success" size="is-medium">
          <div class="welcome">
            <h3>You are signed in as</h3>
            <br />
            <div class="names">
               {{ this.$auth.user.email }} 
                  
            </div>
          </div>
        </b-menu-list>


      </b-menu>
    </b-sidebar>



  <b-sidebar
      v-model="sidebar"
      class="is-hidden-mobile"
      type="is-light"
      fullheight
      overlay
      v-if="this.$auth.user.email === 'henryb@livestock.co.zm'"
    >

    
      <b-menu class="menu" :activable="false">
        <b-menu-list
          v-for="({ label, items }, index) in menuListProc"
          :key="index"
          :label="label"
        >
          <b-menu-item
            v-for="({ icon, itemLabel, link }, key) in items"
            :key="key"
            :icon="icon"
            :label="itemLabel"
            @click="pushRoute(link)"
          ></b-menu-item>
        </b-menu-list>

        <!-- Account Actions -->
        <b-menu-list label="Account Actions">
          <b-menu-item
            icon="cog"
            label="Log out"
            @click="endSession"
          ></b-menu-item>
        </b-menu-list>

        <b-menu-list   type="is-success" size="is-medium">
          <div class="welcome">
            <h3>You are signed in as</h3>
            <br />
            <div class="names">
               {{ this.$auth.user.email }} 
                  
            </div>
          </div>
        </b-menu-list>


      </b-menu>
    </b-sidebar>



    <!-- COMPLIANCE SIDEBAR---------------------------------------------------- -->

    <b-sidebar
      v-model="sidebar"
      class="is-hidden-mobile"
      type="is-light"
      fullheight
      overlay
      v-if="this.$auth.user.email === 'gaving@livestock.co.zm'"
    >

    
      <b-menu class="menu" :activable="false">
        <b-menu-list
          v-for="({ label, items }, index) in menuListComp"
          :key="index"
          :label="label"
        >
          <b-menu-item
            v-for="({ icon, itemLabel, link }, key) in items"
            :key="key"
            :icon="icon"
            :label="itemLabel"
            @click="pushRoute(link)"
          ></b-menu-item>
        </b-menu-list>

        <!-- Account Actions -->
        <b-menu-list label="Account Actions">
          <b-menu-item
            icon="cog"
            label="Log out"
            @click="endSession"
          ></b-menu-item>
        </b-menu-list>

        <b-menu-list   type="is-success" size="is-medium">
          <div class="welcome">
            <h3>You are signed in as</h3>
            <br />
            <div class="names">
               {{ this.$auth.user.email }} 
                  
            </div>
          </div>
        </b-menu-list>


      </b-menu>
    </b-sidebar>


     <!-- FINANCE SIDEBAR---------------------------------------------------- -->

    <b-sidebar
      v-model="sidebar"
      class="is-hidden-mobile"
      type="is-light"
      fullheight
      overlay
      v-if="this.$auth.user.email === 'timothyk@livestock.co.zm'"
    >

    
      <b-menu class="menu" :activable="false">
        <b-menu-list
          v-for="({ label, items }, index) in menuListFin"
          :key="index"
          :label="label"
        >
          <b-menu-item
            v-for="({ icon, itemLabel, link }, key) in items"
            :key="key"
            :icon="icon"
            :label="itemLabel"
            @click="pushRoute(link)"
          ></b-menu-item>
        </b-menu-list>

        <!-- Account Actions -->
        <b-menu-list label="Account Actions">
          <b-menu-item
            icon="cog"
            label="Log out"
            @click="endSession"
          ></b-menu-item>
        </b-menu-list>

        <b-menu-list   type="is-success" size="is-medium">
          <div class="welcome">
            <h3>You are signed in as</h3>
            <br />
            <div class="names">
               {{ this.$auth.user.email }} 
                  
            </div>
          </div>
        </b-menu-list>


      </b-menu>
    </b-sidebar>



 <!-- COMPLIANCE SIDEBAR---------------------------------------------------- -->

    <b-sidebar
      v-model="sidebar"
      class="is-hidden-mobile"
      type="is-light"
      fullheight
      overlay
     
    >

    
      <b-menu class="menu" :activable="false">
        <b-menu-list
          v-for="({ label, items }, index) in menuList"
          :key="index"
          :label="label"
        >
          <b-menu-item
            v-for="({ icon, itemLabel, link }, key) in items"
            :key="key"
            :icon="icon"
            :label="itemLabel"
            @click="pushRoute(link)"
          ></b-menu-item>
        </b-menu-list>

        <!-- Account Actions -->
        <b-menu-list label="Account Actions">
          <b-menu-item
            icon="cog"
            label="Log out"
            @click="endSession"
          ></b-menu-item>
        </b-menu-list>

        <b-menu-list   type="is-success" size="is-medium">
          <div class="welcome">
            <h3>You are signed in as</h3>
            <br />
            <div class="names">
               {{ this.$auth.user.email }} 
                  
            </div>
          </div>
        </b-menu-list>


      </b-menu>
    </b-sidebar>



  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      sidebar: false,


         menuListProc: [
        {
          label: 'Dashboard',
          items: [{ icon: 'home', itemLabel: 'Dashboard', link: '/' }],
        },
        {
          label: 'Actions',
          items: [
            { icon: 'cash',  itemLabel: 'Procurement', link: '/procurement/procurement' 
             },
            
          ],
        },
       
      ],

         menuListComp: [
        {
          label: 'Dashboard',
          items: [{ icon: 'home', itemLabel: 'Dashboard', link: '/' }],
        },
        
        {
          label: 'Actions',
          items: [
            { icon: 'file-chart', itemLabel: 'Compliance', link: '/compliance/compliance' },
          ],
        },
        
      ],

         menuListFin: [
        {
          label: 'Dashboard',
          items: [{ icon: 'home', itemLabel: 'Dashboard', link: '/' }],
        },
        
        
        {
          label: 'Actions',
          items: [
            { icon: 'finance', itemLabel: ' Finance', link: '/finance/finance' },
          ],
        },
      ],
      
      menuList: [
        {
          label: 'Dashboard',
          items: [{ icon: 'home', itemLabel: 'Dashboard', link: '/' }],
        },
        {
          label: 'Procurement Dept',
          items: [
            { icon: 'cash',  itemLabel: 'Procurement', link: '/procurement/procurement' 
             },
            
          ],
        },
        {
          label: 'Compliance Dept',
          items: [
            { icon: 'file-chart', itemLabel: 'Compliance', link: '/compliance/compliance' },
          ],
        },
        {
          label: 'Finance Dept',
          items: [
            { icon: 'finance', itemLabel: ' Finance', link: '/finance/finance' },
          ],
        },
      ],
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  methods: {
    pushRoute(path) {
      this.sidebar = false
      this.$router.push({ path })
    },

    async endSession() {
      this.sidebar = false

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
            duration: 5000,
            message: 'Until next time!',
            position: 'is-top',
            type: 'is-greeen',
            
          })
          this.$router.push({ path: '/auth/login' })
        },
      })
    },
  },
}
</script>

<style scoped>
.img {
  display: block;
  height: 5rem;
  width: auto;
  margin: auto 0;
}

.menu {
  padding: 2rem;
}

.names{
  color:purple;
  font-size: 1rem;
}

.is-greeen{
  background-color: rgb(120, 206, 177);
  color: whitesmoke;
}

.welcome{
  padding-top: 50px;
}
</style>
