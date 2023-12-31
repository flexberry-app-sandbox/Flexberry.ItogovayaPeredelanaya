import {
  defineNamespace,
  defineProjections,
  Model as ОрганизацииMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-peredelanaya-организации';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОрганизацииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
