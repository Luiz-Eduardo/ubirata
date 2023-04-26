import Card from './Card.vue';

export default {
  title: 'Components/Card',
  component: Card,

};

const mockPopulationData = [
  { ano: 2000, populacao: 1000 },
  { ano: 2010, populacao: 2000 },
  { ano: 2020, populacao: 3000 },
  { ano: 2030, populacao: 4000 },
];

const PrimaryTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  setup: () => ({ args }),
  data: () => ({ mockPopulationData }),
  template: `
    <Card
      :population="mockPopulationData"
    />
    `
});

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
};

