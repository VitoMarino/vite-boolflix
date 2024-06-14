<script>
export default {
    data() {
        return {
        testo: "",
        stringa: "",
        }
    },
    methods:{
        clean(){
            this.stringa = ''
        }
    }
}
</script>

<template>
    <main>
        <button @click="$emit('searchButton'); clean">CLICK</button>
        <input type="text">
    </main>
</template>

<style lang="scss" scoped>

</style>