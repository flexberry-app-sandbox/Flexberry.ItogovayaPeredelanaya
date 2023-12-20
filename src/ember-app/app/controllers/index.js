import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.автоматизация-закупок.caption'),
          title: i18n.t('forms.application.sitemap.автоматизация-закупок.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.title'),
            children: [{
              link: 'i-i-s-itogovaya-peredelanaya-единицы-измер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-единицы-измер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-единицы-измер-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-менеджер-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-менеджер-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-менеджер-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-контрагенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-контрагенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-контрагенты-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-организации-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-организации-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-организации-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-сотрудники-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-склады-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-склады-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-склады-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-клиенты-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-клиенты-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-клиенты-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-должности-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-должности-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-должности-l.title'),
              icon: 'folder open',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.справочники.i-i-s-itogovaya-peredelanaya-номенклатура-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.title'),
            children: [{
              link: 'i-i-s-itogovaya-peredelanaya-план-закупок-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-peredelanaya-план-закупок-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-peredelanaya-план-закупок-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-заказы-покуп-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-peredelanaya-заказы-покуп-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-peredelanaya-заказы-покуп-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-itogovaya-peredelanaya-заказ-пост-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-peredelanaya-заказ-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.документы.i-i-s-itogovaya-peredelanaya-заказ-пост-l.title'),
              icon: 'phone',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.caption'),
            title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.title'),
            children: [{
              link: 'i-i-s-itogovaya-peredelanaya-отчет-о-зак-l',
              caption: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-itogovaya-peredelanaya-отчет-о-зак-l.caption'),
              title: i18n.t('forms.application.sitemap.автоматизация-закупок.отчеты.i-i-s-itogovaya-peredelanaya-отчет-о-зак-l.title'),
              icon: 'tags',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})