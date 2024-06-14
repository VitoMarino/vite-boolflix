<script>
import MainSearch from './MainSearch.vue';

import axios from 'axios';

export default {
    components:{
        MainSearch
    },
    data() {
        return {
            search:{

            },
        }
    },
    methods:{
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
        searchButton(text){
            console.log(text)
            this.getSearch(text)
        }
    }
}
</script>

<template>
    <main>
        <MainSearch @searchButton="searchButton"/>
        <ul v-for="search in search" :key="search.id">
            <li>
                {{ search.title }}
            </li>
            <li>
                {{ search.original_title }}
            </li>
            <li>
                {{ search.original_language }}
            </li>
            <li>
                {{ search.vote_average }}
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>