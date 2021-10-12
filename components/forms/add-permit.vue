<template>
    <section class="card block">
        
         <div class="block card">
        <div class="card-header">
            <h4 class="card-header-title is-4">Add a Permit</h4>
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
            <b-input v-model="name"></b-input>
        </b-field>

            </div>

            <div class="column is-one-third">
         <b-field label="PFI No." >
            <b-input v-model="name"></b-input>
        </b-field>

            </div>

           <div class="column is-one-third">
         <b-field label="Authorization Body">
            <b-input v-model="name"></b-input>
        </b-field>

            </div>

        </div>

        

       
        </div>
        </div>
        
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        }
    }
</script>

<style scoped>

</style>