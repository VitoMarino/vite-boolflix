<script>

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
            this.getSearch(text)
        }
    }
}
</script>

<template>
    <main>
        <MainSearch :search="search"/>
        <MainMovie :movie="movie"/>
        <MainSeries :series="series"/>
    </main>
</template>

<style lang="scss" scoped>

</style>