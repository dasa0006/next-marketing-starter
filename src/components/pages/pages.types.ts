export interface PageSection {
  sectionID: string;
  section: React.ReactNode;
}

export interface PageData {
  pageTitle?: string;
  sections: PageSection[];
}
