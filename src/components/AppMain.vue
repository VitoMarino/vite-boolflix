<script>

import MainSearch from './MainSearch.vue';
import MainSeries from './MainSeries.vue';
import MainMovie from './MainMovie.vue';

export default {
    components:{
        MainSearch,
        MainSeries,
        MainMovie
    },
    data() {
        return {

            search:{},

            movie:{},

            series:{}

        }
    },
    methods:{
    }
}
</script>

<template>
    <main>
        <MainSearch :search="search"/>
        <MainMovie :movie="movie"/>
        <MainSeries :series="series"/>
    </main>
</template>

<style lang="scss" scoped>

</style>