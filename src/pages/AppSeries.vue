<script>
import axios from 'axios';

export default {
    data() {
        return {
            hoveredIndex: null,
            Series: {},
        }
    },
    methods: {
        // API Search Series
        getAllSeries() {
            axios.get('https://api.themoviedb.org/3/discover/tv?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=')
                .then((response) => {
                    this.Series = response.data.results;
                    console.log(this.Series);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },
    created() {
        this.getAllSeries();
    }
}
</script>

<template>
        <h2>
            Serie tv
        </h2>
        <div class="movie-list">
            <!--SERIE TV-->
            <ul v-for="(Serie, index) in Series" :key="Serie.id"
            :class="{hidden: hoveredIndex !== null && hoveredIndex !== index}"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex=null"
            >
                <!--Immagine di copertina-->
                <li>
                    <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w342/' + Serie.poster_path"
                        :alt="Serie.title">
                </li>
                <!--Titolo-->
                <li class="movie-description">
                    <p><strong>Titolo:</strong>{{ Serie.title }}</p>
                </li>
                <!--Titolo originale-->
                <li class="movie-description">
                    <p><strong>Titolo originale:</strong>{{ Serie.original_title }}</p>
                </li>
                <li class="movie-description">
                    <img class="img-flag" src="../img/us.png" alt="flag">
                </li>
                <!--STARS-->
                <li class="movie-description">
                    <p> <strong>Voto:</strong>
                        <i v-for="i in (Math.floor(Serie.vote_average / 2))"
                            class="fa-solid fa-star my-color-yellow"></i>
                        <i v-for="i in (5 - Math.floor(Serie.vote_average / 2))" class="fa-regular fa-star"></i>
                    </p>
                </li>
                <!--Overview-->
                <li class="movie-description">
                    <p><strong>Overview:</strong>{{ Serie.overview }}</p>
                </li>
            </ul>
        </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixins.scss' as*;

@include MovieSeries;

h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
    text-transform: uppercase;
}
</style>