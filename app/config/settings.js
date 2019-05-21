const PROD = "http://localhost:3030/service"; // TODO: Replace later.
const DEV = "http://localhost:3030/service"; // TODO: Replace later.

const AUTH0_CONFIG = {
  domain: "nexton-testing.auth0.com",
  clientId: "LYjFdFMKpfotY4hHTMUo9Me2bfJyxrfg",
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
  settings.SERVICE.host = "https://nexton-react-starter-v2.netlify.com";
}

if (process.env.NODE_ENV === "production") {
  settings.SERVICE.baseurl = PROD;
  settings.SERVICE.host = "https://nexton-react-starter-v2.netlify.com";
}

export default settings;
