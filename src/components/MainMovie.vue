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
                <h3> Titolo: {{ searchMovie.title }} </h3>
            </li>
            <li class="d-none-orginal-title">
                <h3> Titolo originale: {{ searchMovie.original_title }} </h3>
            </li>
            <li>
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <!--STARS-->
            <li>
                <i v-for="i in (Math.floor(searchMovie.vote_average / 2))" class="fa-solid fa-star color-yellow"></i>
                <i v-for="i in (5 - Math.floor(searchMovie.vote_average / 2))" class="fa-regular fa-star"></i>
            </li>
        </ul>
    </main>
    
</template>

<style lang="scss" scoped>

</style>