<template>
  <div class="container">
    <div class="px-4 mt-6 columns">
      <div class="column">
        <h2 class="title is-size-2">Available Actions</h2>
        <div class="box1">
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
              v-if="this.$auth.user.email === 'procurement@livestock.co.zm'"
              class="mx-2 my-4"
              type="is-info"
              size="is-large"
              icon-left="cash-check"
              ico
              @click="onProc"
            >
              Manage Procurement
            </b-button>

            <b-button
              v-if="this.$auth.user.email === 'procurement@livestock.co.zm'"
              grouped
              group-multiline
              position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >

            <!-- End of Procurement-----------============================= -->

            <!-- Button for Compliance------------------ -->

            <b-button
              v-if="this.$auth.user.email === 'compliance@livestock.co.zm'"
              class="mx-2 my-4"
              type="is-warning"
              size="is-large"
              icon-left="file-star"
              @click="onComp"
            >
              Manage Compliance
            </b-button>

            <b-button
              v-if="this.$auth.user.email === 'compliance@livestock.co.zm'"
              grouped
              group-multiline
              position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >

            <!-- End of Compliance-----------============================= -->

            <!-- Button for Finance----------------------------------- -->
            <b-button
              v-if="this.$auth.user.email === 'finance@livestock.co.zm'"
              class="mx-2 my-4"
              type="is-success"
              size="is-large"
              icon-left="finance"
              path="/finance/finance"
              @click="onFin"
            >
              Manage Finance
            </b-button>

            <b-button
              v-if="this.$auth.user.email === 'finance@livestock.co.zm'"
              grouped
              group-multiline
              position="is-centered"
              class="mx-2 my-4"
              type="is-danger "
              icon-right="logout"
              size="is-large"
              @click="endSession"
              >Log Out</b-button
            >
          </b-field>
          <!-- Admin's Field----------------------------------------- -->
          <b-field
            v-if="this.$auth.user.email === 'itsupport@livestock.co.zm'"
            grouped
            group-multiline
            position="is-centered"
            class="py-4"
          >
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
              icon-left="cash-check"
              path="/procurement/procurement"
              ico
              @click="onProc"
            >
              
              Manage Procurement
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-warning"
              size="is-large"
              icon-left="file-star"
              path="/compliance/compliance"
              @click="onComp"
            >
              Manage Compliance
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-success"
              size="is-large"
              icon-left="finance"
              path="/finance/finance"
              @click="onFin"
            >
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

          <!--End of Admin's Field----------------------------  -->

          <h5 class="title">Stats</h5>
          <b-field
            
            grouped
            group-multiline
            position="is-centered"
            class="py-4"
          >
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
              size="is-medium"
              icon-left="cash-check"
              path="/procurement/procurement"
              ico
              @click=""
            >
              <countTo
                :startVal="startVal"
                :endVal="pfiStage1.length + pfiStage2.length + pfiStage3.length + pfiStage4.length + pfiStage5.length"
                :duration="6000"
              ></countTo>
              Total Records
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-warning is-light"
              size="is-medium"
              icon-left="arrow-right"
              path="/compliance/compliance"
              @click=""
            >
            <countTo
                :startVal="startVal"
                :endVal="pfiStage1.length"
                :duration="6000"
              ></countTo>
              PFIs Awaiting Acknowledgement
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-success is-light"
              size="is-medium"
              icon-left="arrow-up"
              path="/compliance/compliance"
              @click=""
            >
            <countTo
                :startVal="startVal"
                :endVal="pfiStage2.length"
                :duration="6000"
              ></countTo>
              PFIs Acknowledged
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-warning"
              size="is-medium"
              icon-left="recycle"
              path="/compliance/compliance"
              @click=""
            >
            <countTo
                :startVal="startVal"
                :endVal="pfiStage3.length"
                :duration="6000"
              ></countTo>
              PAs in Motion, Awaiting Finance Approval
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-success"
              size="is-medium"
              icon-left="check-outline"
              path="/finance/finance"
              @click=""
            >
            <countTo
                :startVal="startVal"
                :endVal="pfiStage4.length"
                :duration="6000"
              ></countTo>
              PAs Approved, Awaiting Permit
            </b-button>

            <b-button
              class="mx-2 my-4"
              type="is-primary"
              size="is-medium"
              icon-left="handshake"
              path="/finance/finance"
              @click=""
            >
            <countTo
                :startVal="startVal"
                :endVal="pfiStage5.length"
                :duration="6000"
              ></countTo>
              Permits Received
            </b-button>

            
          </b-field>

            
            

          <!--End of Admin's Field----------------------------  -->
        </div>

       

        <b-menu-list type="is-success" size="is-medium">
          <div class="welcome">
            <h3>Signed in as</h3>
            <br />
            <div class="names">{{ this.$auth.user.email }}, <br /></div>
          </div>
        </b-menu-list>
      </div>
    </div>
  </div>
</template>

|| 'kondwanim@livestock.co.zm' || 'itsupport@livestock.co.zm' ||
'mutintac@livestock.co.zm' || 'eustonk@livestock.co.zm'
<script>
import { mapActions, mapGetters } from "vuex";
import { api } from "@/helpers/axios-instance";
import countTo from "vue-count-to";
export default {
  name: "Dashboard",

  components: {
    countTo,
  },

  data() {
    return {
      startVal: 0,
      actions: [
        {
          type: "is-info  ",
          icon: "cash-check",
          name: "Manage Procurement",
          path: "/procurement/procurement",
          role: "procurement",
        },

        {
          type: "is-warning ",
          icon: "file-star",
          name: "Manage Compliance",
          path: "/compliance/compliance",
          role: "compliance",
        },

        {
          type: "is-success ",
          icon: "finance",
          name: "Manage Finance",
          path: "/finance/finance",
          role: "finance",
        },
      ],

      isLoading: false,
    };
  },

  computed: {
    ...mapGetters("procurement", {
      loading: "loading",
      pfis: "allPfis",

      pfiStage1:"allNewPfisAwaitingAcknowledgement",
      pfiStage2:"allPfisAcknowledgedByCompliance",
      pfiStage3:"allPAsInMotionAwaitingFinanceApproval",
      pfiStage4:"allPAsApprovedAwaitingPermit",
      pfiStage5:"allPermitsReceived",

      allPAs: "allPermitApplications",
    }),
  },

  async created() {

    let pfis = await this.getAllPfis();

    console.log(pfis)


    function showNotifications() {
      const notification = new Notification(
        "Welcome to your LSCS Permit Tracker dashboard.",
        {
          body: "This section gives an overview of the available actions .",
          icon: "litmas3.png",
        }
      );
    }

    if (Notification.permission === "granted") {
      showNotifications();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          showNotifications();
        }
      });
    }
  },

  methods: {
    ...mapActions("users", ["getAllUsers"]),

    ...mapActions("procurement", ["getAllPfis"]),

    async onProc() {
      await this.$router.push("/procurement/procurement");
    },

    async onComp() {
      await this.$router.push("/compliance/compliance");
    },

    async onFin() {
      await this.$router.push("/finance/finance");
    },

    async endSession() {
      await this.$buefy.dialog.confirm({
        title: "Log out",
        message: "Are you sure you want to <b>log out</b>?",
        cancelText: "Cancel",
        confirmText: "Yes",
        type: "is-warning",
        hasIcon: true,
        onConfirm: async () => {
          await this.$auth.logout();

          this.$buefy.toast.open({
            duration: 3000,
            message: "Until next time!",
            position: "is-top",
            type: "is-greeen",
          });
          this.$router.push({ path: "/auth/login" });
        },
      });
    },
    //  ...mapActions('users', ['getAllUsers']),
  },
};
</script>
<style>
.names {
  color: cornflowerblue;
  font-size: 1.2rem;
}

.is-greeen {
  background-color: rgb(120, 206, 177);
  color: whitesmoke;
}

.calf-card {
  width: 380px;
  height: 120px;
  background-color: rgb(188, 224, 245);
}

.text-calf-count {
  text-align: center;
  margin-left: 20px;
  font-size: 25px;
  color: rgb(15, 82, 94);
}

.box{
  height: 500px;
}

.box1{
  height: 450px;
}

.box2{
  height: 500px;
}

@media screen and (min-width: 1600px) {

  .calf-card {
  width: 220px;
  height: 220px;
  background-color: rgb(188, 224, 245);
}

.text-calf-count {
  text-align: center;
  margin-left: 20px;
  font-size: 65px;
  color: rgb(15, 82, 94);
}

.box1{
  height: 500px;
}

.box2{
  height: 500px;
}

}
</style>
