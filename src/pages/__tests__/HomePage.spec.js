import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import HomePage from '../HomePage.vue';

const renderComponent = (options) => render(HomePage, {...options });

const route = { fullPath: '/', path: '/' };

describe('HomePage', () => {
  it('renders correctly', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
