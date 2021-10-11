<template>
    <section class="card block">

         <!-- Policy Details -->
        <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Purchase Order Details</h4>
            <span class="card-header-icon">
            <b-icon icon="note-text-outline"></b-icon>
            </span>
        </div>
        </div>

        <div
         :class="['block box']"
         >

        <div class="columns">
            <div class="column is-one-third">
                <b-field label="Purchase Order No.">
                    <b-input v-model="purchaseOrderNumber"
                    placeholder="    Purchase Order No."></b-input>
                </b-field>
            </div>

             <div class="column is-one-third">
                <b-field  label="Supplier Name" required="true">
                    <b-input v-model="supplierName"
                    placeholder="Enter supplier name here..."></b-input>
                </b-field>
            </div>


            <div class="column is-one-third">

        <b-field label="Supplier Email"
        
            >
            <b-input type="email"
                placeholder="supplier@example.co.zm"
                maxlength="30">
            </b-input>
        </b-field>
            </div>

           

           
        </div>
        
        <div class="columns">

             <div class="column is-one-third">

             <b-field label="Issued Date">
                <b-datepicker
                    placeholder="<-- Click to select -->"
                    :min-date="minDate"
                    :max-date="maxDate">
                </b-datepicker>
            </b-field>
                </div>


            <div class="column is-third">
                <b-field label="Created By"
                   
                    >
                    <b-input placeholder="name..." maxlength="30"></b-input>
                </b-field>
            </div>

            <div class="column is-third">
                <b-field label="End Date">
                    <b-input type="password"
                        value="iwantmytreasure"
                        password-reveal>
                    </b-input>
                </b-field>

                
            </div>
        </div>

        </div>


        
        
    </section>
</template>

<script>
    export default {
        data() {
            const today = new Date()
            return {
                date: new Date(),
                minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
                maxDate: new Date(today.getFullYear() + 18, today.getMonth(), today.getDate())
            }
        }
    }
</script>