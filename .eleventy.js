module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/files");
    eleventyConfig.addWatchTarget("./src/css/img");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {
      dir: {
        // default: [site root]
        input: "src",
        // default: _site
        output: "public",
      },
    };
  };