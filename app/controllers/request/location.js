import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestLocationController extends Controller {
  @service selection;

  @action
  setSelectedLocation(location) {
    this.selection.setSelectedLocation(location);
    //transition to date route
    //this.transitionToRoute('request.location');
  }
}
