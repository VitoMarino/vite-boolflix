<script>
export default {
    data() {
        return {
            hoveredIndex: null // Tiene traccia della locandina attualmente sotto hover
        };
    },
    props: {
        searchMovie: {
            type: Object, // Lista di locandine (film)
            required: true
        }
    }
};
</script>

<template>
    <main>
        <div class="movie-list">
            <!--
            1. Stato Iniziale:
                hoveredIndex è null.
                Nessuna locandina ha la classe hidden, quindi tutte sono visibili.
            2.	Hover su una Locandina:
                Ad esempio, passi il mouse sulla locandina con index = 2.
                hoveredIndex diventa 2.
                La classe hidden viene applicata a tutte le locandine il cui index non è 2.
            3. Effetto Visivo:
                La locandina con index = 2 rimane visibile.
                Tutte le altre hanno opacity: 0 e scompaiono.
            4. Mouse Fuori dalla Locandina:
                Quando togli il mouse, hoveredIndex torna a null.
                La classe hidden non si applica più a nessuna locandina, e tutte tornano visibili.-->
            <ul v-for="(movie, index) in searchMovie" :key="movie.id"
                :class="{ hidden: hoveredIndex !== null && hoveredIndex !== index }" @mouseenter="hoveredIndex = index"
                @mouseleave="hoveredIndex = null">
                <!-- Immagine di copertina -->
                <li>
                    <img class="movie-poster" :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
                        :alt="movie.title" />
                </li>
                <!-- Titolo -->
                <li class="movie-description">
                    <p><strong>Titolo:</strong> {{ movie.title }}</p>
                </li>
                <!-- Titolo originale -->
                <li class="movie-description">
                    <p><strong>Titolo originale:</strong> {{ movie.original_title }}</p>
                </li>
                <!-- Stelle (Voto) -->
                <li class="movie-description">
                    <p>
                        <strong>Voto:</strong>
                        <i v-for="i in Math.floor(movie.vote_average / 2)" :key="'filled-star-' + i"
                            class="fa-solid fa-star star-yellow"></i>
                        <i v-for="i in (5 - Math.floor(movie.vote_average / 2))" :key="'empty-star-' + i"
                            class="fa-regular fa-star"></i>
                    </p>
                </li>
                <!-- Overview -->
                <li class="movie-description">
                    <p><strong>Overview:</strong> {{ movie.overview }}</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as*;

@include MovieSeries;
</style>