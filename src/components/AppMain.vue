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
            axios.get('https://api.themoviedb.org/3/search/movie&api_key=93df66e930b448fe4ba34c7efeb9d6b0')
            .then((response) => {
            this.search = response.data
            console.log();
            })
            .catch(function(error) {
            console.log(error);
            });
        },
    }
}
</script>

<template>
    <main>

    </main>
</template>

<style lang="scss" scoped>

</style>