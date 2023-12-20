import { Serializer as ТЧЗаказПокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-т-ч-заказ-пок';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧЗаказПокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
