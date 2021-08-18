import ApplicationAdapter from './application';

export default class OfficeAdapter extends ApplicationAdapter {
  host = 'https://johnny-appleseed.clientsecure.me';
  namespace = 'client-portal-api';
  headers = {
    Accept: 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };
  // pathForType() {
  //   return `cpt-codes?filter[clinicianId]=2`;
  // }
}
