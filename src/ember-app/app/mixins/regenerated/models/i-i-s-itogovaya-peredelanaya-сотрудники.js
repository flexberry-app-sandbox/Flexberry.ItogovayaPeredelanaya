import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-itogovaya-peredelanaya-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-itogovaya-peredelanaya-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-itogovaya-peredelanaya-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должности: belongsTo('i-i-s-itogovaya-peredelanaya-должности', 'Должности', {
      должность: attr('Должность', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'должность' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-itogovaya-peredelanaya-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    должности: belongsTo('i-i-s-itogovaya-peredelanaya-должности', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
