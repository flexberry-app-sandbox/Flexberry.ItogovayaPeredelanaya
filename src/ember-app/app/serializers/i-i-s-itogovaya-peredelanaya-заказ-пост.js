import { Serializer as ЗаказПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itogovaya-peredelanaya-заказ-пост';
import ОтчетОЗакSerializer from './i-i-s-itogovaya-peredelanaya-отчет-о-зак';

export default ОтчетОЗакSerializer.extend(ЗаказПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
