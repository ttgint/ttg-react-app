const CracoLessPlugin = require('craco-less');

const selectedTheme = 'dark';

const themes = [
  {
    title: 'dark',
    id: 1,
    config: {
      '@primary-color': '#0A53B0',
      '@body-background': '#404041',
      '@background-color-base': '#262626',
      '@border-color-base': 'rgba(255, 255, 255, 0.25)',
      '@border-color-split': '#363636',
      '@btn-default-bg': '#262626',
      '@component-background': '#171F22',
      '@layout-body-background': '#363636',
      '@layout-header-background': '#171F22',
      '@layout-trigger-background': '#313232',
      '@layout-trigger-color': '#FFFFFF',
      '@menu-dark-submenu-bg': '#171F22',
      '@popover-bg': '#262629',
      '@layout-sider-background': '#171F22',
      '@text-color': '#E3E3E3',
      '@text-color-secondary': '#E3E3E3',
      '@heading-color': '#FFF9F3',
      '@btn-primary-bg': '#397dcc',
      '@processing-color': '#397dcc',
      '@table-expanded-row-bg': '#3b3b3b',
      '@table-header-bg': '#3a3a3b',
      '@table-row-hover-bg': '#3a3a3b',
      '@table-selected-row-bg': '#3a3a3a',
      '@select-background': '#FFFFFF'
    }
  },
  {
    title: 'light',
    id: 2,
    config: {
      '@primary-color': '#1890ff',
      '@body-background': '#FFFFFF',
      '@background-color-base': '#F5F5F5',
      '@border-color-base': '#D9D9D9',
      '@border-color-split': '#E8E8E8',
      '@btn-default-bg': '#FFFFFF',
      '@component-background': '#FFFFFF',
      '@layout-body-background': '#f0f2f5',
      '@layout-header-background': '#001529',
      '@layout-trigger-background': '#002140',
      '@layout-trigger-color': '#FFFFFF',
      '@menu-dark-submenu-bg': '#000c17',
      '@popover-bg': '#FFFFFF',
      '@layout-sider-background': '#001529',
      '@text-color': 'rgba(0,0,0,.65)',
      '@text-color-secondary': 'rgba(0,0,0,.45)',
      '@heading-color': 'rgba(0,0,0,.85)',
      '@btn-primary-bg': '#1890ff',
      '@processing-color': '#1890ff',
      '@table-expanded-row-bg': '#fbfbfb',
      '@table-header-bg': '#FAFAFA',
      '@table-row-hover-bg': '#FFFFFF',
      '@table-selected-row-bg': '#3a3a3a',
      '@select-background': '#FFFFFF'
    }
  }
];

process.env.BROWSER = 'none'; // Don't open the browser during development
const ENV = process.env.NODE_ENV;

const babelPlugins = [
  ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ['babel-plugin-styled-components', { displayName: true }]
];
const babelTestPlugins = [];
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: themes.filter(i => i.title === selectedTheme)[0].config,
          javascriptEnabled: true
        }
      }
    }
  ],
  babel: { plugins: ENV === 'test' ? babelTestPlugins : babelPlugins }
};
