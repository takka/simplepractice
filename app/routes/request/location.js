import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'simpleppractice/config/environment';

export default class RequestLocationRoute extends Route {
  @service store;
  @service selection;

  beforeModel() {
    if (!this.selection.service) {
      this.transitionTo('/request/service');
    }
  }

  model() {
    return this.store.query('office', {
      filter: {
        clinicianId: config.APP.CLINICIAN_ID,
        cptCodeId: this.selection.service.id,
      },
    });
  }
}
