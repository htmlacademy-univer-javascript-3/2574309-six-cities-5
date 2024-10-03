import { Offer } from './offers.types';

export const offersMockData: Offer[] = [
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
    insideItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      status: 'Pro',
    },
    offerText:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.;An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    reviews: [
      {
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
    insideItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'John',
      status: 'Regular',
    },
    offerText:
      'A cozy apartment located in the heart of the city. Close to all major attractions and public transportation. Perfect for a weekend getaway.',
    reviews: [
      {
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
    insideItems: [
      'Wi-Fi',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Emily',
      status: 'Pro',
    },
    offerText:
      'A modern studio apartment with stunning views of the city skyline. Perfect for couples or solo travelers looking for a stylish and comfortable stay.',
    reviews: [
      {
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
    insideItems: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
      'Garden',
    ],
    host: {
      name: 'David',
      status: 'Regular',
    },
    offerText:
      'A spacious family house with a beautiful garden. Perfect for a relaxing vacation with your loved ones.',
    reviews: [
      {
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
    insideItems: [
      'Wi-Fi',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Cabel TV',
      'Fireplace',
    ],
    host: {
      name: 'Sophie',
      status: 'Regular',
    },
    offerText:
      'A charming cottage nestled in the picturesque countryside. Perfect for a peaceful and relaxing getaway.',
    reviews: [
      {
        name: 'Oliver',
        imgSrc: 'img/avatar-max.jpg',
        rating: 4.5,
        text: 'The cottage was cozy and the surroundings were beautiful. We had a great time!',
        date: '2021-09-10',
      },
    ],
  },
];
