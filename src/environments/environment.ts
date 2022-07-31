// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: '',
  url: 'https://cintech-springboot-back-end.azurewebsites.net/all/getProducts',
  SEARCH_URL: 'https://cintech-springboot-back-end.azurewebsites.net/all/getProductsByTitle/',
  RAND_URL: 'https://cintech-springboot-back-end.azurewebsites.net/all/start',
  woolP_URL: 'https://cintech-springboot-back-end.azurewebsites.net/woolworths/getProducts',
  pickP_URL: 'https://cintech-springboot-back-end.azurewebsites.net/picknpay/getProducts',
  POST_URL: 'https://cintech-springboot-back-end.azurewebsites.net/all/processGroceryList/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
