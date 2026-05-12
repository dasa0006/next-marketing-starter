import SiteFooter from "../siteFooter/SiteFooter";
import SiteHeader from "../siteHeader/SiteHeader";

interface PrimaryLayoutProps {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default PrimaryLayout;
