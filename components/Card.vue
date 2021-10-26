<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-left">
         <b-form class="form">
            <p >
            Supplier Name:  {{ form.supplierName }}

          
          </p>

          <p >
            Supplier Email: {{ form.supplierEmail }}

          
          </p>

          <p >
           Purchase Order Number:   {{ form.purchaseOrderNumber }}

          
          </p>

          <p >
            PFI Number:   {{ form.pfiNumber }}

          
          </p>

          
         </b-form>

        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  data() {
       
  return { 
    title: "Summary",
    form:{
      supplierName: "Zoer Group",
      supplierEmail:"sales@zoer.co.za",
      purchaseOrderNumber:"130876",
      pfiNumber:"182991781"
    }
  }
  },

  computed:{
     ...mapGetters('procurement', {
      loading: 'loading',
      pfis: 'allPfis',
    }),
  },
  methods: {
   

    ...mapActions('procurement', ['getAllPfis','load' ]),

    

    async load(){
      await this.getAllPfis();
    },


  }



  
}
</script>
