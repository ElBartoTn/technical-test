import { getAllEmployee } from "@/data_test";
import { createLocalVue, shallowMount } from "@vue/test-utils";
import BootstrapVue, { BFormTags, IconsPlugin } from "bootstrap-vue";
import EventDetails from "../../src/components/event/EventDetails.vue";
import { Event } from "../../src/models/event.model"
describe("EventContainer.vue", () => {
    let wrapper: any;
    const event: Event = new Event(1, "2008-03-30T05:13:23Z", "Zied", 2762, "New event", "description", "Ouvert", ['Zied', 'Marc'], false);
    const employeeList = getAllEmployee();
    const localVue = createLocalVue()
     localVue.use(BootstrapVue)
     localVue.use(IconsPlugin)
    beforeEach(() => {
        // render the component
        wrapper = shallowMount(EventDetails, {
            propsData: {
                event: event,
                employeeList:employeeList
            },
            localVue
        })
    })
    afterEach(() => {
        wrapper.destroy()
    })
    it("Render event title and creation info in form", () => {
        expect(wrapper.find('h1').text()).toMatch("New event");
        expect(wrapper.find('h4').text()).toMatch("2008-03-30");
        expect(wrapper.find('h4').text()).toMatch("07h:03");
        expect(wrapper.find('h4').text()).toMatch("par Zied");
    });
    it("Display event details in form", () => {
        const titleInput = wrapper.find('#title');
        expect(titleInput.element.value).toMatch('New event');
        expect(wrapper.find('#description').element.value).toMatch('description');
        expect(wrapper.find('#date').element.value).toMatch('2008-03-30');
        expect(wrapper.findAll('#state > option').length).toBe(3);
        expect(wrapper.find('#state').text()).toMatch('Ouvert');
        expect(wrapper.findAll('#involvedEmployeeId > option').length).toBe(employeeList.length);
        expect(wrapper.find('#involvedEmployeeId').text()).toMatch('Harry Joitir ( 2762 )');
        const tags = wrapper.findComponent(BFormTags);
        expect(tags.exists()).toBe(true);
        expect(tags.html()).toMatch(/Zied,Marc/);
    });
});
