import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itogovaya-peredelanaya-должности-l');
  this.route('i-i-s-itogovaya-peredelanaya-должности-e',
  { path: 'i-i-s-itogovaya-peredelanaya-должности-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-должности-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-должности-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-единицы-измер-l');
  this.route('i-i-s-itogovaya-peredelanaya-единицы-измер-e',
  { path: 'i-i-s-itogovaya-peredelanaya-единицы-измер-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-единицы-измер-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-единицы-измер-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-заказ-пост-l');
  this.route('i-i-s-itogovaya-peredelanaya-заказ-пост-e',
  { path: 'i-i-s-itogovaya-peredelanaya-заказ-пост-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-заказ-пост-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-заказ-пост-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-заказы-покуп-l');
  this.route('i-i-s-itogovaya-peredelanaya-заказы-покуп-e',
  { path: 'i-i-s-itogovaya-peredelanaya-заказы-покуп-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-заказы-покуп-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-заказы-покуп-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-клиенты-l');
  this.route('i-i-s-itogovaya-peredelanaya-клиенты-e',
  { path: 'i-i-s-itogovaya-peredelanaya-клиенты-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-клиенты-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-клиенты-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-контрагенты-l');
  this.route('i-i-s-itogovaya-peredelanaya-контрагенты-e',
  { path: 'i-i-s-itogovaya-peredelanaya-контрагенты-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-контрагенты-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-контрагенты-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-менеджер-l');
  this.route('i-i-s-itogovaya-peredelanaya-менеджер-e',
  { path: 'i-i-s-itogovaya-peredelanaya-менеджер-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-менеджер-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-менеджер-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-номенклатура-l');
  this.route('i-i-s-itogovaya-peredelanaya-номенклатура-e',
  { path: 'i-i-s-itogovaya-peredelanaya-номенклатура-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-номенклатура-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-номенклатура-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-организации-l');
  this.route('i-i-s-itogovaya-peredelanaya-организации-e',
  { path: 'i-i-s-itogovaya-peredelanaya-организации-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-организации-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-организации-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-отчет-о-зак-l');
  this.route('i-i-s-itogovaya-peredelanaya-отчет-о-зак-e',
  { path: 'i-i-s-itogovaya-peredelanaya-отчет-о-зак-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-отчет-о-зак-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-отчет-о-зак-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-план-закупок-l');
  this.route('i-i-s-itogovaya-peredelanaya-план-закупок-e',
  { path: 'i-i-s-itogovaya-peredelanaya-план-закупок-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-план-закупок-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-план-закупок-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-склады-l');
  this.route('i-i-s-itogovaya-peredelanaya-склады-e',
  { path: 'i-i-s-itogovaya-peredelanaya-склады-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-склады-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-склады-e/new' });
  this.route('i-i-s-itogovaya-peredelanaya-сотрудники-l');
  this.route('i-i-s-itogovaya-peredelanaya-сотрудники-e',
  { path: 'i-i-s-itogovaya-peredelanaya-сотрудники-e/:id' });
  this.route('i-i-s-itogovaya-peredelanaya-сотрудники-e.new',
  { path: 'i-i-s-itogovaya-peredelanaya-сотрудники-e/new' });
});

export default Router;
