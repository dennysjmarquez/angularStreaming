const getValue = (obj: object, field: string): any => {
  const fields = field.split('.');
  let elements = obj;
  while (fields.length > 0 && elements !== undefined && elements !== null) {
    elements = elements[fields.shift()];
  }
  return elements;
};

export default class SortUtils {
  static sortNumber(
    list: Array<any>,
    field: string,
    type: 'asc' | 'desc'
  ): Array<any> {
    if (!list || !field || (list && list.length === 0)) return [];

    list.sort((objA, objB) => {
      const a = getValue(objA, field);
      const b = getValue(objB, field);
      if (type === 'asc') return a - b;
      return b - a;
    });
    return list;
  }

  static sortString(list, field, type: 'asc' | 'desc'): Array<any> {
    if (!list || !field || (list && list.length === 0)) return [];

    list.sort((objA, objB) => {
      const a = getValue(objA, field);
      const b = getValue(objB, field);
      if (type === 'asc') return a.localeCompare(b);
      return b.localeCompare(a);
    });
    return list;
  }
}
