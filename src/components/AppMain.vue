<script>
import axios from 'axios';

export default {
    data() {
        return {
            search:{

            }

        }
    },
    methods:{
        getSearch(){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=93df66e930b448fe4ba34c7efeb9d6b0&query=ritorno+al+futuro')
            .then((response) => {
                this.search = response.data.results;
                console.log(this.search);
            })
            .catch(function(error) {
            console.log(error);
            });
        },
    },
    created(){
        this.getSearch()
    }
}
</script>

<template>
    <main>
        <ul>
            <li v-for="search in search" :key="search.id">
                {{ search.title }}
            </li>
            <li v-for="search in search" :key="search.id">
                {{ search.original_title }}
            </li>
            <li v-for="search in search" :key="search.id">
                {{ search.original_language }}
            </li>
            <li v-for="search in search" :key="search.id">
                {{ search.vote_average }}
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped>

</style>