export interface Kit {
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

export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  suspended: boolean;
  created_at: string;
  last_login: Date;
  activated: boolean;
  invited_by: { _id: string; email: string; username?: string };
  kits_modified: number;
  kits_added: number;
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
