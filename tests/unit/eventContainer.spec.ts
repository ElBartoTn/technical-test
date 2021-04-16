import { shallowMount } from "@vue/test-utils";
import EventContainer from "../../src/components/ui/EventContainer.vue";
import {Event} from "../../src/models/event.model"
describe("EventContainer.vue", () => {
  let wrapper: any ;
  const event: Event = new Event(1,"2008-03-30T05:13:23Z", "Zied", 2, "New event","","",[],false );

  beforeEach(() => {
    // render the component
    wrapper = shallowMount(EventContainer, {
      propsData: {
        event: event,
      }
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it("renders one event title  when passed", () => {
    expect(wrapper.find('.event-text').text()).toEqual("New event");
  });
});
