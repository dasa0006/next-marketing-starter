import { ContactForm } from "@/components/ui/contactForm/ContactForm";
import { Heading } from "@/components/ui/heading/Heading";
import { MaxWidthWrapper } from "@/components/layout/maxWidthWrapper/MaxWidthWrapper";
import { Section } from "@/components/layout/section/Section";
import { getTranslations } from "next-intl/server";

const AboutPage = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <>
      <MaxWidthWrapper>
        <Heading>{t("heading")}</Heading>
      </MaxWidthWrapper>
      <Section>
        <MaxWidthWrapper>
          <div>About me Section</div>
        </MaxWidthWrapper>
      </Section>
      <Section>
        <MaxWidthWrapper className="py-section-sm">
          <Heading as="h2" className="mb-8 text-center">
            {t("contactHeading")}
          </Heading>
          <div className="mx-auto max-w-lg">
            <ContactForm />
          </div>
        </MaxWidthWrapper>
      </Section>
    </>
  );
};

export default AboutPage;
