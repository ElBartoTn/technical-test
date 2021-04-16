import { getAllEmployee, getAllEvents, getEventComments } from "@/data_test";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import BootstrapVue, { BFormTags, IconsPlugin } from "bootstrap-vue";
import EventsList from "../../src/components/event/EventsList.vue";
import EventContainer from "../../src/components/ui/EventContainer.vue";
import EventDetails from "../../src/components/event/EventDetails.vue";
import CommentsList from "../../src/components/comment/CommentsList.vue";

import { Event } from "../../src/models/event.model"
describe("EventContainer.vue", () => {
    let wrapper: any;
    const event: Event = new Event(1, "2008-03-30T05:13:23Z", "Zied", 2762, "New event", "description", "Ouvert", ['Zied', 'Marc'], false);
    const events = getAllEvents();
    const selectedEvent = events[0];
    const localVue = createLocalVue()
     localVue.use(BootstrapVue)
     localVue.use(IconsPlugin)
    beforeEach(() => {
        // render the component
        wrapper = shallowMount(EventsList, {
            propsData: {
                events: events ,
                selectedEvent: events[0],
                comments: getEventComments(selectedEvent.id)
            },
            localVue
        })
    })
    afterEach(() => {
        wrapper.destroy()
    })
    it("Test all components exists", () => {
        expect(wrapper.findComponent(EventContainer).exists()).toBe(true);
        expect(wrapper.findComponent(EventDetails).exists()).toBe(true);
        expect(wrapper.findComponent(CommentsList).exists()).toBe(true);
    });
    it("Click on event and change border color", () => {
        
    });
    it("Update event, navigate and check data persist", () => {
        
    });
});
