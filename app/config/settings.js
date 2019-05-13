const PROD = "https://api.a11ybar.net/service";
const DEV = "https://api-dev.a11ybar.net/service";

const AUTH0_CONFIG = {
  domain: "a11ybar.auth0.com",
  clientId: "W107EnTpgZJj53If4i7mAVAihu7RsaUA",
  callbackUrl: "/callback"
};

const settings = {
  SERVICE: {
    prod: PROD,
    dev: DEV,
    baseurl: DEV,
    host: ""
  },
  AUTH0_CONFIG
};

if (process.env.NODE_ENV === "local") {
  settings.SERVICE.baseurl = "http://localhost:3030/service";
  settings.SERVICE.host = "http://localhost:8080";
}

if (process.env.NODE_ENV === "development") {
  settings.SERVICE.baseurl = DEV;
  settings.SERVICE.host = "http://localhost:8080"; // TODO: Replace later.
}

if (process.env.NODE_ENV === "production") {
  settings.SERVICE.baseurl = PROD;
  settings.SERVICE.host = "http://localhost:8080"; // TODO: Replace later.
}

export default settings;
