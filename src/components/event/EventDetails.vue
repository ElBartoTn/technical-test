<template>
  <div>
    <form>
      <!-- Title With creation info -->
      <h1 class="col-md-12">{{ event.title }}</h1>
      <h4 class="col-md-12">
        Crée le {{ event.creationDate | formatDate }} à
        {{ event.creationDate | formatTime(true) }} par {{ event.createdBy }}
      </h4>
      <!-- Title  -->
      <div class="form-group">
        <label for="title">Titre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="event.title"
        />
      </div>
      <!-- Description  -->
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          rows="4"
          v-model="event.description"
        ></textarea>
      </div>
      <!--Creation Date & time  -->
      <div class="row">
        <div class="col-md-7">
          <div class="form-group">
            <label for="item">Date</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control no-border-right"
                :value="event.creationDate | formatDate"
                readonly
                id="date"
              />
              <div class="input-group-append">
                <span class="form-control no-border-left icon-color"
                  ><b-icon icon="calendar2-event"></b-icon
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="item">Heure</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control no-border-right"
                :value="event.creationDate | formatTime(false)"
                readonly
                id="time"
              />
              <div class="input-group-append">
                <span class="form-control no-border-left icon-color"
                  ><b-icon icon="clock-fill"></b-icon
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--State  -->
      <div class="row">
        <div class="form-group col-md-7">
          <label for="state">Nom du statut</label>
          <select class="form-control" v-model="event.statusName" id="state">
            <option value="Open">Ouvert</option>
            <option value="Closed">Fermé</option>
            <option value="InProgress">En cours</option>
          </select>
        </div>
      </div>
      <!--Involved Employee  -->
      <div class="row">
        <div class="form-group col-md-7">
          <label for="state">Employé impliqué</label>
          <select
            class="form-control"
            v-model="event.involvedEmployeeId"
            id="involvedEmployeeId"
          >
            <option
              v-for="employee in employeeList"
              v-bind:value="employee.id"
              :key="employee.id"
            >
              {{ employee | formatEmployee }}
            </option>
          </select>
        </div>
      </div>
      <!--Witnesses  -->
      <div class="row">
        <div class="form-group col-md-12">
          <label for="tags-basic">Témoins</label>
          <b-form-tags
            input-id="tags-basic"
            v-model="event.witnesses"
            placeholder=""
            tag-variant="success"
            tag-class="mr-2 mt-1"
            id="witnesses"
          ></b-form-tags>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Event } from "@/models/event.model";
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  getAllEmployee,
  getFormattedDateFromIsoString,
  getFormattedTimeFromIsoString,
} from "@/data_test";
import { Employee } from "@/models/employee.model";
@Component({
  components: {},
  filters: {
    formatDate: function (value: string) {
      if (!value) return "";
      return getFormattedDateFromIsoString(value);
    },
    formatTime: function (value: string, includeUnit: boolean) {
      if (!value) return "";
      return getFormattedTimeFromIsoString(value, includeUnit);
    },
    formatEmployee: function (value: Employee) {
      if (!value) return "";
      return value.firstName + " " + value.lastName + " ( " + value.id + " )";
    },
  },
})
export default class EventDetails extends Vue {
  @Prop() readonly event!: Event;
  private employeeList = getAllEmployee();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  font-weight: bold;
}
.no-border-left {
  border-left: none;
}
.no-border-right {
  border-right: none;
}
.icon-color {
  color: #82bc00;
}
input:read-only {
  background-color: white;
}
</style>
