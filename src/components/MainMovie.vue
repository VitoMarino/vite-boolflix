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
                <img class="my-img-hover" :src="'https://image.tmdb.org/t/p/w342/' + searchMovie.poster_path" :alt="searchMovie.title">
            </li>
            <li class="my-d-reverse">
                <h3> Titolo: {{ searchMovie.title }} </h3>
            </li>
            <li class="my-d-reverse">
                <h3> Titolo originale: {{ searchMovie.original_title }} </h3>
            </li>
            <li class="my-d-reverse">
                <img class="img-flag" src="../img/us.png" alt="flag">
            </li>
            <!--STARS-->
            <li class="my-d-reverse">
                <i v-for="i in (Math.floor(searchMovie.vote_average / 2))" class="fa-solid fa-star my-color-yellow"></i>
                <i v-for="i in (5 - Math.floor(searchMovie.vote_average / 2))" class="fa-regular fa-star"></i>
            </li>
            <li class="my-d-reverse">
                {{ searchMovie.overview }}
            </li>
        </ul>
    </main>
    
</template>

<style lang="scss" scoped>
    ul{
        display: inline-block;
        width: calc(100% / 3);
        text-align: center;

        li.my-d-reverse{
            display: none;
        }

        &:hover{
            img.my-img-hover {
                display: none;
            }
            li.my-d-reverse{
                display: inline;
            }
        }
    }
</style>