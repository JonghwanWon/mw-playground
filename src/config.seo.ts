interface SeoConfig {
  author: string;
  description: string;
  keywords: string;
  url: string;
  siteName: string;
  siteImage: string;
  siteLargeImage: string;
  siteTitle: string;
  titleTemplate: string;
}
const seo: SeoConfig = {
  author: "Jonghwan <jh.wwwon@daum.net>",
  description: "montly-web (design, front-end development)",
  keywords: "Jonghwan",
  url: "/",
  siteName: "montly web",
  siteImage: "/static/site-image.png",
  siteLargeImage: "/static/site-large-image.png",
  siteTitle: "mw_001",
  titleTemplate: " :: montly web"
};

export { seo };
