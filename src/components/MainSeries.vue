<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchSeries:{
            }
        }
    },
    props:{
        series: Object,
    },
    methods:{
         // API Series
            getSearchSeries(ricerca){
            axios.get("https://api.themoviedb.org/3/search/tv" + ricerca)
            .then((response) => {
                this.searchSeries = response.data
                console.log(this.searchSeries);
            })
            .catch(function(error) {
            console.log(error);
            })
        },
    },
    
}
</script>

<template>
    <main>

    </main>
</template>

<style lang="scss" scoped>

</style>
