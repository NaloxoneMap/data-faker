# Naloxone Map Data Faker

Generate fake data for the Naloxone Map project.

## Installation

    npm -i --save @naloxonemap/data-faker

## Usage

    import { genPublicApiKit } from '@naloxonemap/data-faker';

    const kits = async () => {
    return await genPublicApiKit(10)
    }

    console.log(kits) // prints array of 10 faked json objects

## Example data

### Public Api Kit

    {
        _id: 'd341eec8-2667-4a20-8597-d0e47bc59961',
        location: {
          address: '69249 Alvina Meadow',
          postalZip: '59233',
          country: 'Canada',
          provinceState: 'Québec',
          point: { type: 'Point', coordinates: [Object] },
          city: 'Mireyaville'
        },
        lastVerified: '2002-03-23T18:29:44.294Z',
        opensAt: '15:19:59.907Z',
        closesAt: '19:33:45.558Z',
        openOn: [ 2, 1, 1 ],
        expires: '2020-07-15T04:00:00.0Z',
        organizationName: 'Dach LLC',
        notes: [
          { locale: 'magna id', content: 'irure eiusmod cillum' },
          {
            locale: 'veniam consequat occaecat cupidatat dolor',
            content: 'eiusmod dolore consectetur Excepteur non'
          }
        ]
      }
