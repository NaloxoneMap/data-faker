export function randCoords(): { lon: number; lat: number } {
  /**
   * Generate a pair of random coordinates. Coordinates will be
   * situated within a small geographical area in Montreal, Canada.
   */
  return {
    lon: Math.random() * (-72.582177 + 74) - 74,
    lat: Math.random() * (46.514846 - 45) + 45,
  };
}
