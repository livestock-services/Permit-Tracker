<template>
    <section>
       
        <b-field label="Select a Supplier">
            <b-autocomplete
                
                v-model="autocomplete"
                :data="filteredDataArray"
                placeholder="e.g. Zoetis, MSD, Elanco"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                data: [

                'Antrovet',
                'Biocheck',
                'Boehringer Air',
                'Boehringer Road',
                'Bupo', 
                'CVRL',
                'DIAG air',              
                'DIAG Road',
                'Elanco Air',
                'Elanco Road',
                'Huvpharma',
                'Kruuse',
                'Kyron',
                'Kyron Agri',
                'MSD Air',
                'MSD Butalex',
                'MSD Imizol',
                'MSD Nilzan',
                'MSD Poultry',
                'MSD Prondil',
                'MSD Road',
                'OBP',
                'Prionics', 
                'Schippers',
                'Virbac',
                'Zoetis Belgium', 
                'Zoetis SA air',
                'Zoetis SA road',


                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>