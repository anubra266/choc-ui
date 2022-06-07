import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Credits from "~/components/docs/credits";
import { SplitbeeBadge } from "~/components/docs/splitbee-badge";
import { PreviewOptions } from "~/components/preview-options";
import { getComponentCode } from "~/utils/section-content.server";
import { toCapitalCase } from "~/utils/string";

export const meta: MetaFunction = ({ location }) => {
  const routePaths = location.pathname.split("/").slice(-2);
  const [section, component] = routePaths;
  const title = `Preview for ${toCapitalCase(component)} - ${toCapitalCase(
    section
  )}`;

  return {
    charset: "utf-8",
    title,
    viewport: "width=device-width,initial-scale=1",
  };
};

export type LoaderData = {
  code: string;
};

export const loader: LoaderFunction = ({ request }): LoaderData => {
  const code = getComponentCode(request.url);
  return { code };
};

export const Preview = () => {
  const loaderData = useLoaderData<LoaderData>();

  return (
    <>
      <Outlet />
      <PreviewOptions data={loaderData} />
      <SplitbeeBadge />
      <Credits />
    </>
  );
};

export default Preview;
