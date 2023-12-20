import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  номенклатура: DS.belongsTo('i-i-s-itogovaya-peredelanaya-номенклатура', { inverse: null, async: false }),
  заказыПокуп: DS.belongsTo('i-i-s-itogovaya-peredelanaya-заказы-покуп', { inverse: 'тЧЗаказПок', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказыПокуп: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок.validations.заказыПокуп.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧЗаказПокE', 'i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', {
    количество: attr('Количество', { index: 0 }),
    номенклатура: belongsTo('i-i-s-itogovaya-peredelanaya-номенклатура', 'Номенклатура', {
      номенклатура: attr('Номенклатура', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номенклатура' })
  });
};
