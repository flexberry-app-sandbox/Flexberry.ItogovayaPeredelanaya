import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧЗаказПокMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧЗаказПокMixin, Validations, {
});

defineProjections(Model);

export default Model;
