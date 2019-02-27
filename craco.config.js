const CracoLessPlugin = require('craco-less');

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
          modifyVars: {
            '@font-size-base': '12px'
          },
          javascriptEnabled: true
        }
      }
    }
  ],
  babel: { plugins: ENV === 'test' ? babelTestPlugins : babelPlugins }
};
