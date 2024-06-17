<script>
import axios from 'axios';
import MainSearch from './MainSearch.vue';
export default {
    components:{
        MainSearch,
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
        <!--MOVIE-->
        <MainSearch @searchButton="searchButton"/>
        <ul v-for="searchMovie in searchMovie" :key="searchMovie.id">
            <li>
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
            </li>
            <li>
                {{ searchMovie.title }}
            </li>
            <li>
                {{ searchMovie.original_title }}
            </li>
            <!--RITORNARCI PER VEDERE DI GESTIRE CON UN API-->
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
                <img :src="searchSeries.poster_path" alt="">
            </li>
            <li>
                {{ searchSeries.original_name }}
            </li>
            <!--RITORNARCI PER VEDERE DI GESTIRE CON UN API-->
            <li>
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <li>
                {{ searchSeries.vote_average }}
            </li>
        </ul>
    </main>
</template>
<style lang="scss" scoped>
</style>