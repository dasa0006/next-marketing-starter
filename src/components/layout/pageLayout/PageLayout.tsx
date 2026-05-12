import { PageData, PageSection } from "@/components/pages/pages.types";
import { Heading } from "@/components/ui/heading/Heading";
import { MaxWidthWrapper } from "../maxWidthWrapper/MaxWidthWrapper";
import { Section } from "../section/Section";

const PageLayoutSectionRenderer = ({ sections }: PageData) => {
  return sections.map(({ section, sectionID }: PageSection) => (
    <Section key={sectionID}>
      <MaxWidthWrapper>{section}</MaxWidthWrapper>
    </Section>
  ));
};

const PageLayout = ({ pageTitle, sections }: PageData) => {
  return (
    <>
      {pageTitle ? (
        <MaxWidthWrapper>
          <Heading>{pageTitle}</Heading>
        </MaxWidthWrapper>
      ) : (
        <></>
      )}
      <PageLayoutSectionRenderer sections={sections} />
    </>
  );
};

export default PageLayout;
