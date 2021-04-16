<template>
  <h1>{{ title }}</h1>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PageTitle extends Vue {
  @Prop() readonly title!: string;
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: left;
}
</style>
