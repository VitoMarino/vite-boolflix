<script>
export default {
    data() {
        return {
            hoveredIndex: null // Tiene traccia della locandina attualmente sotto hover
        };
    },
    props: {
        searchSeries: {
            type: Object, // Lista di locandine (film)
            required: true
        }
    }
};
</script>

<template>
    <main>
        <div class="movie-list">
            <ul v-for="(movie, index) in searchSeries" :key="movie.id"
            :class="{hidden: hoveredIndex !== null && hoveredIndex !== index}"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex=null"    
            >
                <!--Immagine di copertina-->
                <li>
                    <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w342/' + searchSeries.poster_path" :alt="searchSeries.title">
                </li>
                <!--Titolo-->
                <li class="movie-description">
                    <p><strong>Titolo:</strong>{{ searchSeries.original_name }}</p>
                </li>
                <!--Flag-->
                <li  class="movie-description">
                    <img class="img-flag" src="../img/us.png" alt="flag">
                </li>
                <!--Stars-->
                <li  class="movie-description">
                    <p>
                        <strong>Voto:</strong>
                        <i v-for="i in (Math.floor(searchSeries.vote_average / 2))" class="fa-solid fa-star my-color-yellow"></i>
                        <i v-for="i in (5 - Math.floor(searchSeries.vote_average / 2))" class="fa-regular fa-star"></i>
                    </p>
                </li>
                <li  class="movie-description">
                    <p><strong>Overview:</strong>{{ searchSeries.overview }}</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixins.scss' as*;
    
    @include MovieSeries;
</style>
