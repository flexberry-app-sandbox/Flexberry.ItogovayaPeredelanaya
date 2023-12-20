import {
  defineNamespace,
  defineProjections,
  Model as ТЧЗаказПокMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧЗаказПокMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
