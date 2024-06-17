<script>
import axios from 'axios';

import MainSearch from './MainSearch.vue';
import MainSeries from './MainSeries.vue';
import MainMovie from './MainMovie.vue';

export default {
    components:{
        MainSearch,
        MainSeries,
        MainMovie
    },
    data() {
        return {
            movie:{

            },
            searchSeries:{

            }
        }
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

        //API Flag
        getFlag(language){
            axios.get("https://flagcdn.com/20x15/" + language + ".png")
            .then((response) => {
                this.fleg = response;
                console.log(this.fleg);
            })
            .catch(function(error) {
            console.log(error);
            })
        },
        // BUTTON
        searchButton(text){
            console.log(text)
            this.getSearchMovie(text)
        }
    }
}
</script>

<template>
    <main>
        <MainSearch @searchButton="searchButton"/>
        <MainMovie :movie="movie"/>
        <MainSeries/>
        
        
    </main>
</template>

<style lang="scss" scoped>

</style>