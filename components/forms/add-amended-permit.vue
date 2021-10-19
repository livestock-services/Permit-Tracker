<template>
    <section class="card block">
        
         <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Add an Amended Permit</h4>
            <span class="card-header-icon">
            <b-icon icon="note-text-outline"></b-icon>
            </span>
        </div>
        </div>

        <div
         :class="['block box']"
         >

        <div class="box">
            <div class="columns is-right">

            <div class="column is-one-third">
         <b-field label="Permit No." >
            <b-input v-model="permitNumber"></b-input>
        </b-field>

            </div>

            <div class="column is-one-third">
         <b-field label="PFI No." >
            <b-input v-model="pfiNumber"></b-input>
        </b-field>

            </div>

            

           

        </div>

        <div class="columns">
            <div class="column is-half">
                <b-field label="Reason for Amendment">
                    <b-input v-model="reasonForAmendment" maxlength="200" type="textarea"></b-input>
                </b-field>
            </div>
            </div>
        
        <b-button type="is-info">
            Submit
        </b-button>
       
        </div>

         
        </div>
        
    </section>
</template>

<script>
    export default {
        name: 'Permit Amendment',
        
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>

</style>