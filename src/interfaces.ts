export interface PublicApiKit {
  _id: string;
  location: Location;
  lastVerified: Date;
  openingHours: [{ weekday: Weekday; opensAt: string; closesAt: string }];
  organizationName: string;
  expires: Date;
  notes?: [{ locale: string; content: string }];
}

export enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export interface Location {
  point: {
    type: string; // Point. GEOjson field requirement.
    coordinates: {
      lon: number;
      lat: number;
    };
  };
  address: string;
  city: string;
  postalZip: string;
  country: string;
  provinceState: string;
}
