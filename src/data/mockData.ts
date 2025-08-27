
export const featuredRestaurants = [
  {
    id: '1',
    name: 'Bella Italia',
    cuisine: 'Italian • Pizza • Pasta',
    rating: 4.8,
    deliveryTime: '25-35 min',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop',
    location: 'Downtown',
    priceRange: '$$'
  },
  {
    id: '2',
    name: 'Sushi Zen',
    cuisine: 'Japanese • Sushi • Asian',
    rating: 4.9,
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=300&fit=crop',
    location: 'Uptown',
    priceRange: '$$$'
  },
  {
    id: '3',
    name: 'Burger Palace',
    cuisine: 'American • Burgers • Fast Food',
    rating: 4.6,
    deliveryTime: '15-25 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
    location: 'Food District',
    priceRange: '$'
  },
  {
    id: '4',
    name: 'Spice Garden',
    cuisine: 'Indian • Curry • Vegetarian',
    rating: 4.7,
    deliveryTime: '35-45 min',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop',
    location: 'Cultural Quarter',
    priceRange: '$$'
  }
];

export const allRestaurants = [
  ...featuredRestaurants,
  {
    id: '5',
    name: 'Taco Fiesta',
    cuisine: 'Mexican • Tacos • Spicy',
    rating: 4.5,
    deliveryTime: '20-30 min',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c13c7f7?w=500&h=300&fit=crop',
    location: 'Mission District',
    priceRange: '$'
  },
  {
    id: '6',
    name: 'The French Bistro',
    cuisine: 'French • Fine Dining • Wine',
    rating: 4.8,
    deliveryTime: '45-55 min',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
    location: 'Arts District',
    priceRange: '$$$$'
  },
  {
    id: '7',
    name: 'Green Bowl',
    cuisine: 'Healthy • Salads • Vegan',
    rating: 4.4,
    deliveryTime: '15-25 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop',
    location: 'Health District',
    priceRange: '$$'
  },
  {
    id: '8',
    name: 'BBQ Central',
    cuisine: 'American • BBQ • Meat',
    rating: 4.6,
    deliveryTime: '30-40 min',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop',
    location: 'Grill Street',
    priceRange: '$$'
  }
];

export const cuisineCategories = [
  {
    id: 'italian',
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop',
    restaurantCount: 15
  },
  {
    id: 'asian',
    name: 'Asian',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop',
    restaurantCount: 22
  },
  {
    id: 'american',
    name: 'American',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop',
    restaurantCount: 18
  },
  {
    id: 'mexican',
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c13c7f7?w=200&h=200&fit=crop',
    restaurantCount: 12
  },
  {
    id: 'healthy',
    name: 'Healthy',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop',
    restaurantCount: 8
  },
  {
    id: 'indian',
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop',
    restaurantCount: 14
  }
];

export const menuItems = {
  '1': [ // Bella Italia menu
    {
      id: '1-1',
      name: 'Margherita Pizza',
      description: 'Fresh tomato sauce, mozzarella, basil, extra virgin olive oil',
      price: 16.99,
      category: 'Pizza',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
      popular: true
    },
    {
      id: '1-2',
      name: 'Spaghetti Carbonara',
      description: 'Creamy pasta with pancetta, egg, parmesan cheese',
      price: 18.99,
      category: 'Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop'
    },
    {
      id: '1-3',
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan, classic caesar dressing',
      price: 12.99,
      category: 'Salads',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop'
    }
  ]
};
