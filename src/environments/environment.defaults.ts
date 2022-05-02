import { AUTH0_AUDIENCE, AUTH0_CLIENTID, AUTH0_DOMAIN, AUTH0_REDIRECT_URL, SERVER_URL } from "../../constant.js";

export const defaultEnvironment = {
  production: false,
  auth0: {
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENTID,
    redirectUri: AUTH0_REDIRECT_URL,
    audience: AUTH0_AUDIENCE
  },
  SERVER_URL
};
