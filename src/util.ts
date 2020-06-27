export function randCoords(): { lon: number; lat: number } {
  /**
   * Generate a pair of random coordinates. Coordinates will be
   * situated within a small geographical area in Montreal, Canada.
   */
  return {
    lon: Math.random() * (-73.3 + 73.75) - 73.75,
    lat: Math.random() * (45.7 - 45.3) + 45.3,
  };
}
