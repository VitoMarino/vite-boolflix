<script>
export default {
    data() {
        return {

        }
    },
    props:{
        searchMovie: Object
    }
}
</script>

<template>
    <main>
        <ul v-for="searchMovie in searchMovie" :key="searchMovie.id">
            <li>
                <img :src="'https://image.tmdb.org/t/p/w342/' + searchMovie.poster_path" :alt="searchMovie.title">
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
    </main>
    
</template>

<style lang="scss" scoped>

</style>