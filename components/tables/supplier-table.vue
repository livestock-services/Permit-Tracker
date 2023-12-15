<template>
    <div>
      <b-field grouped group-multiline>
        <b-select v-model="perPage">
          <option
            v-for="(option, index) in pageOptions"
            :key="index"
            :value="option"
          >
            {{ option }} entries
          </option>
        </b-select>

        <div class=" card px-2 py-2 mx-2 my-2">
          <h5> Total Suppliers: <span class="tag is-primary "> {{ supps.length }}</span></h5>
        </div>

  
        <div class="buttons">
          <b-button type="is-info" icon-left="refresh" @click="load"
            >Refresh</b-button
          >
        </div>

       
      </b-field>
      <b-table
        :data="tableData"
        :loading="loading"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        mobile-cards
        default-sort="pfiNumber"
        aria-next-label="Next Page"
        aria-previous-label="Previous Page"
        aria-page-label="Page"
        aria-current-label="Current Page"
        editable
        debounce-search="1200"
      >
        <b-table-column
          v-slot="props"
          field="supplierName"
          label="Supplier"
          searchable
        >
        <span class="tag is-info is-light "> {{ props.row.supplierName}} </span>
  
          <!-- {{ props.row.sumInsured }} -->
        </b-table-column>

       
  
        <b-table-column v-slot="props" label="Options">
          <span class="buttons">
            <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
           <!-- <b-tooltip label="Edit">
            <b-button
              type="is-secondary-outline"
              icon-left="book-edit"
              @click="captureReceipt(props.row)"
              class="edit mx-4 "
              >
            </b-button>
  
          </b-tooltip> -->

          <b-tooltip label="Edit" type="is-dark">
            
            <b-button
              type="is-secondary-outline"
              icon-left="pen"
              @click="captureReceipt(props.row)"
              class="is-success mx-2"
              >
            </b-button>

            </b-tooltip>
  
         
  
          </span>
        </b-table-column>
  
        <template #empty>
          <h4 class="is-size-4 has-text-centered">
            No suppliers yet. &#x1F4DA;. Click the
            <span
              :class="[
                'tag',
                {
                  'is-info': 'Refresh',
                },
              ]"
            >
              Refresh</span
            >
  
            button above to load your data
          </h4>
        </template>
      </b-table>
    </div>
  </template>
  
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import SupplierNameSnapshotModal from "@/components/modals/supplier-name-snapshot-modal.vue";
  export default {
    name: "SupplierTable",
  
    data() {
      return {
        isPaginated: true,
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 25, 50, 100],
        paginationPosition: "bottom",
        defaultSortDirection: "asc",
        sortIcon: "arrow-up",
        sortIconSize: "is-small",
        editable: true
      };
    },
  
    computed: {
      ...mapGetters("procurement", {
        loading: "loading",
        supps:"allSupps",
        totalSuppliers:"totalSupps"
        
  
        
      }),
  
      isEmpty() {
        return this.supps.length === 0;
        
      },
  
      isNames() {
        return this.names;
      },
  
      tableData() {
        return this.isEmpty ? [] : this.supps;
      },
    },
  
    async created() {
      await this.load();
      await this.getAllSupps();
      //this.selectPfi(this.suppliers[0])
    },
  
    methods: {
      ...mapActions("procurement", ["getAllSupps", "load", "selectSupplier"]),
  
      async load() {
        await this.getAllSupps();
      },
  
      captureReceipt(supplier) {
        this.selectSupplier(supplier);
        setTimeout(() => {
          this.$buefy.modal.open({
            parent: this,
            component: SupplierNameSnapshotModal,
            hasModalCard: true,
            trapFocus: true,
            canCancel: ["x"],
            destroyOnHide: true,
            customClass: "",
            onCancel: () => {
              this.$buefy.toast.open({
                message: `Payment cancelled!`,
                duration: 5000,
                position: "is-top",
                type: "is-info",
              });
            },
          });
        }, 300);
      },
    },
  };
  </script>
  
  <style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  
  .is-proc {
    background-color: rgb(78, 159, 252);
    color: aliceblue;
  }
  
  .preview {
    background-color: rgb(177, 219, 243);
  }
  
  .edit {
    background-color: rgb(124, 247, 151);
  }
  
  .content-area {
    grid-column: 2/3;
  }
  
  .is-peach{
    background-color: peachpuff;
  }
  
  
  .is-pink{
    background-color: rgb(248, 173, 219);
  }
  
  .is-green{
    background-color: rgb(200, 244, 134)
  }
  
  
  </style>
  