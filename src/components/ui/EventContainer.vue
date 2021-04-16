<template>
  <div class="container event-container mt-3">
    <div
      class="row card-title"
      v-bind:class="[event.isSelected ? 'selected' : '']"
    >
      <div class="col-md-12 event-text">
        {{ event.title }}
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Event } from "@/models/event.model";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class EventContainer extends Vue {
  @Prop() readonly event!: Event;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-title {
  text-align: center;
}
.selected {
  border: 2px solid #82bc00;
  padding: 10px;
}
.event-container {
  box-shadow: 2px 2px;
  background-color: white;
}
.event-text {
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>

