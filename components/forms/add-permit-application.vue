        <template>
        <section class="card block">
            <!-- Policy Details -->
            <div class="block card">
            <div class="card-header">
                <h4 class="card-header-title is-4">Add a Permit Application</h4>
                <span class="card-header-icon">
                <b-icon icon="note-text-outline"></b-icon>
                </span>
            </div>
            </div>

            <b-form v-model="permitApplicationForm">
            
            <div :class="['block box']">
                <div class="columns">
                <div class="column is-one-quarter">
                    <b-field label="Select a Supplier">
                        <b-select
                        
                        v-model="supplierName"
                        placeholder="Select Supplier"
                    >

                    <option value= "Antrovet">Antrovet</option>
                        <option value="Biocheck">Biocheck</option>
                        <option value="Boehringer Air">Boehringer Air</option>
                        <option value="Boehringer Road">Boehringer Road</option>
                        <option value= "Bupo">Bupo</option>
                        <option value="CVRL">CVRL</option>
                        <option value="DIAG Air">DIAG Air</option>
                        <option value="DIAG Road">DIAG Road</option>
                        <option value="Elanco Air">Elanco Air</option>
                        <option value="Elanco Road">Elanco Road</option>
                        <option value= "Antrovet">Antrovet</option>
                        <option value="Huvpharma">Huvpharma</option>
                        <option value="Kruuse">Kruuse</option>
                        <option value="Kyron">Kyron</option>
                        <option value="Kyron Agri">Kyron Agri</option>
                        <option value="MSD Air">MSD Air</option>
                        <option value="MSD Butalex">MSD Butalex</option>
                        <option value="MSD Imizol">MSD Imizol</option>
                        <option value="MSD Nilzan">MSD Nilzan</option>
                        <option value="MSD Poultry">MSD Poultry</option>
                        <option value="MSD Prondil">MSD Prondil</option>
                        <option value="MSD Road">MSD Road</option>
                        <option value="OBP">OBP</option>
                        <option value="Prionics">Prionics</option>
                        <option value="Schippers">Schippers</option>
                        <option value="Virbac">Virbac</option>
                        <option value="Zoetis Belgium">Zoetis Belgium</option>
                        <option value="Zoetis SA Air">Zoetis SA Air</option>
                        <option value="Zoetis SA Road">Zoetis SA Road</option>
                
                    </b-select>
                    </b-field>
                </div>

                <div class="column is-one-quarter">
                    <b-field label="PFI No.">
                    <b-input
                        :disabled="!supplierName"
                        v-model="pfiNumber"
                        placeholder="Enter PFI No..."
                    ></b-input>
                    </b-field>
                </div>

                <div class="column is-one-quarter">
                    <b-field label="Currency">
                    <b-select
                        
                        v-model="selectCurrency"
                        placeholder="Select Currency"
                    >
                        
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                        <option value="ZAR">ZAR</option>
               
                    </b-select>
                    </b-field>
                </div>

                <div class="column is-one-quarter">
                    <b-field label="PFI Value">
                    <b-input
                        :disabled="!pfiNumber"
                        v-model="pfiValue"
                        placeholder="Enter PFI Value..."
                    >
                    </b-input>
                    </b-field>
                </div>

                </div>

                

                <div class="columns">
                    <div class="column is-one-quarter">
                    <b-field label="Exchange Rate">
                        <b-input
                        :disabled="!pfiNumber"
                        v-model="exchangeRate"
                        placeholder="Enter Exchange Rate..."
                        >
                        </b-input>
                    </b-field>
                    </div>

                    <div class="column is-one-quarter">
                    <b-field label="Fee Type">
                        <b-select
                        :disabled="!exchangeRate"
                        v-model="feeType"
                        placeholder="Select Fee Type"
                        >
                        <option value="Market Authorized">Market Authorized</option>
                        <option value="Market Non-Authorized">
                            Market Non-Authorized
                        </option>
                        </b-select>
                    </b-field>
                    </div>
                </div>
                
                <div class="columns">

                <div class="column is-one-quarter">

                <b-field label="Regulatory Body">
                    <b-select 
                            :disabled="!feeType"
                            v-model="authBody" 
                            placeholder="Select Regulatory Body"
                                > 
                            <option value="ZAMRA">ZAMRA</option>
                            <option value="ZEMA">ZEMA</option>
                            
                    </b-select>
                </b-field>

                </div>
                
                
                </div>

               

                <p class="content"><b>Selected Supplier:</b> {{ supplierName }}</p>
                
                <p class="content"><b>PFI Number:</b> {{ pfiNumber }}</p>

                <p class="content"><b>Currency:</b> {{ selectCurrency }}</p>

                <p class="content"><b>PFI Value:</b> {{ pfiValue }}</p>

                <p class="content"><b>Exchange Rate:</b> {{ exchangeRate }}</p>

                <p class="content"><b>Fee Type:</b> {{ feeType }}</p>

                <p class="content"><b>Regulatory Body:</b> {{ authBody }}</p>

                <div class="buttons columns">
                <div class="column is-one-third">
                    <b-button
                    :disabled="!authBody"
                    @click="onSubmit"
                    type="is-info"
                    expanded
                    >
                    Submit
                    </b-button>
                </div>
                </div>
            </div>
            </b-form>
        </section>
        </template>

        <script>
        import { mapFields } from "vuex-map-fields";
        import { mapActions, mapGetters } from "vuex";
        import { DateTime } from "luxon";
        import cloneDeep from "lodash/cloneDeep";

        import Upload from "../upload/upload.vue";

        export default {
        name: "Purchase Order",
        data() {
            const today = new Date();
            return {
            data: [
                "Antrovet",
                "Biocheck",
                "Boehringer Air",
                "Boehringer Road",
                "Bupo",
                "CVRL",
                "DIAG air",
                "DIAG Road",
                "Elanco Air",
                "Elanco Road",
                "Huvpharma",
                "Kruuse",
                "Kyron",
                "Kyron Agri",
                "MSD Air",
                "MSD Butalex",
                "MSD Imizol",
                "MSD Nilzan",
                "MSD Poultry",
                "MSD Prondil",
                "MSD Road",
                "OBP",
                "Prionics",
                "Schippers",
                "Virbac",
                "Zoetis Belgium",
                "Zoetis SA air",
                "Zoetis SA road",
            ],

            name: "",
            selected: null,
            date: today.toDateString,
            minDate: new Date(
                today.getFullYear() - 80,
                today.getMonth(),
                today.getDate()
            ),
            maxDate: new Date(
                today.getFullYear() + 18,
                today.getMonth(),
                today.getDate()
            ),
            };
        },
        computed: {
            ...mapFields("compliance", [
            "permitApplicationForm",
            "permitApplicationForm.supplierName",
            "permitApplicationForm.pfiNumber",
            "permitApplicationForm.selectCurrency",
            "permitApplicationForm.pfiValue",
            "permitApplicationForm.exchangeRate",
            "permitApplicationForm.feeType",
            "permitApplicationForm.authBody",
            ]),

            filteredDataArray() {
            return this.data.filter((option) => {
                return (
                option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
                );
            });
            },
        },
        created() {
            // this.clearForm()
        },
        methods: {
            ...mapActions("compliance", ["addNewPermitApplication", "load"]),
            async onSubmit() {
            try {
                // await this.load();
                await this.addNewPermitApplication();
                this.$buefy.toast.open({
                message: "Permit Application Added Successfully!",
                duration: 2000,
                position: "is-top",
                type: "is-success",
                });
                this.clearForm();
            } catch (error) {
                this.$buefy.toast.open({
                message: "Please Verify Your Details!",
                duration: 2000,
                position: "is-top",
                type: "is-danger",
                });
            }
            },
            clearForm() {
            this.permitApplicationForm = {
                supplierName: null,
                pfiNumber: null,
                selectCurrency:null,
                pfiValue: null,
                exchangeRate: null,
                feeType:null,
                authBody:null
            };
            //this.reloadPage()
            },
            reloadPage() {
            location.reload();
            },
        },
        components: { Upload },
        };
        </script>