import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-itogovaya-peredelanaya-клиенты', { inverse: null, async: false }),
  тЧЗаказПок: DS.hasMany('i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', { inverse: 'заказыПокуп', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-заказы-покуп.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-заказы-покуп.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-заказы-покуп.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаказПок: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-заказы-покуп.validations.тЧЗаказПок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыПокупE', 'i-i-s-itogovaya-peredelanaya-заказы-покуп', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    клиенты: belongsTo('i-i-s-itogovaya-peredelanaya-клиенты', 'Клиенты', {
      фИО: attr('ФИО клиента', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    тЧЗаказПок: hasMany('i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок', 'заказ покупателя', {
      количество: attr('Количество', { index: 0 }),
      номенклатура: belongsTo('i-i-s-itogovaya-peredelanaya-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ЗаказыПокупL', 'i-i-s-itogovaya-peredelanaya-заказы-покуп', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    клиенты: belongsTo('i-i-s-itogovaya-peredelanaya-клиенты', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
