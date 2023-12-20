import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-itogovaya-peredelanaya-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-менеджер.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МенеджерE', 'i-i-s-itogovaya-peredelanaya-менеджер', {
    сотрудники: belongsTo('i-i-s-itogovaya-peredelanaya-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должности: belongsTo('i-i-s-itogovaya-peredelanaya-должности', '', {
        должность: attr('Должность', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('МенеджерL', 'i-i-s-itogovaya-peredelanaya-менеджер', {
    сотрудники: belongsTo('i-i-s-itogovaya-peredelanaya-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
