<script>
export default {
    data() {
        return {
        testo: "",
        string: "",
        }
    },
    methods:{
        string(){
            this.string
        }
    }
}
</script>

<template>
    <main>
        <button @click="$emit('searchButton' testo); string">CLICK</button>
        <input type="text">
    </main>
</template>

<style lang="scss" scoped>

</style>