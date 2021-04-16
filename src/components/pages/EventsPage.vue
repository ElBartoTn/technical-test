<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <PageTitle title="Mes évènements" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <EventsList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EventsList from "../event/EventsList.vue";
import PageTitle from "../ui/PageTitle.vue";

@Component({
  components: {
    EventsList,
    PageTitle,
  },
})
export default class EventsPage extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
