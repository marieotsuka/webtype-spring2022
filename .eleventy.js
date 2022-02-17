
const sass = require("sass");
const path = require("path");
const { DateTime } = require("luxon");

const markdown = require("markdown-it")({
  html: true,
  linkify: true
});

const isDevEnv = process.env.ELEVENTY_ENV === 'development';

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/assets");

  // Add SCSS Compilation
  eleventyConfig.addTemplateFormats("scss");
  // Creates the extension for use
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css", // optional, default: "html"
    // `compile` is called once per .scss file in the input directory
    compile: async function(inputContent) {
      let result = sass.compileString(inputContent);
      // This is the render function, `data` is the full data cascade
      return async (data) => {
        return result.css;
      };
    }
  });

  eleventyConfig.addFilter("dateformat", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('MMMM dd');
  });

  eleventyConfig.addFilter('markdown', value => {
    return markdown.render(value)
  });


  // Create the filter function.
  function sortByOrder(values) {
   let vals = [...values]
   return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
  }

  // Add the filter.
  eleventyConfig.addFilter('sortByOrder', sortByOrder)

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_layouts"
    }
  }
};