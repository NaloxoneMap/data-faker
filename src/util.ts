export function makeTypesObj(properties: { [key: string]: any }) {
  /*
   * Create a set of key, value pairs that describes the expected properties
   * of an object as well as their types.
   *
   * Used in tests to verify that endpoints return data with correct structure.
   */
  let tar = {};
  for (let prop in properties) {
    tar = { ...tar, ...{ [prop]: properties[prop].type } };
  }
  return tar;
}

export function randCoords(): { lon: number; lat: number } {
  /**
   * Generate a pair of random coordinates. Coordinates will be
   * situated within a small geographical area in Montreal, Canada.
   */
  return {
    lon: Math.random() * (45.52056 - 45.518733) + 45.518733,
    lat: Math.random() * (-73.582177 + 73.594177) - 73.594177,
  };
}
