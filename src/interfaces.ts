import { Types } from 'mongoose';

// TODO: Fix all these interfaces.

export interface Kit {
  _id: Types.ObjectId;
  location: Location;
  lastVerified: Date;
  hidden: boolean;
  openingHours: [{ weekday: Weekday; opensAt: string; closesAt: string }];
  organizationName: string;
  expires: Date;
  notes?: [{ locale: string; content: string }];
  contacts: Contact[];
}

interface Contact {
  telephone1: string;
  telephone2: string;
  email: string;
  name: string;
  public: boolean;
  primary: boolean;
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
  _id: Types.ObjectId;
  username: string;
  password: string;
  email: string;
  suspended: boolean;
  invitedOn: string;
  lastLogin: Date;
  activated: boolean;
  invitedBy: { _id: Types.ObjectId; email: string; username: string };
  kitsModified: number;
  kitsAdded: number;
  kitsVerified: number;
  kitsDeleted: number;
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
