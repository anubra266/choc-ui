import Fuse from "fuse.js";
import { categoriesObj } from "~/categories/parse-categories";

export const handleSearch = (keyword) => {
  const data = parser();
  const options = {
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
    ignoreFieldNorm: true,
    threshold: 0.3,
    minMatchCharLength: 2,
    keys: [{ name: "section" }, { name: "name" }],
  };
  const myIndex = Fuse.createIndex(options.keys, data);
  const fuse = new Fuse(data, options, myIndex);

  const searchRes = fuse.search(keyword);
  const result = catGroup(searchRes);
  //   console.log('result', result)
  return result;
};

const catGroup = (res) => {
  return res.reduce((acc, nxt) => {
    const result = nxt.item;
    const value = result.category;
    acc[value] = (acc[value] || []).concat(result);
    return acc;
  }, {});
};

const parser = () => {
  var collection = [];
  Object.keys(categoriesObj).forEach((catKey) => {
    const { title: catTitle, prefix, sections } = categoriesObj[catKey];

    Object.keys(sections).forEach((secKey) => {
      const { title: secTitle, route, components } = sections[secKey];

      const parsedComponents = components?.reduce((comps, comp) => {
        const { name, preview } = comp;

        comps.push({
          category: catTitle,
          section: secTitle,
          name,
          preview,
          url: prefix + route + `#${preview}`,
        });
        return comps;
      }, []);
      collection = collection.concat(parsedComponents);
    });
  });

  return collection.filter((collection) => collection);
};
