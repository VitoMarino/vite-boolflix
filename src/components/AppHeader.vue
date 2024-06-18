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
        </div>
        
    </header>
</template>

<style lang="scss" scoped>
ul{
    display: flex;
    align-items: center;

}

ul a{
    color: white;
    margin: .3rem;
}


img{
    margin-right: 1rem;
    width: 50px;
    }

</style>