<template>
  <div class="articleItem">
    <h2>{{ title }}</h2>
    <p class="articleItem__text">{{ text }}</p>
    <p class="views">Количество просмотров: <span  class="number">{{views}}</span></p>
    <!-- <ButtonRead />
    не получилось подтянуть в отдельный компонент данные для кнопок -->
    <div v-if="isButtonVisible" class="buttonProject">
      <button class="buttonProject__hw20">{{buttonText}} </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import ButtonRead from './button-read.vue';

export default Vue.extend({
  name: 'NewsArticle',

  // components: {
  //   ButtonRead,
  // },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    title() {
      return this.item.title;
    },
    text() {
      return this.item.text;
    },
    views() {
      return this.item.views;
    },
    buttonText() {
      return this.item.buttonText;
    },
    isButtonVisible() {
      return this.item.isButtonVisible;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articleItem {
  max-width: 700px;
  border: 1px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
h2 {
  margin: 40px 0 10px;
  font-size: 24px;
  color: darkgreen;
  text-align: left;
}

.articleItem__text {
  margin: 20px 0;
  font-size: 18px;
  text-align: justify;
}
.views{
  font-size: 14px;
  text-align: left;
  margin-bottom: 0;
}

.number{
  font-size: 16px;
  color: darkcyan;
}

.buttonProject {
  display: flex;
  justify-content: flex-end;
}

.buttonProject__hw20 {
  font-size: 14px;
  line-height: 14px;
  color: darkgreen;
  background-color: antiquewhite;
  border-color:darkgreen;
  border-radius: 8px;
  border-width: 1px;
  padding: 15px 30px;
  margin: 0 0 10px 0;
}

.buttonProject__hw20:hover {
  background-color: rgb(245, 208, 160);
}
</style>
