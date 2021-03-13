<template>
  <div class="mainWrapper">
      <h1>Новости про котиков</h1>

      <div class="artileList">
        <NewsArticle
          v-for="articleItem of articles"
          :key="articleItem.id"
          :item="articleItem"
        />
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewsArticle from './article-item.vue';

export default Vue.extend({
  name: 'ArticleApp',

  components: {
    NewsArticle,
  },

  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  font-size: 34px;
  color:green;
}
</style>
