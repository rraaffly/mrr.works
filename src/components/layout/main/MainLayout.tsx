import React from "react";
import { DefaultSeo } from "next-seo";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import seoConfig from "~/config/website.config.json";

const metaConfig = {
  metaSiteName: seoConfig.name,
  metaTitle: seoConfig.title,
  metaDescription: seoConfig.description,
  metaUrl: seoConfig.url,
};

interface PageProps {
  children: React.ReactNode;
  pageTitle: string;
}

const MainLayout = ({ children, pageTitle }: PageProps) => {
  return (
    <>
      <DefaultSeo
        title={`${metaConfig.metaTitle} - ${pageTitle}`}
        description={metaConfig.metaDescription}
        openGraph={{
          locale: "id_ID",
          title: metaConfig.metaTitle,
          description: metaConfig.metaDescription,
          siteName: metaConfig.metaSiteName,
        }}
      />
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
};

export default MainLayout;
