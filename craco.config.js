// Don't open the browser during development
process.env.BROWSER = 'none';
const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@font-size-base': '12px'
        }
      }
    },
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
  ]
};
