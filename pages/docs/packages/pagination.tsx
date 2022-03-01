import React from "react";
import PageHead from "components/head";
import { PageHeader, Section } from "components/docs";
import ComponentDemo from "components/component-demo";
import DocsLayout from "components/layouts/docs/index";
import { CodeBlock } from "components/docs/codeblock";
import Pagination from "@choc-ui/paginator";
import { Alert, Stack } from "@chakra-ui/react";
import { AdBox } from "analytics/ads";

const PaginationPackage = () => {
  return (
    <DocsLayout>
      <PageHead
        title="Pagination Package - @choc-ui/paginator"
        image="paginator.png"
      />
      <PageHeader>
        <Section.a
          target="_blank"
          rel="noopener"
          href="https://github.com/anubra266/choc-paginator"
        >
          @choc-ui/paginator
        </Section.a>
      </PageHeader>
      <AdBox />
      <Section.p>
        <Alert status="success" variant="left-accent" rounded="md" mt={4}>
          <Stack>
            <p>
              Our <b>Code Editor</b> is editable, and the preview is live.
            </p>
          </Stack>
        </Alert>
      </Section.p>
      <Section id="installation">
        <Section.Header>
          <Section.a target="_blank" rel="noopener" href="">
            Installation
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <CodeBlock lang="bash">{`npm i @choc-ui/paginator`}</CodeBlock>

            <CodeBlock lang="bash">{`yarn add @choc-ui/paginator`}</CodeBlock>
          </Section.p>
        </Section.Content>
      </Section>
      <Section id="import">
        <Section.Header>
          <Section.a target="_blank" rel="noopener" href="">
            Import
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <CodeBlock lang="js">{`import Pagination from "@choc-ui/paginator";`}</CodeBlock>
          </Section.p>
        </Section.Content>
      </Section>
      <Section id="bp">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Basic Pagination" }}
              path="packages/choc-paginator"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> integer `defaultCurrent` prop</code> is
                  used as initial page on Mount.
                </p>
                <p>
                  The <code> integer `total` prop</code> is required
                </p>
                <p>
                  The optional <code> object `paginationProps` prop</code>{" "}
                  accepts an object of <code>styleProps</code> passed to the
                  wrapper.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="fr">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Focus Ring" }}
              path="packages/choc-paginator/fr"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> boolean or string `focusRing` prop</code>{" "}
                  adds focus rings to your pagination buttons.
                </p>
                <p>
                  Providing a string value sets that string as the color of the
                  focus ring
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="mp">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "More Pages" }}
              path="packages/choc-paginator/more"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> integer `pageNeighbours` prop</code>{" "}
                  determines the amount of pages on either side of the current
                  page before the arrows
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="cps">
        <Section.Header>
          <Section.a target="_blank" rel="noopener"></Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Change Page Size" }}
              path="packages/choc-paginator/cpz"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> boolean `defaultPageSize` prop</code> sets
                  the initial page size.
                </p>
                <p>
                  The optional <code> boolean `pageSize` prop</code> sets the
                  controlled page size.
                </p>
                <p>
                  The optional <code> integer `showSizeChanger` prop</code>{" "}
                  makes the sizechanger visible
                </p>
                <p>
                  You can set the pageSize options with the{" "}
                  <code>array pageSizeOptions prop</code>
                  e.g. <code>[10, 20, 50, 100]</code>
                </p>
                <p>
                  You can set the detect pageSize changes with the{" "}
                  <code>function onShowSizeChange prop</code> It provides the
                  currentPage and pageSize parameters.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="jpd">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Jump to a page directly" }}
              path="packages/choc-paginator/spj"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> boolean `showQuickJumper` prop</code>{" "}
                  displays the page jumper
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="cs">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Change Size" }}
              path="packages/choc-paginator/csz"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> string `size` prop</code> changes the
                  Pagination Size
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="sm">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Simple Mode" }}
              path="packages/choc-paginator/sm"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> boolean `simple` prop</code> toggles the
                  simplified mode.
                </p>
                <p>
                  The optional <code> boolean `disabled` prop</code> disables
                  the pagination
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="cpn">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Controlled page number" }}
              path="packages/choc-paginator/cpn"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The optional <code> integer `current` prop</code> controls the
                  active page.
                </p>
                <p>
                  The optional <code> function `onChange` prop</code> provides 4
                  parameters to the <code>function</code> when the page changes:
                  the current page number; the total number of pages; total
                  number of data on the current page and the total number of
                  data.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="tn">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Total number" }}
              path="packages/choc-paginator/sht"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  You can show the total number of data by setting{" "}
                  <code>showTotal</code>.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="pan">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Prev and next" }}
              path="packages/choc-paginator/itr"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The <code>itemRender prop</code> is a function that lets you
                  modify the Pagination elements. It receives{" "}
                  <code>currentpage</code> and <code>type </code>parameters,
                  except when the type is <code>pageSize</code>, you receive the
                  current <code>pageSize</code>.
                </p>
                <p>
                  The possible types are{" "}
                  <code>prev, next, backward, forward, pageSize, page</code>.
                </p>
                <p>
                  You must use the <code>forwardRef</code> to avoid bugs.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="ps">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Preset Styling" }}
              path="packages/choc-paginator/prs"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The <code>colorScheme prop</code> modifies the color Theme
                </p>
                <p>
                  The <code>rounded prop</code> modifies the buttons&apos
                  borderRadius
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="cst">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Custom Styling" }}
              path="packages/choc-paginator/css"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  The <code>baseStyles prop</code> accepts styleProps for normal
                  State
                </p>
                <p>
                  The <code>activeStyles prop</code> accepts styleProps for
                  active State
                </p>
                <p>
                  The <code>hoverStyles prop</code> accepts styleProps for hover
                  State. If not available, <code>activeStyles</code> works for
                  hover
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section id="rpag">
        <Section.Content>
          <Section.p>
            <ComponentDemo
              comp={{ name: "Responsive Pagination" }}
              path="packages/choc-paginator/rpg"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert status="warning" variant="left-accent" rounded="md" mt={4}>
              <Stack>
                <p>
                  Pass the <code>responsive prop</code> to reduce the pagination
                  elements on smaller screens.
                </p>
                <p>
                  You can display some elements by passing an object in the{" "}
                  <code>responsive prop</code> setting them to true.
                </p>
                <p>
                  The possible keys for the <code>responsive object</code> are{" "}
                  <code>
                    {" "}
                    activePage, totalRender, fastBackward, fastForward,
                    pageSize, pageJumper
                  </code>
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section.p>
        <Alert status="info" variant="left-accent" rounded="md" mt={4}>
          <Stack>
            <p>
              Set the <code> boolean hideOnSinglePage prop</code> to false, to
              stop pagination dissapearing when there&aposs only one page.
            </p>
          </Stack>
        </Alert>
      </Section.p>

      <Section id="wld">
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            With Live Data
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <iframe
              src="https://codesandbox.io/embed/choc-ui-pagination-example-wvtfs?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
              style={{
                width: "100%",
                height: "500px",
                border: 0,
                borderRadius: "4px",
                overflow: "hidden",
              }}
              title="Choc UI Pagination Example"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </Section.p>
        </Section.Content>
      </Section>
    </DocsLayout>
  );
};

export default PaginationPackage;
