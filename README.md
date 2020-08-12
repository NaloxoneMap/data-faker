# Naloxone Map Data Faker

Generate fake data for the Naloxone Map project.

## Installation

    npm -i --save @naloxonemap/data-faker

## API

- genKits

  parameters: num: number. Default = 5

  returns array of kits. First 3 will always have an expires value in the past.

  [sample](#kit)

- genUsers

  parameters: num: number. Default = 5

  returns array of users.

  [sample](#user)

## Usage

    import { genKits } from '@naloxonemap/data-faker';

    const kits = async () => {
    return await genKits(10)
    }

    console.log(kits) // prints array of 10 faked json objects

## Example data

### Kit

      {
        _id: '5f3383771b4f4c1668305f9b',
        location: {
          address: '9759 Lyla Coves',
          postalZip: '28816-2319',
          country: 'Canada',
          provinceState: 'Québec',
          point: { type: 'Point', coordinates: [Object] },
          city: 'Strosinstad'
        },
        lastVerified: 2008-09-15T10:15:28.925Z,
        openingHours: [
          { weekday: 0, opensAt: '22:18', closesAt: 'closed' },
          { weekday: 5, opensAt: '05:44', closesAt: 'closed' },
          { weekday: 1, opensAt: '21:19', closesAt: 'closed' },
          { weekday: 4, opensAt: 'closed', closesAt: 'closed' },
          { weekday: 0, opensAt: 'closed', closesAt: 'closed' },
          { weekday: 6, opensAt: 'closed', closesAt: '02:53' },
          { weekday: 2, opensAt: 'closed', closesAt: '20:45' }
        ],
        expires: 2020-05-12T05:51:51.543Z,
        organizationName: 'Lemke - Crona',
        notes: [
          { locale: 'en', content: 'proident sit' },
          { locale: 'en', content: 'commodo mollit qui' },
          { locale: 'fr', content: 'in irure' },
          { locale: 'en', content: 'nostrud labore' }
        ],
        createdBy: {
          username: 'aute exercitation',
          userId: 'sunt sed officia ullamco nostrud',
          email: 'HqF5owqp@rtRNFjohZbEtIF.nfct'
        },
        createdOn: '1951-05-22T14:14:10.897Z',
        lastVerifiedBy: {
          username: 'deserunt aute ad dolor',
          userId: 'irure ex amet id',
          email: 'GUKyNmhbjDPsbS@YktCUTGB.ruj'
        },
        lastEditedOn: '1994-06-04T01:01:59.475Z',
        lastEditedBy: {
          username: 'nostrud aliquip Ut eu reprehenderit',
          userId: 'est in esse deserunt',
          email: '28krdY@uQcUGxsSQuOTLKnoLHhZRwnIHHnxBMK.uy'
        },
        contacts: [
          {
            info: 'sunt magna nostrud culpa',
            name: 'elit',
            public: true,
            primary: true
          },
          {
            info: 'nulla mollit aute',
            name: 'aliquip proident nostrud',
            public: false,
            primary: true
          },
          {
            info: 'nulla',
            name: 'proident id cupidatat ut',
            public: true,
            primary: false
          }
        ]
      }

### User

{
\_id: '5f3384295298545644232c42',
username: 'Madisyn.Cruickshank',
password: 'tempor',
activated: true,
invited_by: {
email: 'Dexter_Moen@hotmail.com',
username: 'Terrence_Heaney',
\_id: 'reprehenderit sed mollit sit velit'
},
created_at: '1989-09-12T18:18:59.712Z',
last_login: '1982-07-14T06:49:53.414Z',
suspended: false,
kits_modified: 80001496.1043899,
kits_added: 99258415.4586966,
email: 'Evangeline.Auer40@hotmail.com',
roles: [ ' VERIFY_KITS ', 'MANAGE_USERS ' ]
}
