<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {

    }
  },
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader/>

  <AppMain/>
</template>

<!--Se non inserisco lo scope TUTTE le regole saranno applicate a TUTTA la mia applicazione. 
In questo caso è quello che voglio dato che questa (APP.Vue) è la madre di tutte-->

<!--QUESTO VALE PER IL GENERAL. Se voglio usare le PARTIALS, devo importarlo nel singolo file
dove voglio venga applicata quella regola. Altrimenti non lo importa.-->
<style lang="scss">
  @use './styles/general.scss';
</style>

