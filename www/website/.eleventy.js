const svgContents = require('eleventy-plugin-svg-contents');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addPassthroughCopy({
    './node_modules/@nordhealth/css/lib/nord.min.css': 'css/nord.min.css',
    './node_modules/@nordhealth/themes/lib/nord-dark.css': 'css/nord-dark.css',
    './node_modules/@nordhealth/fonts/lib/': 'css/fonts',

    './_includes/assets/js/nord-components.js': 'js/nord-components.js',

    '../../others/egotech/logos': 'images/logos',
  });

  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());
};
