export const processSearchResult = (searchResults) => {
  const processedResult = {};
  const totalSections = Object.keys(searchResults).reduce((a, category) => {
    const sections = searchResults[category];
    const categoryWithSectionIndex = sections.map((section, index) => ({
      ...section,
      sectionIndex: a + index,
    }));
    processedResult[category] = categoryWithSectionIndex;

    return a + sections.length;
  }, 0);

  return { totalSections, processedResult };
};
