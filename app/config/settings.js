const PROD = "https://api.a11ybar.net/service";
const DEV = "https://api-dev.a11ybar.net/service";

const settings = {
  SERVICE: {
    prod: PROD,
    dev: DEV,
    baseurl: DEV,
    host: ""
  }
};

if (process.env.NODE_ENV === "local") {
  settings.SERVICE.baseurl = "http://localhost:3030/service";
  settings.SERVICE.host = "http://localhost:8080";
}

if (process.env.NODE_ENV === "development") {
  settings.SERVICE.baseurl = DEV;
  settings.SERVICE.host = "https://admin-dev.a11ybar.net";
}

if (process.env.NODE_ENV === "production") {
  settings.SERVICE.baseurl = PROD;
  settings.SERVICE.host = "https://admin.a11ybar.net";
}

export default settings;
