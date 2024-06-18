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
            <li>
                <img :src="'https://image.tmdb.org/t/p/w342/' + searchSeries.poster_path" :alt="searchSeries.title">
            </li>
            <li>
                <h3> Titolo: {{ searchSeries.original_name }} </h3>
            </li>
            <li>
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <li>
                {{ searchSeries.vote_average }}
                <i class="fa-regular fa-star"></i>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>
