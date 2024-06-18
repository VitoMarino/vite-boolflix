<script>
import axios from 'axios';

import SearchHeader from './SearchHeader.vue';
import MainMovie from './MainMovie.vue';
import MainSeries from './MainSeries.vue';


export default {
    components:{
        SearchHeader,
        MainMovie,
        MainSeries
    },
    data() {
        return {
            searchMovie:{},

            searchSeries:{},
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
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    </head>
    <header>
        <SearchHeader @searchButton="searchButton"/>
    </header>
    <main>
        <MainMovie :searchMovie="searchMovie"/>
        <MainSeries :searchSeries="searchSeries"/>
    </main>
</template>

<style lang="scss" scoped>
</style>