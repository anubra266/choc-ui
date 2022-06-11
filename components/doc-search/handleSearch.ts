import Fuse from "fuse.js";
import { categoriesObj } from "components/utils/route-categories/parse-categories";

export const handleSearch = (keyword: any) => {
  const data = parser();
  const options: any = {
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
  return result;
};

const catGroup = (res: any) => {
  return res.reduce((acc: any, nxt: any) => {
    const result = nxt.item;
    const value = result.category;
    acc[value] = (acc[value] || []).concat(result);
    return acc;
  }, {});
};

const parser = () => {
  var collection: any[] = [];
  Object.keys(categoriesObj).forEach((catKey) => {
    const { title: catTitle, prefix, sections } = categoriesObj[catKey];

    Object.keys(sections).forEach((secKey) => {
      const { title: secTitle, route, display, components } = sections[secKey];

      const parsedComponents = components?.reduce((comps, comp) => {
        const { name, preview } = comp;

        comps.push({
          category: catTitle,
          section: display || secTitle,
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
