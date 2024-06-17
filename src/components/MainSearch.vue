<script>
import {store} from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    props:{
        search: Object
    },
    methods:{
    }
}
</script>

<template>
    <main>
        <button @click="$emit('searchButton', testo)">CLICK</button>
        <input v-model="store.testo" type="text">
    </main>
</template>

<style lang="scss" scoped>

</style>