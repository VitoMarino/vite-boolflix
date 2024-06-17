<script>
export default {
    data() {
        return {
            searchMovie:{
            },
        }
    },
    props:{
        movie: Object,
    },
    methods:{
        //API Search Movies
        getSearchMovie(ricerca){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=' + ricerca)
            .then((response) => {
                this.searchMovie = response.data.results;
                console.log(this.search);
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
        <ul v-for="searchMovie in searchMovie" :key="searchMovie.id">
            <li>
                {{ searchMovie.title }}
            </li>
            <li>
                {{ searchMovie.original_title }}        
            </li>
            <!--RITORNARE PER CAPIRE COME GESTIRE CON API-->
            <li>
                <img class="img-flag" src="../img/gb.png" alt="img">
            </li>
            <li>
                {{ searchMovie.vote_average }}
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>