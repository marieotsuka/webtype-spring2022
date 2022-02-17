module.exports = {
  eleventyComputed: {
    eleventyExcludeFromCollections(data) {
      // If the page is in `draft:true` mode exclude
      // it from any collections since it shouldn't be visible anywhere.
      if (data.draft) {
        return true;
      }
      return data.eleventyExcludeFromCollections;
    }
  }
}