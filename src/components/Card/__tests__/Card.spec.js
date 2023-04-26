import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import Card from '../Card.vue';

const mockPopulationData = [
  { ano: 2000, populacao: 1000 },
  { ano: 2010, populacao: 2000 },
  { ano: 2020, populacao: 3000 },
  { ano: 2030, populacao: 4000 },
];

const renderComponent = (options) => render(Card, { ...options });

describe('Card', () => {
  it('renders the population data for the last index', () => {
    const { getByText } = renderComponent({ props: { population: mockPopulationData } });

    const populationText = getByText('4000');
    const yearText = getByText('População em 2030');

    expect(populationText).toBeVisible();
    expect(yearText).toBeVisible();
  });
});
