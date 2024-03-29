module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget('./src/css/');

    eleventyConfig.addPassthroughCopy('./src/css/');

    eleventyConfig.addPassthroughCopy('./src/img/');

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    };
}
