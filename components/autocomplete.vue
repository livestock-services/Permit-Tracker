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
                    'MSD Air',
                    'Virbac',
                    'MSD Belgium',
                    'Elanco',
                    'Zoetis Belgium',
                    'Zoetis Air'
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