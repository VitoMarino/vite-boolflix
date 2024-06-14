<script>
export default {
    data() {
        return {
        testo: "",
        }
    },
    methods:{
        clean(){
            this.testo = ''
        }
    }
}
</script>

<template>
    <main>
        <button @click="$emit('searchButton', testo); clean">CLICK</button>
        <input v-model="testo" type="text">
    </main>
</template>

<style lang="scss" scoped>

</style>