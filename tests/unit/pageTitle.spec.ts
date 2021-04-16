import { shallowMount } from "@vue/test-utils";
import PageTitle from "../../src/components/ui/PageTitle.vue";

describe("PageTitle.vue", () => {
  it("renders props title when passed", () => {
    const title = "Mes évènements";
    const wrapper = shallowMount(PageTitle, {
      propsData: { title },
    });
    console.log(wrapper)
    expect(wrapper.find('h1').text()).toMatch(title);
  });
});
