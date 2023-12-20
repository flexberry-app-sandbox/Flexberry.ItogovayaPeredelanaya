import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаказыПокупMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-заказы-покуп';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаказыПокупMixin, Validations, {
});

defineProjections(Model);

export default Model;
