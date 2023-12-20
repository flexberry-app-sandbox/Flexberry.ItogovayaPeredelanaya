import {
  defineNamespace,
  defineProjections,
  Model as ЗаказыПокупMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-заказы-покуп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказыПокупMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
