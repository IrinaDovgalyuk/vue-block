<template>
  <div id="app">
    <ArticleApp
      :articles="listArticles"
     />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleApp from './components/article-app/index.vue';
import Article from './components/article-app/article-item-class';

const listArticles = [
  new Article({
    title: 'Супер важная статья!',
    text: 'В подмосковье кто-то погладил котика!',
    views: 100,
    buttonText: 'Читать 1 статью',
    isButtonVisible: false,
  }),
  new Article({
    title: 'Котики не глажены уже двое суток в подмосковье!',
    text: 'Ужасные новости: наши друзья меньшие остались без ласки на долгое времяб всё из-за...',
    views: 500,
    buttonText: 'Читать 2 статью',
    isButtonVisible: false,
  }),
  new Article({
    title: 'Котики лежат кверху пузиками!',
    text: 'Подмосковным котикам все также мало нежности. Они лежат кверху пузиками и ждут пока их погладят',
    views: 700,
    buttonText: 'Читать 3 статью',
    isButtonVisible: true,
  }),
  new Article({
    title: 'Котики подрались!',
    text: 'Серый крокодил, Васька, получил по морде и убежал спать в горшке с пальмой! А какие там листочки - надо срочно их сьесть',
    views: 300,
    buttonText: 'Читать 4 статью',
    isButtonVisible: false,
  }),
];

export default Vue.extend({
  name: 'App',
  components: {
    ArticleApp,
  },

  data() {
    return {
      listArticles,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
