import { InsideItemsRefbookI, OfferI } from './offers.types';

type GetOffersMockDataParamsT = {
  limit?: number;
  offset?: number;
} | undefined

export const getOffersMockData = (params: GetOffersMockDataParamsT = {}): OfferI[] => {
  const mockData = [
    {
      id: 0,
      images: [
        {
          id: 1,
          src: 'img/apartment-01.jpg',
        },
        {
          id: 0,
          src: 'img/room.jpg',
        },
        {
          id: 2,
          src: 'img/apartment-02.jpg',
        },
        {
          id: 3,
          src: 'img/apartment-03.jpg',
        },
        {
          id: 4,
          src: 'img/studio-01.jpg',
        },
        {
          id: 5,
          src: 'img/apartment-01.jpg',
        },
      ],
      premium: true,
      name: 'Beautiful & luxurious studio at great location',
      rating: 4.8,
      entire: 'Apartment',
      bedroomsCount: 3,
      maxAdults: 4,
      price: 120,
      insideItems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      host: {
        name: 'Angelina',
        status: 'Pro',
        imgSrc: 'img/avatar-angelina.jpg',
      },
      offerText:
        'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. \n An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      reviews: [
        {
          id: 0,
          name: 'Max',
          imgSrc: 'img/avatar-max.jpg',
          rating: 4,
          text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
          date: '2019-04-24',
        },
      ],
    },
    {
      id: 1,
      images: [
        {
          id: 0,
          src: 'img/room.jpg',
        },
        {
          id: 1,
          src: 'img/apartment-01.jpg',
        },
        {
          id: 2,
          src: 'img/apartment-02.jpg',
        },
        {
          id: 3,
          src: 'img/apartment-03.jpg',
        },
        {
          id: 4,
          src: 'img/studio-01.jpg',
        },
        {
          id: 5,
          src: 'img/apartment-01.jpg',
        },
      ],
      premium: false,
      name: 'Wood and stone place',
      rating: 4.5,
      entire: 'Apartment',
      bedroomsCount: 2,
      maxAdults: 3,
      price: 90,
      insideItems: [1, 2, 3, 4, 6, 8, 9],
      host: {
        name: 'John',
        status: 'Regular',
        imgSrc: 'img/avatar-angelina.jpg',
      },
      offerText:
        'A cozy apartment located in the heart of the city. Close to all major attractions and public transportation. Perfect for a weekend getaway.',
      reviews: [
        {
          id: 1,
          name: 'Sarah',
          imgSrc: 'img/avatar-max.jpg',
          rating: 5,
          text: 'Great location and comfortable stay. Highly recommended!',
          date: '2020-08-12',
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          id: 2,
          src: 'img/apartment-02.jpg',
        },
        {
          id: 0,
          src: 'img/room.jpg',
        },
        {
          id: 1,
          src: 'img/apartment-01.jpg',
        },
        {
          id: 3,
          src: 'img/apartment-03.jpg',
        },
        {
          id: 4,
          src: 'img/studio-01.jpg',
        },
        {
          id: 5,
          src: 'img/apartment-01.jpg',
        },
      ],
      premium: true,
      name: 'Modern studio with stunning views',
      rating: 4.9,
      entire: 'Studio',
      bedroomsCount: 1,
      maxAdults: 2,
      price: 150,
      insideItems: [0, 2, 3, 4, 6, 8, 9],
      host: {
        name: 'Emily',
        status: 'Pro',
        imgSrc: 'img/avatar-angelina.jpg',
      },
      offerText:
        'A modern studio apartment with stunning views of the city skyline. Perfect for couples or solo travelers looking for a stylish and comfortable stay.',
      reviews: [
        {
          id: 2,
          name: 'Michael',
          imgSrc: 'img/avatar-max.jpg',
          rating: 4.7,
          text: 'The studio was exactly as described. The views were breathtaking. Highly recommended!',
          date: '2021-02-28',
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          id: 3,
          src: 'img/apartment-03.jpg',
        },
        {
          id: 0,
          src: 'img/room.jpg',
        },
        {
          id: 1,
          src: 'img/apartment-01.jpg',
        },
        {
          id: 2,
          src: 'img/apartment-02.jpg',
        },
        {
          id: 4,
          src: 'img/studio-01.jpg',
        },
        {
          id: 5,
          src: 'img/apartment-01.jpg',
        },
      ],
      premium: false,
      name: 'Spacious family house with garden',
      rating: 4.6,
      entire: 'House',
      bedroomsCount: 4,
      maxAdults: 6,
      price: 200,
      insideItems: [0, 1, 2, 3, 4, 6, 7, 8, 9, 10],
      host: {
        name: 'David',
        status: 'Regular',
        imgSrc: 'img/avatar-angelina.jpg',
      },
      offerText:
        'A spacious family house with a beautiful garden. Perfect for a relaxing vacation with your loved ones.',
      reviews: [
        {
          id: 3,
          name: 'Emma',
          imgSrc: 'img/avatar-max.jpg',
          rating: 4.8,
          text: 'We had a wonderful stay at this house. The garden was amazing!',
          date: '2021-06-15',
        },
      ],
    },
    {
      id: 4,
      images: [
        {
          id: 0,
          src: 'img/room.jpg',
        },
        {
          id: 1,
          src: 'img/apartment-01.jpg',
        },
        {
          id: 2,
          src: 'img/apartment-02.jpg',
        },
        {
          id: 3,
          src: 'img/apartment-03.jpg',
        },
        {
          id: 4,
          src: 'img/studio-01.jpg',
        },
        {
          id: 5,
          src: 'img/apartment-01.jpg',
        },
      ],
      premium: false,
      name: 'Charming cottage in the countryside',
      rating: 4.7,
      entire: 'Cottage',
      bedroomsCount: 2,
      maxAdults: 3,
      price: 80,
      insideItems: [0, 2, 3, 4, 6, 8, 11],
      host: {
        name: 'Sophie',
        status: 'Regular',
        imgSrc: 'img/avatar-angelina.jpg',
      },
      offerText:
        'A charming cottage nestled in the picturesque countryside. Perfect for a peaceful and relaxing getaway.',
      reviews: [
        {
          id: 4,
          name: 'Oliver',
          imgSrc: 'img/avatar-max.jpg',
          rating: 4.5,
          text: 'The cottage was cozy and the surroundings were beautiful. We had a great time!',
          date: '2021-09-10',
        },
      ],
    },
  ];

  const offset = params?.offset ?? 0;
  const limit = params?.limit ?? mockData.length;

  return mockData.slice(offset, offset + limit);
};

export const getOfferMockData = (id: number): OfferI | null => {
  const offerData = getOffersMockData()[id];

  return offerData || null;
};

export const getInsideItemsRefbook = (): InsideItemsRefbookI[] => [
  { id: 0, name: 'Wi-Fi' },
  { id: 1, name: 'Washing machine' },
  { id: 2, name: 'Towels' },
  { id: 3, name: 'Heating' },
  { id: 4, name: 'Coffee machine' },
  { id: 5, name: 'Baby seat' },
  { id: 6, name: 'Kitchen' },
  { id: 7, name: 'Dishwasher' },
  { id: 8, name: 'Cabel TV' },
  { id: 9, name: 'Fridge' },
  { id: 10, name: 'Garden' },
  { id: 11, name: 'Fireplace' },
];
