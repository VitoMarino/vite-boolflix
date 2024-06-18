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
        <div>
            <ul v-for="searchMovie in searchMovie" :key="searchMovie.id">
                <!--Immagine di copertina-->
                <li>
                    <img class="my-img-hover" :src="'https://image.tmdb.org/t/p/w342/' + searchMovie.poster_path" :alt="searchMovie.title">
                </li>
                <!--Titolo-->
                <li class="my-d-reverse">
                    <p><strong>Titolo:</strong>{{ searchMovie.title }}</p>
                </li>
                <!--Titolo originale-->
                <li class="my-d-reverse">
                    <p><strong>Titolo originale:</strong>{{ searchMovie.original_title }}</p>
                </li>
                <li class="my-d-reverse">
                    <img class="img-flag" src="../img/us.png" alt="flag">
                </li>
                <!--STARS-->
                <li class="my-d-reverse">
                    <p> <strong>Voto:</strong>  
                        <i v-for="i in (Math.floor(searchMovie.vote_average / 2))" class="fa-solid fa-star my-color-yellow"></i>
                        <i v-for="i in (5 - Math.floor(searchMovie.vote_average / 2))" class="fa-regular fa-star"></i> 
                    </p>
                </li>
                <!--Overview-->
                <li class="my-d-reverse">
                    <p><strong>Overview:</strong>{{ searchMovie.overview }}</p>
                </li>
            </ul>
        </div>
    </main>
    
</template>

<style lang="scss" scoped>
    div{
        width: 100%;
    }
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
                color: white;
                display: inline-block;
                text-align: center;
            }
            img.img-flag{
                display: none;
            }
        }
    }
</style>