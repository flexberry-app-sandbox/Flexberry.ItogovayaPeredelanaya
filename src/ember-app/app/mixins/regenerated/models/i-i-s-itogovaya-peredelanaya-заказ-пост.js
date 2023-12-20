import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-itogovaya-peredelanaya-отчет-о-зак'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-itogovaya-peredelanaya-заказ-пост', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    менеджер: belongsTo('i-i-s-itogovaya-peredelanaya-менеджер', 'Ответственный', {
      сотрудники: belongsTo('i-i-s-itogovaya-peredelanaya-сотрудники', '', {
        фИО: attr('Ответственный', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 3 }),
    организации: belongsTo('i-i-s-itogovaya-peredelanaya-организации', 'Организации', {
      организация: attr('Организация', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-itogovaya-peredelanaya-склады', 'Склады', {
      склад: attr('Склад', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'склад' }),
    контрагенты: belongsTo('i-i-s-itogovaya-peredelanaya-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    состОтгрузки: attr('Сост отгрузки', { index: 11 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 12 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 13 }),
    суммаДокумента: attr('Сумма документа', { index: 14 }),
    тЧЗаказ: hasMany('i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'Т ч заказ', {
      номенклатура: belongsTo('i-i-s-itogovaya-peredelanaya-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-itogovaya-peredelanaya-единицы-измер', '', {
          единицаИзмер: attr('Единица измерения', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номенклатура' }),
      количество: attr('Количество', { index: 3 }),
      цена: attr('Цена', { index: 4 }),
      суммаНДС: attr('Сумма НДС', { index: 5 }),
      сумма: attr('Сумма', { index: 6 }),
      этоУслуга: attr('Это услуга', { index: 7 })
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-itogovaya-peredelanaya-заказ-пост', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    состОтгрузки: attr('Сост отгрузки', { index: 3 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 4 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 5 }),
    суммаДокумента: attr('Сумма документа', { index: 6 }),
    организации: belongsTo('i-i-s-itogovaya-peredelanaya-организации', 'Организация', {
      организация: attr('Организация', { index: 7 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-itogovaya-peredelanaya-склады', 'Склад', {
      склад: attr('Склад', { index: 8 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-itogovaya-peredelanaya-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
