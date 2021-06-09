import { useRouter } from "next/router";

import GStartObj from "categories/getting-started.json";
import ElementObj from "categories/elements.json";
import PSectionsObj from "categories/page-sections.json";
import NavigationObj from "categories/navigation.json";
import ListsObj from "categories/lists.json";
import FormsObj from "categories/forms.json";
import PackagesObj from "categories/packages.json";
import AppShells from "categories/application-shells.json";

export const componentsObj = {
  ...ElementObj,
  ...PSectionsObj,
  ...NavigationObj,
  ...ListsObj,
  ...FormsObj,
  ...AppShells,
};
export const categoriesObj = {
  ...GStartObj,
  ...componentsObj,
  ...PackagesObj,
};

export const useRoutes = () => {
  const router = useRouter();
  const { category, section } = router.query;

  return Object.keys(categoriesObj).reduce((acc, nxt) => {
    const { title: catTitle, prefix, sections } = categoriesObj[nxt];

    const routeCategory: any = { title: catTitle, prefix };
    const fullSections = sections;
    const routeSections = Object.keys(fullSections).reduce((racc, rnxt) => {
      const fullSection = fullSections[rnxt];
      const { title: secTitle, route, ...secProps } = fullSection;
      const url = prefix + route;

      const components = !["getting-started"].includes(nxt)
        ? secProps.components?.reduce((comps: any, comp: any) => {
            comps.push({
              ...comp,
              url: url + `#${comp.preview}`,
            });
            return comps;
          }, [])
        : [];
      const active =
        router.pathname === url ||
        (category === prefix.replace(/docs|[/]/g, "") && section === route);
      racc.push({
        ...secProps,
        title: secTitle,
        components,
        url,
        active,
        route,
      });
      return racc;
    }, []);
    routeCategory.sections = routeSections;
    acc.push(routeCategory);
    return acc;
  }, []);
};
