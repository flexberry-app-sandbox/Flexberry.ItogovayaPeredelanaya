import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-itogovaya-peredelanaya-контрагенты', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-itogovaya-peredelanaya-менеджер', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-itogovaya-peredelanaya-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-itogovaya-peredelanaya-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-itogovaya-peredelanaya-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-itogovaya-peredelanaya-план-закупок', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    менеджер: belongsTo('i-i-s-itogovaya-peredelanaya-менеджер', 'Менеджер', {
      сотрудники: belongsTo('i-i-s-itogovaya-peredelanaya-сотрудники', '', {
        фИО: attr('Ответственный', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 3 }),
    организации: belongsTo('i-i-s-itogovaya-peredelanaya-организации', 'Организации', {
      организация: attr('Организация', { index: 6, hidden: true })
    }, { index: 4, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-itogovaya-peredelanaya-склады', 'Склады', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-itogovaya-peredelanaya-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    план: hasMany('i-i-s-itogovaya-peredelanaya-план', 'План', {
      номенклатура: belongsTo('i-i-s-itogovaya-peredelanaya-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-itogovaya-peredelanaya-единицы-измер', '', {
          единицаИзмер: attr('Единица измерения', { index: 2 })
        }, { index: -1, hidden: true }),
        контрагенты: belongsTo('i-i-s-itogovaya-peredelanaya-контрагенты', '', {
          контрагент: attr('Контрагенты', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номенклатура' }),
      количество: attr('Количество', { index: 3 }),
      этоУслуга: attr('Это услуга', { index: 5 })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-itogovaya-peredelanaya-план-закупок', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    организации: belongsTo('i-i-s-itogovaya-peredelanaya-организации', 'Организация', {
      организация: attr('Организация', { index: 2 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-itogovaya-peredelanaya-склады', 'Склад', {
      склад: attr('Склад', { index: 3 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-itogovaya-peredelanaya-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 4 })
    }, { index: -1, hidden: true }),
    датаОкончания: attr('Дата окончания', { index: 5 })
  });
};
