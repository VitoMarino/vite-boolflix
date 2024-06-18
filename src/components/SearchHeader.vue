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
        <div>
            <button @click="$emit('searchButton', testo)">CLICK</button>
            <input @keyup.enter="$emit('searchButton', testo)" v-model="testo" type="text">
        </div>
    </header>
</template>

<style lang="scss" scoped>
    div{
        display: flex;
        justify-content: end;
        align-items: center;
    }
</style>