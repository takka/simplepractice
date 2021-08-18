import Service from '@ember/service';
import { set } from '@ember/object';

export default class SelectionService extends Service {
  service = null;
  location = null;
  date = null;
  info = null;
  setSelectedService(service) {
    set(this, 'service', service);
  }
  setSelectedLocation(location) {
    set(this, 'location', location);
  }
  //todo: methods for next tabs
}
