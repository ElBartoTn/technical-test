<template>
  <div id="app">
    <div class="container-fluid">
     <EventsPage/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EventsPage from "./components/pages/EventsPage.vue";

@Component({
  components: {
    EventsPage,
  },
})
export default class App extends Vue {}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #898989;
  margin-top: 60px;
}

@import'~bootstrap/dist/css/bootstrap.css';
</style>
