import { Serializer as ЗаказыПокупSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-заказы-покуп';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказыПокупSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
