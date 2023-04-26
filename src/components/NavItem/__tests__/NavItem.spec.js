import '@testing-library/jest-dom';
import { render } from '@testing-library/vue';
import NavItem from '../NavItem.vue';

const renderComponent = (options) => render(NavItem, {...options });

const route = { fullPath: '/', path: '/' };

vi.mock('vue-router', () => ({
  useRoute: () => route,
  RouterLink: () => 'Home'
}));

describe('NavItem', () => {
  it('renders correctly', () => {
    const { container } = renderComponent({
      props: {
        to: '',
        iconSrc: '',
        iconAltText: '',
        title: ''
      }
    });

    expect(container).toMatchSnapshot();
  });
});
