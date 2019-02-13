// Don't open the browser during development
process.env.BROWSER = 'none';

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
    }
  ]
};
