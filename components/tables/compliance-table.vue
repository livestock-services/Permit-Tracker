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

      <div class="buttons">
        <b-button type="is-warning" icon-left="refresh" @click="load"
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
      default-sort="policyNumber"
      aria-next-label="Next Page"
      aria-previous-label="Previous Page"
      aria-page-label="Page"
      aria-current-label="Current Page"
      debounce-search="1200"
    >
      <b-table-column
        v-slot="props"
        field="supplierName"
        label="Supplier Name"
        searchable
      >
      <span class="tag is-info is-light ">   {{ props.row.supplierName }} </span>
      </b-table-column>

      <b-table-column v-slot="props" field="supplierComment" label="Extra Details" sortable>
        <span class="tag is-peach ">  {{ props.row.supplierComment }} </span>
      </b-table-column>

      <b-table-column v-slot="props" field="pfiNumber" label="PFI No." sortable>
        <span class="tag is-peach ">  {{ props.row.pfiNumber }} </span>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="urchaseOrderNumber"
        label="Purchase Order No."
        sortable
      >
      <span class="tag is-green ">  {{ props.row.purchaseOrderNumber }} </span>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="startDate"
        label="Current Status was updated on this date  "
        searchable
      >
      <span class="tag is-info is-light ">  {{ props.row.date }} </span>
      </b-table-column>

      <b-table-column v-slot="props" field="status" label="Current Status" sortable>
        <span
        
          :class="[
            'tag',

            {
              'is-info':
                props.row.status === 'New record added',
            },
            {
              'is-warning is-light':
                props.row.status ===
                  'New PFI added, awaiting acknowledgement'
               
            },
            {
              'is-success is-light':
                props.row.status === 'Acknowledged By Compliance',
            },
            {
              'is-warning':
                props.row.status ===
                'PA in motion, awaiting Finance Approval',
            },
            {
              'is-success':
                props.row.status ===
                'PA approved, awaiting Permit' || props.row.status ===
                'PA Approved, awaiting Permit',
            },

            {
              'is-pink':
                props.row.status === 'Permit received' 
            },
          ]"
          >{{ props.row.status }}</span
        >
      </b-table-column>

      <b-table-column v-slot="props" label="Options">
        <span class="buttons">
          <!-- <b-button type="is-secondary-outline" icon-left="eye">View</b-button> -->
          <b-tooltip type="is-success is-light mx-2 "  label="Preview">
            <b-button
            type="is-secondary-outline"
            icon-left="eye-check"
            @click="captureReceipt(props.row)"
            class="preview is-primary is-light"
            >View More</b-button
          >

          </b-tooltip>
          
        </span>
      </b-table-column>

      <template #empty>
        <h4 class="is-size-4 has-text-centered">
          No Records yet. &#x1F4DC;. Click the
          <span
            :class="[
              'tag',
              {
                'is-warning': 'Refresh',
              },
            ]"
          >
            Refresh</span
          >

          button above to load your data.
        </h4>
      </template>
    </b-table>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import ComplianceSnapshotModal from "@/components/modals/compliance-snapshot-modal.vue";
export default {
  name: "UnreceiptedDebitsTable",

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
    };
  },
  computed: {
    ...mapGetters("procurement", {
      loading: "loading",
      pfis: "allPfis",
    }),

    isEmpty() {
      return this.pfis.length === 0;
    },

    isNames() {
      return this.names;
    },

    tableData() {
      return this.isEmpty ? [] : this.pfis;
    },
  },

  async created() {
    await this.load();
    //this.selectPfi(this.pfis[0])
  },

  methods: {
    ...mapActions("procurement", ["getAllPfis", "load", "selectPfi"]),

    async load() {
      await this.getAllPfis();
    },

    captureReceipt(pfi) {
      this.selectPfi(pfi);
      setTimeout(() => {
        this.$buefy.modal.open({
          parent: this,
          component: ComplianceSnapshotModal,
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

.is-comp {
  background-color: rgb(255, 217, 168);
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
