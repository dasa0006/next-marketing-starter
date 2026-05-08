import SiteFooter from "../siteFooter/SiteFooter";
import SiteHeader from "../siteheader/SiteHeader";

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>;
      <SiteFooter />
    </>
  );
};

export default PrimaryLayout;
