import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import NotFoundPage from '../NotFoundPage.vue';

const renderComponent = (options) => render(NotFoundPage, {...options });

const route = { fullPath: '/', path: '/' };

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
