import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-itogovaya-peredelanaya-заказ-пост-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-itogovaya-peredelanaya-т-ч-заказ+номенклатура':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номенклатура',
            required: true,
            relationName: 'номенклатура',
            projection: 'НоменклатураL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
