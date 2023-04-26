import type { Preview } from '@storybook/vue3'

import '@/assets/styles/main.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: 'requiredFirst'
    },
    layout: 'centered'
  },
}

export default preview
