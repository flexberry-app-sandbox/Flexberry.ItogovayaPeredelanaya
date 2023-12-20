import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itogovaya-peredelanaya-т-ч-заказ', 'Unit | Model | i-i-s-itogovaya-peredelanaya-т-ч-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-itogovaya-peredelanaya-должности',
    'model:i-i-s-itogovaya-peredelanaya-единицы-измер',
    'model:i-i-s-itogovaya-peredelanaya-заказ-пост',
    'model:i-i-s-itogovaya-peredelanaya-заказы-покуп',
    'model:i-i-s-itogovaya-peredelanaya-клиенты',
    'model:i-i-s-itogovaya-peredelanaya-контрагенты',
    'model:i-i-s-itogovaya-peredelanaya-менеджер',
    'model:i-i-s-itogovaya-peredelanaya-номенклатура',
    'model:i-i-s-itogovaya-peredelanaya-организации',
    'model:i-i-s-itogovaya-peredelanaya-отчет-о-зак',
    'model:i-i-s-itogovaya-peredelanaya-план-закупок',
    'model:i-i-s-itogovaya-peredelanaya-план',
    'model:i-i-s-itogovaya-peredelanaya-склады',
    'model:i-i-s-itogovaya-peredelanaya-сотрудники',
    'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок',
    'model:i-i-s-itogovaya-peredelanaya-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
