import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import NavMain from '../NavMain.vue';

const renderComponent = (options) => render(NavMain, {...options });

const route = { fullPath: '/', path: '/' };

vi.mock('vue-router', () => ({
  useRoute: () => route,
  RouterLink: () => 'Home'
}));

describe('NavMain', () => {
  it('renders correctly', () => {
    const { container } = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
