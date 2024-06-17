<script>
import axios from 'axios';

import MainSearch from './MainSearch.vue';
export default {
    components:{
        MainSearch
    },
    data() {
        return {
            searchMovie:{
            },

            searchSeries:{

            },

            flag:{
            
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

        // API flag
        getFlag(language){
            axios.get('https://flagcdn.com/20x15/it.png' + language + ".png")
            .then((response) => {
                this.fleg = response;
                console.log(this.fleg);
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
        <!--MOVIE-->
        <MainSearch @searchButton="searchButton"/>
        <ul v-for="searchMovie in searchMovie" :key="searchMovie.id">
            <li>
                {{ searchMovie.title }}
            </li>
            <li>
                {{ searchMovie.original_title }}
            </li>
            <li>
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <li>
                {{ searchMovie.vote_average }}
            </li>
        </ul>

        <!--SERIES-->
        <ul v-for="searchSeries in searchSeries" :key="searchSeries.id">
            <li>
                {{ searchSeries.original_name }}
            </li>
            <li>
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <li>
                {{ vote_average }}
            </li>
        </ul>
    </main>
</template>
<style lang="scss" scoped>
</style>