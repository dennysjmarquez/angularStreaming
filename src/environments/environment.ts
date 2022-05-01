// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AUTH0_AUDIENCE, AUTH0_CLIENTID, AUTH0_DOMAIN, SERVER_URL} from '../../constant.js'


export const environment = {
  production: false,
  auth0: {
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENTID,
    redirectUri: `${window.location.origin}/auth`,
    audience: AUTH0_AUDIENCE,
  },
  SERVER_URL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
