<template>
  <div class="row">
    <div class="col-md-3">
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="event-list-container">
        <ul>
          <li
            v-for="event in events"
            :key="event.id"
            v-on:click="setSelectedEventAndGetComments(event.id)"
          >
            <EventContainer :event="event" />
          </li>
        </ul>
      </div>
    </div>

    <div class="col-md-4">
      <EventDetails :event="selectedEvent" />
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col-md-6">Commentaires</div>
      </div>
      <CommentsList :comments="comments" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Event } from "../../models/event.model";
import { getAllEvents, getEventComments } from "../../data_test";
import EventContainer from "../ui/EventContainer.vue";
import EventDetails from "./EventDetails.vue";
import CommentsList from "../comment/commentsList.vue";
import { Comment } from "../../models/comment.model";

@Component({
  components: {
    EventContainer,
    EventDetails,
    CommentsList,
  },
})
export default class EventsList extends Vue {
  private events: Event[] = getAllEvents();
  private selectedEvent: Event = this.events[0];
  private comments: Comment[] = getEventComments(this.selectedEvent.id);

  public setSelectedEventAndGetComments(eventId: number) {
    this.events.forEach((event) => {
      if (event.id === eventId) {
        event.isSelected = true;
        this.selectedEvent = event;
      } else event.isSelected = false;
    });
    this.comments = getEventComments(this.selectedEvent.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
.event-list-container {
  background-color: #e6e6e6;
  overflow-y: scroll;
  height: 83%;
}
@media only screen and (max-width: 768px) {
  .event-list-container {
    transition: 1s;
    left: 0;
  }
}
</style>

