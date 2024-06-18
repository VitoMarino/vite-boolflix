<script>
export default {
    data() {
        return {
            testo:''
        }
    },
    methods:{
    }
}
</script>

<template>
    <header>
        <button @click="$emit('searchButton', testo)">CLICK</button>
        <input @keyup.enter="$emit('searchButton', testo)" v-model="testo" type="text">
    </header>
</template>

<style lang="scss" scoped>

</style>