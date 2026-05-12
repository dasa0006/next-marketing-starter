import PageLayout from "../layout/pageLayout/PageLayout";
import { PageData } from "./pages.types";

export const AboutPage = async () => {
  const aboutPageData: PageData = {
    pageTitle: "About Me",
    sections: [
      { sectionID: "About me section", section: <div>About me Section</div> },
      { sectionID: "Contact section", section: <div>Contact section</div> },
    ],
  };

  return <PageLayout {...aboutPageData} />;
};

export default AboutPage;
