import { MaxWidthWrapper } from "@/components/layout/maxWidthWrapper/MaxWidthWrapper";
import { Section } from "@/components/layout/section/Section";

const IndexPage = async () => (
  <>
    <Section>
      <MaxWidthWrapper>
        <div>Hero Section</div>
      </MaxWidthWrapper>
    </Section>
    <Section>
      <MaxWidthWrapper>
        <div>Features section</div>
      </MaxWidthWrapper>
    </Section>
  </>
);

export default IndexPage;
