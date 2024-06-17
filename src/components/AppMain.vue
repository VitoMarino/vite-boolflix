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
            search:{

            },

            flag:{

            },

            searchSeries:{

            }
        }
    },
    methods:{
        //API Search Movies
        getSearch(ricerca){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=' + ricerca)
            .then((response) => {
                this.search = response.data.results;
                console.log(this.search);
            })
            .catch(function(error) {
            console.log(error);
            })
        },
        
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
            this.getSearch(text)
            this.getSearchSeries(text)
        }
    }
}
</script>

<template>
    <main>
        <MainSearch @searchButton="searchButton" />
        <MainSeries @searchButton="searchButton"/>
        <MainMovie/>
        <ul v-for="search in search" :key="search.id">
            <li>
                {{ search.title }}
            </li>
            <li>
                {{ search.original_title }}        
            </li>
            <!--RITORNARE PER CAPIRE COME GESTIRE CON API-->
            <li>
                <img class="img-flag" src="../img/gb.png" alt="img">
            </li>
            <li>
                {{ search.vote_average }}
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>