<script>
import {store} from '../store.js';

export default {
    data() {
        return {
<<<<<<< HEAD
            store,
=======
        testo: "",
>>>>>>> parent of 8d20780 (API flag)
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
<<<<<<< HEAD
        <input v-model="store.testo" type="text">
=======
        <input v-model="testo" type="text">
>>>>>>> parent of 8d20780 (API flag)
    </main>
</template>

<style lang="scss" scoped>

</style>