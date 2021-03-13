<template>
    <div v-if="isButtonVisible" class="buttonProject">
      <button class="buttonProject__hw20">{{buttonText}} </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonRead',

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
