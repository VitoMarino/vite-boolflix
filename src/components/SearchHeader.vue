<script>
export default {
    data() {
        return {
            testo:'',

            visibileVariable: false,

            navLinks: [
                {
                    label: 'Home',
                    name: 'home',
                },
                {
                    label: 'Film',
                    name: 'film'
                },
                {
                    label: 'Serie Tv',
                    name: 'series'
                }
            ]
        }
    },
    methods:{
        invert() {
            console.log(this.visibileVariable);
            if(this.visibileVariable === false){
                this.visibileVariable = true
            } else {
                this.visibileVariable = false
            };
        }
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
                <li v-for="navLink in navLinks">
                    <router-link :to="{name: navLink.name}">
                        {{ navLink.label }}
                    </router-link>
                </li>
            </ul>

            <ul>
                <li class="li-display">
                    <button @click="invert()"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <input :class="visibileVariable === false ? 'hidden' : 'visibile' " @keyup.enter="$emit('searchButton', testo)" v-model="testo" type="text">
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

input.hidden {
    display: none;
}

input.visibile {
    display: inline-block;
}

button{
    margin-right: .3rem;
}


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
            margin: .4rem;

            &:hover{
                color: white;
            }
        }
    }

    li.li-display{
        i{
            color: white;
        }
    }

//IMG Logo Netflix
img{
    margin-right: 1rem;
    width: 125px;
    }

    button{
        @include button;
    }
</style>