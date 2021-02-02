import { useRouter } from "next/router";

import GStartObj from "~/categories/getting-started.json";
import ElementObj from "~/categories/elements.json";
import PSectionsObj from "~/categories/page-sections.json";
import NavigationObj from "~/categories/navigation.json";
import ListsObj from "~/categories/lists.json";
import PackagesObj from "~/categories/packages.json";

export const categoriesObj = {
  ...GStartObj,
  ...ElementObj,
  ...PSectionsObj,
  ...NavigationObj,
  ...ListsObj,
  ...PackagesObj,
};

export const useRoutes = () => {
  const router = useRouter();
  const { category, section } = router.query;

  return Object.keys(categoriesObj).reduce((acc, nxt) => {
    const { title: catTitle, prefix, sections } = categoriesObj[nxt];
    const routeCategory = { title: catTitle, prefix };
    const fullSections = sections;
    const routeSections = Object.keys(fullSections).reduce((racc, rnxt) => {
      const fullSection = fullSections[rnxt];
      const { title: secTitle, route, alert } = fullSection;
      const url = prefix + route;
      const active =
        router.pathname === url || (category === catTitle && section === route);
      racc.push({ title: secTitle, route, alert, url, active });
      return racc;
    }, []);
    routeCategory.sections = routeSections;
    acc.push(routeCategory);
    return acc;
  }, []);
};
