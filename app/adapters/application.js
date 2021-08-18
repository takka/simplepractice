import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://johnny-appleseed.clientsecure.me';
  namespace = 'client-portal-api';
}
