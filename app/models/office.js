import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr name;
  @attr phone;
}
