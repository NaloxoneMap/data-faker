import { Types } from 'mongoose';

interface OpeningHours {
  weekday: number;
  opensAt: string;
  closesAt: string;
  closed: boolean;
}

interface INestedUser {
  _id: string;
  username: string;
  email: string;
}

interface Note {
  locale: string;
  content: string;
}
interface Contact {
  telephone1: string;
  telephone2: string;
  email: string;
  name: string;
  public: boolean;
  primary: boolean;
}

export interface Kit {
  _id: Types.ObjectId;
  organizationName: string;
  contacts: Contact[];
  location: Location;
  hidden: boolean;
  openingHours: OpeningHours[];
  lastVerifiedOn: Date;
  lastVerifiedBy: INestedUser;
  createdOn: Date;
  createdBy: INestedUser;
  lastEditedOn: Date;
  lastEditedBy: INestedUser;
  expires: Date;
  notes: Note[];
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
