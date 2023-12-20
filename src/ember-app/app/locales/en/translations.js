import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItogovaya_peredelanayaДолжностиLForm from './forms/i-i-s-itogovaya-peredelanaya-должности-l';
import IISItogovaya_peredelanayaЕдиницыИзмерLForm from './forms/i-i-s-itogovaya-peredelanaya-единицы-измер-l';
import IISItogovaya_peredelanayaЗаказПостLForm from './forms/i-i-s-itogovaya-peredelanaya-заказ-пост-l';
import IISItogovaya_peredelanayaЗаказыПокупLForm from './forms/i-i-s-itogovaya-peredelanaya-заказы-покуп-l';
import IISItogovaya_peredelanayaКлиентыLForm from './forms/i-i-s-itogovaya-peredelanaya-клиенты-l';
import IISItogovaya_peredelanayaКонтрагентыLForm from './forms/i-i-s-itogovaya-peredelanaya-контрагенты-l';
import IISItogovaya_peredelanayaМенеджерLForm from './forms/i-i-s-itogovaya-peredelanaya-менеджер-l';
import IISItogovaya_peredelanayaНоменклатураLForm from './forms/i-i-s-itogovaya-peredelanaya-номенклатура-l';
import IISItogovaya_peredelanayaОрганизацииLForm from './forms/i-i-s-itogovaya-peredelanaya-организации-l';
import IISItogovaya_peredelanayaОтчетОЗакLForm from './forms/i-i-s-itogovaya-peredelanaya-отчет-о-зак-l';
import IISItogovaya_peredelanayaПланЗакупокLForm from './forms/i-i-s-itogovaya-peredelanaya-план-закупок-l';
import IISItogovaya_peredelanayaСкладыLForm from './forms/i-i-s-itogovaya-peredelanaya-склады-l';
import IISItogovaya_peredelanayaСотрудникиLForm from './forms/i-i-s-itogovaya-peredelanaya-сотрудники-l';
import IISItogovaya_peredelanayaДолжностиEForm from './forms/i-i-s-itogovaya-peredelanaya-должности-e';
import IISItogovaya_peredelanayaЕдиницыИзмерEForm from './forms/i-i-s-itogovaya-peredelanaya-единицы-измер-e';
import IISItogovaya_peredelanayaЗаказПостEForm from './forms/i-i-s-itogovaya-peredelanaya-заказ-пост-e';
import IISItogovaya_peredelanayaЗаказыПокупEForm from './forms/i-i-s-itogovaya-peredelanaya-заказы-покуп-e';
import IISItogovaya_peredelanayaКлиентыEForm from './forms/i-i-s-itogovaya-peredelanaya-клиенты-e';
import IISItogovaya_peredelanayaКонтрагентыEForm from './forms/i-i-s-itogovaya-peredelanaya-контрагенты-e';
import IISItogovaya_peredelanayaМенеджерEForm from './forms/i-i-s-itogovaya-peredelanaya-менеджер-e';
import IISItogovaya_peredelanayaНоменклатураEForm from './forms/i-i-s-itogovaya-peredelanaya-номенклатура-e';
import IISItogovaya_peredelanayaОрганизацииEForm from './forms/i-i-s-itogovaya-peredelanaya-организации-e';
import IISItogovaya_peredelanayaОтчетОЗакEForm from './forms/i-i-s-itogovaya-peredelanaya-отчет-о-зак-e';
import IISItogovaya_peredelanayaПланЗакупокEForm from './forms/i-i-s-itogovaya-peredelanaya-план-закупок-e';
import IISItogovaya_peredelanayaСкладыEForm from './forms/i-i-s-itogovaya-peredelanaya-склады-e';
import IISItogovaya_peredelanayaСотрудникиEForm from './forms/i-i-s-itogovaya-peredelanaya-сотрудники-e';
import IISItogovaya_peredelanayaДолжностиModel from './models/i-i-s-itogovaya-peredelanaya-должности';
import IISItogovaya_peredelanayaЕдиницыИзмерModel from './models/i-i-s-itogovaya-peredelanaya-единицы-измер';
import IISItogovaya_peredelanayaЗаказПостModel from './models/i-i-s-itogovaya-peredelanaya-заказ-пост';
import IISItogovaya_peredelanayaЗаказыПокупModel from './models/i-i-s-itogovaya-peredelanaya-заказы-покуп';
import IISItogovaya_peredelanayaКлиентыModel from './models/i-i-s-itogovaya-peredelanaya-клиенты';
import IISItogovaya_peredelanayaКонтрагентыModel from './models/i-i-s-itogovaya-peredelanaya-контрагенты';
import IISItogovaya_peredelanayaМенеджерModel from './models/i-i-s-itogovaya-peredelanaya-менеджер';
import IISItogovaya_peredelanayaНоменклатураModel from './models/i-i-s-itogovaya-peredelanaya-номенклатура';
import IISItogovaya_peredelanayaОрганизацииModel from './models/i-i-s-itogovaya-peredelanaya-организации';
import IISItogovaya_peredelanayaОтчетОЗакModel from './models/i-i-s-itogovaya-peredelanaya-отчет-о-зак';
import IISItogovaya_peredelanayaПланЗакупокModel from './models/i-i-s-itogovaya-peredelanaya-план-закупок';
import IISItogovaya_peredelanayaПланModel from './models/i-i-s-itogovaya-peredelanaya-план';
import IISItogovaya_peredelanayaСкладыModel from './models/i-i-s-itogovaya-peredelanaya-склады';
import IISItogovaya_peredelanayaСотрудникиModel from './models/i-i-s-itogovaya-peredelanaya-сотрудники';
import IISItogovaya_peredelanayaТЧЗаказПокModel from './models/i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок';
import IISItogovaya_peredelanayaТЧЗаказModel from './models/i-i-s-itogovaya-peredelanaya-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itogovaya-peredelanaya-должности': IISItogovaya_peredelanayaДолжностиModel,
    'i-i-s-itogovaya-peredelanaya-единицы-измер': IISItogovaya_peredelanayaЕдиницыИзмерModel,
    'i-i-s-itogovaya-peredelanaya-заказ-пост': IISItogovaya_peredelanayaЗаказПостModel,
    'i-i-s-itogovaya-peredelanaya-заказы-покуп': IISItogovaya_peredelanayaЗаказыПокупModel,
    'i-i-s-itogovaya-peredelanaya-клиенты': IISItogovaya_peredelanayaКлиентыModel,
    'i-i-s-itogovaya-peredelanaya-контрагенты': IISItogovaya_peredelanayaКонтрагентыModel,
    'i-i-s-itogovaya-peredelanaya-менеджер': IISItogovaya_peredelanayaМенеджерModel,
    'i-i-s-itogovaya-peredelanaya-номенклатура': IISItogovaya_peredelanayaНоменклатураModel,
    'i-i-s-itogovaya-peredelanaya-организации': IISItogovaya_peredelanayaОрганизацииModel,
    'i-i-s-itogovaya-peredelanaya-отчет-о-зак': IISItogovaya_peredelanayaОтчетОЗакModel,
    'i-i-s-itogovaya-peredelanaya-план-закупок': IISItogovaya_peredelanayaПланЗакупокModel,
    'i-i-s-itogovaya-peredelanaya-план': IISItogovaya_peredelanayaПланModel,
    'i-i-s-itogovaya-peredelanaya-склады': IISItogovaya_peredelanayaСкладыModel,
    'i-i-s-itogovaya-peredelanaya-сотрудники': IISItogovaya_peredelanayaСотрудникиModel,
    'i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок': IISItogovaya_peredelanayaТЧЗаказПокModel,
    'i-i-s-itogovaya-peredelanaya-т-ч-заказ': IISItogovaya_peredelanayaТЧЗаказModel
  },

  'application-name': 'Itogovaya_peredelanaya',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itogovaya_peredelanaya',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itogovaya_peredelanaya',
          title: 'Itogovaya_peredelanaya'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-itogovaya-peredelanaya-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-менеджер-l': {
              caption: 'Менеджер',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-сотрудники-l': {
              caption: 'Сотрудники',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-клиенты-l': {
              caption: 'Клиенты',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-должности-l': {
              caption: 'Должности',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-itogovaya-peredelanaya-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-заказы-покуп-l': {
              caption: 'Заказы покупупателей',
              title: ''
            },
            'i-i-s-itogovaya-peredelanaya-заказ-пост-l': {
              caption: 'Заказы поставщику',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-itogovaya-peredelanaya-отчет-о-зак-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itogovaya-peredelanaya-должности-l': IISItogovaya_peredelanayaДолжностиLForm,
    'i-i-s-itogovaya-peredelanaya-единицы-измер-l': IISItogovaya_peredelanayaЕдиницыИзмерLForm,
    'i-i-s-itogovaya-peredelanaya-заказ-пост-l': IISItogovaya_peredelanayaЗаказПостLForm,
    'i-i-s-itogovaya-peredelanaya-заказы-покуп-l': IISItogovaya_peredelanayaЗаказыПокупLForm,
    'i-i-s-itogovaya-peredelanaya-клиенты-l': IISItogovaya_peredelanayaКлиентыLForm,
    'i-i-s-itogovaya-peredelanaya-контрагенты-l': IISItogovaya_peredelanayaКонтрагентыLForm,
    'i-i-s-itogovaya-peredelanaya-менеджер-l': IISItogovaya_peredelanayaМенеджерLForm,
    'i-i-s-itogovaya-peredelanaya-номенклатура-l': IISItogovaya_peredelanayaНоменклатураLForm,
    'i-i-s-itogovaya-peredelanaya-организации-l': IISItogovaya_peredelanayaОрганизацииLForm,
    'i-i-s-itogovaya-peredelanaya-отчет-о-зак-l': IISItogovaya_peredelanayaОтчетОЗакLForm,
    'i-i-s-itogovaya-peredelanaya-план-закупок-l': IISItogovaya_peredelanayaПланЗакупокLForm,
    'i-i-s-itogovaya-peredelanaya-склады-l': IISItogovaya_peredelanayaСкладыLForm,
    'i-i-s-itogovaya-peredelanaya-сотрудники-l': IISItogovaya_peredelanayaСотрудникиLForm,
    'i-i-s-itogovaya-peredelanaya-должности-e': IISItogovaya_peredelanayaДолжностиEForm,
    'i-i-s-itogovaya-peredelanaya-единицы-измер-e': IISItogovaya_peredelanayaЕдиницыИзмерEForm,
    'i-i-s-itogovaya-peredelanaya-заказ-пост-e': IISItogovaya_peredelanayaЗаказПостEForm,
    'i-i-s-itogovaya-peredelanaya-заказы-покуп-e': IISItogovaya_peredelanayaЗаказыПокупEForm,
    'i-i-s-itogovaya-peredelanaya-клиенты-e': IISItogovaya_peredelanayaКлиентыEForm,
    'i-i-s-itogovaya-peredelanaya-контрагенты-e': IISItogovaya_peredelanayaКонтрагентыEForm,
    'i-i-s-itogovaya-peredelanaya-менеджер-e': IISItogovaya_peredelanayaМенеджерEForm,
    'i-i-s-itogovaya-peredelanaya-номенклатура-e': IISItogovaya_peredelanayaНоменклатураEForm,
    'i-i-s-itogovaya-peredelanaya-организации-e': IISItogovaya_peredelanayaОрганизацииEForm,
    'i-i-s-itogovaya-peredelanaya-отчет-о-зак-e': IISItogovaya_peredelanayaОтчетОЗакEForm,
    'i-i-s-itogovaya-peredelanaya-план-закупок-e': IISItogovaya_peredelanayaПланЗакупокEForm,
    'i-i-s-itogovaya-peredelanaya-склады-e': IISItogovaya_peredelanayaСкладыEForm,
    'i-i-s-itogovaya-peredelanaya-сотрудники-e': IISItogovaya_peredelanayaСотрудникиEForm
  },

});

export default translations;
