export function randCoords(): { lon: number; lat: number } {
  /**
   * Generate a pair of random coordinates. Coordinates will be
   * situated within a small geographical area in Montreal, Canada.
   */
  return {
    lon: Math.random() * (-73.25 + 74) - 74,
    lat: Math.random() * (46 - 45.25) + 45.25,
  };
}
