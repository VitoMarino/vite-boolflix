<script>
import axios from 'axios';
import MainSearch from './MainSearch.vue';
import MainMovie from './MainMovie.vue';
import MainSeries from './MainSeries.vue';
export default {
    components:{
        MainSearch,
        MainMovie,
        MainSeries
    },
    data() {
        return {
            searchMovie:{
            },

            searchSeries:{

            },
        }
    },
    methods:{
        //API Search Movies
        getSearchMovie(ricerca){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=' + ricerca)
            .then((response) => {
                this.searchMovie = response.data.results;
                console.log(this.searchMovie);
            })
            .catch(function(error) {
            console.log(error);
            })
        },

        // API Search Series
        getSearchSeries(ricerca){
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=' + ricerca)
            .then((response) => {
                this.searchSeries = response.data.results;
                console.log(this.searchSeries);
            })
            .catch(function(error) {
            console.log(error);
            })
        },
        searchButton(text){
            console.log(text)
            this.getSearchMovie(text)
            this.getSearchSeries(text)
        }
    }
}
</script>
<template>
    <main>
        <MainSearch @searchButton="searchButton"/>
        <MainMovie :searchMovie="searchMovie"/>
        <MainSeries :searchSeries="searchSeries"/>
    </main>
</template>
<style lang="scss" scoped>
</style>