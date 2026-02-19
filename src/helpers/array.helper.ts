const getItemById = <T>(
  array: T[],
  itemId: T[keyof T],
  fieldName?: keyof T,
): T | undefined => {
  const currentFieldName = fieldName ?? ('id' as keyof T);

  return array.find(
    (item: T) => item[currentFieldName] === itemId,
  );
};

const removeItemById = <T>(
  array: T[],
  value: T[keyof T],
  fieldName?: keyof T,
): T[] => {
  const currentFieldName = fieldName ?? ('id' as keyof T);

  return array.filter((item) => item[currentFieldName] !== value);
};

const getArrayOfFieldsFromList = <T, D extends keyof T>(
  array: T[],
  fieldName: D,
): T[D][] => array.map((arrayItem: T) => arrayItem[fieldName]);

const isPrimitiveItemExist = <T>(array: T[], item: T): boolean =>
  array.includes(item);

const removePrimitiveItem = <T>(array: T[], removedItem: T): T[] =>
  array.filter((item) => removedItem !== item);

const addItemLast = <T>(array: T[], item: T): T[] => [...array, item];

const manageItemStateIntoArray = <T>(array: T[], item: T): T[] => {
  if (isPrimitiveItemExist(array, item)) {
    return removePrimitiveItem(array, item);
  }

  return addItemLast(array, item);
};

const filterOutBySet = <T>(array: T[], toRemove: T[]): T[] => {
  const set = new Set(toRemove);

  return array.filter((item) => !set.has(item));
};

interface IWithOrder {
  order: number;
}
const getNextOrderValue = <T extends IWithOrder>(array: T[]): number =>
  array.length === 0 ? 0 : Math.max(...array.map((item) => item.order)) + 1;

export {
  getItemById,
  removeItemById,
  getArrayOfFieldsFromList,
  removePrimitiveItem,
  isPrimitiveItemExist,
  addItemLast,
  manageItemStateIntoArray,
  filterOutBySet,
  getNextOrderValue,
};
