import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestServiceController extends Controller {
  @service selection;

  @action
  setSelectedService(service) {
    this.selection.setSelectedService(service);
    this.transitionToRoute('request.location');
  }
}
