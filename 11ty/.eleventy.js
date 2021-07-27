const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');

module.exports = (eleventyConfig) => {
	eleventyConfig.setTemplateFormats(['md']);
  eleventyConfig.addPlugin(ErrorOverlay);
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
	return {
    dataTemplateEngine: "njk", // deprecated in eleventy 1.0, use eleventyComputed or other .js data files
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
		dir: {
			includes: '_templates',
		},
		jsDataFileSuffix: '.data',
	}
}
