<script>
import axios from 'axios';

export default {
    data() {
        return {
            Movies: {},
        }
    },
    methods: {
        //API Search Movies
        getAllMovies() {
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=')
                .then((response) => {
                    this.Movies = response.data.results;
                    console.log(this.Movies);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },
    created() {
        this.getAllMovies();
    }
}
</script>

<template>
    <h2>
        Film
    </h2>

    <!--FILM-->
    <div v-if="Movies.length > 0">
        <ul v-for="Movie in Movies" :key="Movie.id">
            <!--Immagine di copertina-->
            <li>
                <img class="my-img-hover" :src="'https://image.tmdb.org/t/p/w342/' + Movie.poster_path"
                    :alt="Movie.title">
            </li>
            <!--Titolo-->
            <li class="my-d-reverse">
                <p><strong>Titolo:</strong>{{ Movie.title }}</p>
            </li>
            <!--Titolo originale-->
            <li class="my-d-reverse my-d-none">
                <p><strong>Titolo originale:</strong>{{ Movie.original_title }}</p>
            </li>
            <li class="my-d-reverse">
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <!--STARS-->
            <li class="my-d-reverse">
                <p> <strong>Voto:</strong>
                    <i v-for="i in (Math.floor(Movie.vote_average / 2))"
                        class="fa-solid fa-star my-color-yellow"></i>
                    <i v-for="i in (5 - Math.floor(Movie.vote_average / 2))" class="fa-regular fa-star"></i>
                </p>
            </li>
            <!--Overview-->
            <li class="my-d-reverse">
                <p><strong>Overview:</strong>{{ Movie.overview }}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as*;

@include MovieSeries;

h2 {
    margin-left: 2rem;
    margin-bottom: 1.5rem;
    color: white;
    text-transform: uppercase;
}
</style>