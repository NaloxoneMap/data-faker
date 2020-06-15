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
