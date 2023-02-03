import React from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import config from "~/config/website.config.json";
import MainHeader from "./MainHeader";
import clsx from "clsx";

const meta = {
  WEBSITE_NAME: config.name,
  WEBSITE_TITLE: config.title,
  WEBSITE_DESC: config.description,
  WEBSITE_URL: config.url,
};

const MainLayout = ({ children, className, ...props }) => {
  const router = useRouter();
  return (
    <>
      <DefaultSeo
        canonical={`${meta.WEBSITE_URL}${router.asPath || "/"}`}
        title={meta.WEBSITE_TITLE}
        description={meta.WEBSITE_DESC}
        openGraph={{
          locale: "id_ID",
          title: meta.WEBSITE_TITLE,
          description: meta.WEBSITE_DESC,
          siteName: meta.WEBSITE_NAME,
        }}
      />
      <div className={clsx("relative", className)} {...props}>
        <MainHeader />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
