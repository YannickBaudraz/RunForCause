export default class ObjectHelper {

  public static deleteEmptyValues(obj: object) {
    for (const key in obj) {
      const objKey = key as keyof typeof obj;
      !obj[objKey] && delete obj[objKey];
    }
  }
}
