<script>
export default {
    data() {
        return {
        testo: "",
        }
    },
    methods:{
    }
}
</script>

<template>
    <main>
        <button @click="$emit('searchButton', testo)">CLICK</button>
        <input v-model="testo" type="text">
    </main>
</template>

<style lang="scss" scoped>

</style>