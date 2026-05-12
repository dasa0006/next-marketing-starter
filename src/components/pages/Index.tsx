import PageLayout from "../layout/pageLayout/PageLayout";
import { PageData } from "./pages.types";
const IndexPage = async () => {
  const indexPageData: PageData = {
    sections: [
      { sectionID: "Hero section", section: <div>Hero Section</div> },
      { sectionID: "Features section", section: <div>Features section</div> },
    ],
  };

  return <PageLayout {...indexPageData} />;
};

export default IndexPage;
