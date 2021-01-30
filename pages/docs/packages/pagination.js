import React from "react";
import PageHead from "~/components/head";
import { PageHeader, Section } from "~/components/docs";
import ComponentDemo from "~/components/codes/component-demo/component-demo";
import DocsLayout from "~/components/layouts/docs/index";
import { CodeBlock } from "~/components/docs/codeblock";
import Pagination from "@choc-ui/paginator";
import { Alert, Stack } from "@chakra-ui/react";

const PaginationPackage = () => {
  return (
    <DocsLayout>
      <PageHead title="Pagination - @choc-ui/paginator" />
      <PageHeader>
        <Section.a
          target="_blank"
          rel="noopener"
          href="https://github.com/anubra266/choc-paginator"
        >
          @choc-ui/paginator
        </Section.a>
      </PageHeader>
      <Section.p>
        <Alert status="success" variant="left-accent" borderRadius="md" mt={4}>
          <Stack>
            <p>
              Our <b>Code Editor</b> is editable, and the preview is live.
            </p>
          </Stack>
        </Alert>
      </Section.p>
      <Section>
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
      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Basic Pagination
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            More Pages
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/more"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Change Page Size
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/cpz"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Jump to a page directly
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/spj"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Change Size
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/csz"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Simple Mode
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/sm"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Controlled page number.{" "}
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/cpn"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
              <Stack>
                <p>
                  The optional <code> integer `current` prop</code> controls the
                  active page.
                </p>
                <p>
                  The optional <code> function `onChange` prop</code> provides
                  current page parameter when page changes.
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Total number{" "}
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/sht"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Prev and next
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/itr"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
              <Stack>
                <p>
                  The <code>itemRender prop</code> lets you modify the
                  Pagination elements. It receives page and type parameters
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Preset Styling
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/prs"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
              <Stack>
                <p>
                  The <code>colorScheme prop</code> modifies the color Theme
                </p>
                <p>
                  The <code>rounded prop</code> modifies the buttons'
                  borderRadius
                </p>
              </Stack>
            </Alert>
          </Section.p>
        </Section.Content>
      </Section>

      <Section>
        <Section.Header>
          <Section.a target="_blank" rel="noopener">
            Custom Styling
          </Section.a>
        </Section.Header>
        <Section.Content>
          <Section.p>
            <ComponentDemo
              path="packages/choc-paginator/css"
              scope={{ Pagination }}
              height="100px"
            />
          </Section.p>
          <Section.p>
            <Alert
              status="warning"
              variant="left-accent"
              borderRadius="md"
              mt={4}
            >
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

      <Section.p>
        <Alert status="info" variant="left-accent" borderRadius="md" mt={4}>
          <Stack>
            <p>
              Set the <code> boolean hideOnSinglePage prop</code> to false, to
              stop pagination dissapearing when there's only one page.
            </p>
          </Stack>
        </Alert>
      </Section.p>
    </DocsLayout>
  );
};

export default PaginationPackage;
