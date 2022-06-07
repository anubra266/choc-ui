import type { Dict } from "@chakra-ui/utils";
import { useLocation, useParams } from "@remix-run/react";

// import GStartObj from "./getting-started.json";
import ElementObj from "./elements.json";
import PSectionsObj from "./page-sections.json";
import NavigationObj from "./navigation.json";
import ListsObj from "./lists.json";
import FormsObj from "./forms.json";
// import PackagesObj from "./packages.json";
import AppShells from "./application-shells.json";

export const componentsObj = {
  ...ElementObj,
  ...PSectionsObj,
  ...NavigationObj,
  ...ListsObj,
  ...FormsObj,
  ...AppShells,
};
export const categoriesObj = {
  // ...GStartObj,
  ...componentsObj,
  // ...PackagesObj,
};

type CategoryKey = typeof categoriesObj extends Record<infer CatType, any>
  ? CatType
  : string;

export const useRoutes = () => {
  const { category, section } = useParams();
  const location = useLocation();

  return Object.keys(categoriesObj).reduce((acc, nxt) => {
    const {
      title: catTitle,
      prefix,
      sections,
    } = categoriesObj[nxt as CategoryKey];

    const routeCategory: any = { title: catTitle, prefix };
    const fullSections = sections as Dict;

    const routeSections = Object.keys(fullSections).reduce(
      (racc: any[], rnxt) => {
        const fullSection: Dict = fullSections[rnxt];
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
          location.pathname === url ||
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
      },
      []
    );
    routeCategory.sections = routeSections;
    acc.push(routeCategory);
    return acc;
  }, [] as any[]);
};
