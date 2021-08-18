import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'simpleppractice/config/environment';

export default class RequestServiceRoute extends Route {
  @service store;
  @service selection;

  model() {
    return this.store.query('cptCode', {
      filter: {
        clinicianId: config.APP.CLINICIAN_ID,
      },
    });
  }
}
