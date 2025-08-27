
import React, { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import { allRestaurants } from '../data/mockData';

const Restaurants = () => {
  const [sortBy, setSortBy] = useState('rating');
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container-foodie py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foodie-gray mb-2">
            All Restaurants
          </h1>
          <p className="text-foodie-gray-light">
            Discover amazing restaurants near you
          </p>
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="btn-foodie-secondary flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="text-sm text-foodie-gray-light">
              {allRestaurants.length} restaurants found
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-foodie-gray" />
              <span className="text-sm text-foodie-gray">Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-foodie py-2 text-sm"
            >
              <option value="rating">Rating</option>
              <option value="deliveryTime">Delivery Time</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="card-foodie p-6 mb-8 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-foodie-gray mb-3">Cuisine</h3>
                <div className="space-y-2">
                  {['Italian', 'Asian', 'American', 'Mexican', 'Indian'].map((cuisine) => (
                    <label key={cuisine} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-foodie-gray">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foodie-gray mb-3">Price Range</h3>
                <div className="space-y-2">
                  {['$', '$$', '$$$', '$$$$'].map((price) => (
                    <label key={price} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-foodie-gray">{price}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foodie-gray mb-3">Rating</h3>
                <div className="space-y-2">
                  {['4.5+ Stars', '4.0+ Stars', '3.5+ Stars'].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-foodie-gray">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-foodie-secondary">
            Load More Restaurants
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurants;
