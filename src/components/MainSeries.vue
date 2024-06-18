<script>
export default {
    data() {
        return {

        }
    },
    props:{
        searchSeries: Object
    }
}
</script>

<template>
    <main>
        <ul v-for="searchSeries in searchSeries" :key="searchSeries.id">
            <!--Immagine di copertina-->
            <li>
                <img class="my-img-hover" :src="'https://image.tmdb.org/t/p/w342/' + searchSeries.poster_path" :alt="searchSeries.title">
            </li>
            <!--Titolo-->
            <li class="my-d-reverse">
                <p><strong>Titolo:</strong>{{ searchSeries.original_name }}</p>
            </li>
            <!--Flag-->
            <li class="my-d-reverse">
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <!--Stars-->
            <li class="my-d-reverse">
                <p>
                    <strong>Voto:</strong>
                    <i v-for="i in (Math.floor(searchSeries.vote_average / 2))" class="fa-solid fa-star my-color-yellow"></i>
                    <i v-for="i in (5 - Math.floor(searchSeries.vote_average / 2))" class="fa-regular fa-star"></i>
                </p>
            </li>
            <li class="my-d-reverse">
                <p><strong>Overview:</strong>{{ searchSeries.overview }}</p>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/mixins.scss' as*;
    
    @include MovieSeries;
</style>
