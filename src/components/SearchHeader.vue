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
        <nav>
            <ul>
                <li>
                    <img src="../img/Netflix_2015_logo.svg.png" alt="Netflix-logo"/>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Serie Tv</a>
                </li>
                <li>
                    <a href="">Film</a>
                </li>
                <li>
                    <a href="">Originali</a>
                </li>
                <li>
                    <a href="">Aggiunti di recente</a>
                </li>
                <li>
                    <a href="">La mia lista</a>
                </li>
            </ul>

            <ul>
                <li class="li-display">
                    <button @click="$emit('searchButton', testo); clean"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input @keyup.enter="$emit('searchButton', testo)" v-model="testo" type="text">
                </li>
                <li class="uppercase">
                    <a href="">Bambini</a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-bell"></i></a>
                </li>
                <li>
                    <a href=""><i class="fa-solid fa-face-smile-wink"></i></a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as*;
//Nav Header for search
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;

        ul {
            display: flex;
        }

        li.uppercase{
            text-transform: uppercase;
            color: white;
        }

        a{
            color: #7b7a7a;
            margin: .3rem;

            &:hover{
                color: white;
            }
        }
    }

    li.li-display{
        i{
            color: white;
        }

        input{
            
        }
    }

//IMG Logo Netflix
img{
    margin-right: 1rem;
    width: 80px;
    }

    button{
        @include button;
    }
</style>