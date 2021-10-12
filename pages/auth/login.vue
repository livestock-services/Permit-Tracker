<template>
<div class="box">
  <div class="grid is-full-height pt-2">

    <div class="card-1 form-card-1">
      <b-field
        #default="{ isLoading }"
        v-model="form"
        :class="['card-content']"
        @submit="loginUser"
      >
        <h1 class="header center my-4">
          <span class="is-blue">L</span> 
          <span class="is-blue">S</span> 
          <span class="is-blue">C</span> <br> <span class="is-green"> Permit Tracker.</span>
        </h1>
       

        <b-field label="Email">
            <b-input
           
             placeholder="example@gmail.com"
             type="email"
            maxlength="30"
            icon-right="mail"
           >
            </b-input>
         </b-field>


       
          <b-field label="Password">
            <b-input type="password"
               placeholder="Your Password..."
                password-reveal>
            </b-input>

         </b-field>
      

        <b-button
          class="mt-4"
          expanded
          type="is-info"
          tag="input"
          native-type="submit"
          value="Login"
        />
        <b-loading :active="isLoading" is-full-page></b-loading>
      <!--
        <p>
          Not Registered? Sign up
          <nuxt-link to="/auth/register">here</nuxt-link>
        </p>

        -->
      </b-field>
    </div>

    <div class="card form-card-2"></div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {

   auth: 'guest',
  data() {
    return {
      form: {
        
        email: null,
        password: null,
      },
      hasError: true,
      isLoading: false,
      isFullPage: true,
    }
  },
  methods: {
  ...mapActions('user', ['getUser']),
    async loginUser(user) {
      try {
        const { data: response } = await this.$auth.loginWith('local', {
            data: this.form 
          })
          //   const user = response.data
          console.log(response.data)
          this.$auth.setUser(user)

          

          this.$buefy.toast.open({
            message:`Logged In as ${this.$auth.user.email}!` ,
            position:'is-bottom',
            type:'is-success'})

        
       


        
            
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Welcome back!',
          position: 'is-top',
          type: 'is-success',
        })
  

        this.$router.push({ path: '/' })
      } catch (error) {
        this.form.password = null
        const message = error.response
          ? error.response.data.message
          : error.message
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Please check your details again!',
          position: 'is-top',
          type: 'is-danger',
        })
      }
    },
  },
}
</script>

<style scoped>

.formulate-input::v-deep .email {
  background-color: red;
}

.header{
  font-size: 2rem;
  color: gray;
}

.center {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 600;
}
.is-blue {
  color: rgb(5, 105, 67);
}
.is-green {
  color: rgb(17, 158, 158);
}
.register {
  padding-left: 5rem;
}

.email {
  width: 100%;
  border-radius: 30%;
}

.password {
  width: 90%;
}
.grid {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: grid;
  grid-template-rows: 1fr minmax(min-content, auto) 1fr;
  grid-template-columns: 1fr minmax(min-content, auto) 1fr;
}

.form-card-1 {
    
  grid-row: 2/3;
  grid-column: 1/3;
  width: 100%;
  background-color: rgba(247, 230, 216, 0.863);
}

.card-content {
  padding-top: 1rem;
  width: auto;
}

.form-card-2 {
  height: 65vh;
  grid-row: 2/3;
  grid-column: 3/3;
  background: url('../../assets/images/LSC.jpg');
  background-repeat: no-repeat;
  background-size: contain;
}

.box{
    background-color: rgb(35, 87, 134);
    padding-top: 3rem;
    padding-bottom: 18rem;
    padding-left: 12rem;
    padding-right: 12rem;
}
</style>
