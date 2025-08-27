
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Star, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import { featuredRestaurants, cuisineCategories } from '../data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient bg-hero-pattern overflow-hidden">
        <div className="container-foodie section-padding">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-hero mb-6">
              Delicious Food, 
              <br />
              <span className="text-yellow-300">Delivered Fast</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Discover amazing restaurants near you and get your favorite meals delivered 
              in minutes, not hours.
            </p>
            
            {/* Hero Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="card-glass p-2 rounded-2xl">
                <div className="flex items-center">
                  <div className="flex-1 flex items-center">
                    <Search className="ml-4 text-foodie-gray w-6 h-6" />
                    <input
                      type="text"
                      placeholder="Search for restaurants, cuisines, or dishes..."
                      className="flex-1 bg-transparent border-none px-4 py-4 text-foodie-gray placeholder-gray-400 focus:outline-none text-lg"
                    />
                  </div>
                  <Link
                    to="/restaurants"
                    className="btn-foodie-primary m-1 px-8"
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center space-x-8 md:space-x-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">25min</div>
                <div className="text-white/80">Avg Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.8★</div>
                <div className="text-white/80">Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Cuisine Categories */}
      <section className="section-padding bg-foodie-cream/30">
        <div className="container-foodie">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-section-title">Browse by Cuisine</h2>
            <p className="text-foodie-gray-light max-w-2xl mx-auto">
              Explore diverse flavors from around the world
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cuisineCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/restaurants?cuisine=${category.id}`}
                className="card-foodie group text-center p-6 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-card-title mb-1 group-hover:text-foodie-orange transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-foodie-gray-light">
                  {category.restaurantCount} restaurants
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="section-padding">
        <div className="container-foodie">
          <div className="flex justify-between items-center mb-12 animate-on-scroll">
            <div>
              <h2 className="text-section-title">Featured Restaurants</h2>
              <p className="text-foodie-gray-light">Handpicked favorites in your area</p>
            </div>
            <Link
              to="/restaurants"
              className="btn-foodie-secondary flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <RestaurantCard {...restaurant} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-foodie-cream/30">
        <div className="container-foodie">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-section-title">How FoodieHub Works</h2>
            <p className="text-foodie-gray-light max-w-2xl mx-auto">
              Get your favorite food delivered in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '1',
                title: 'Choose Restaurant',
                description: 'Browse hundreds of restaurants and find your favorites',
                icon: Search
              },
              {
                step: '2',
                title: 'Select & Order',
                description: 'Pick your dishes, customize them, and add to cart',
                icon: Star
              },
              {
                step: '3',
                title: 'Fast Delivery',
                description: 'Relax while we deliver hot, fresh food to your door',
                icon: Clock
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-foodie-orange/10 text-foodie-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foodie-gray mb-3">
                  {item.title}
                </h3>
                <p className="text-foodie-gray-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero-gradient bg-hero-pattern text-white">
        <div className="container-foodie text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join thousands of happy customers and get your favorite food delivered today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/restaurants" className="bg-white text-foodie-orange px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Browse Restaurants
            </Link>
            <Link to="/login" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-foodie-orange transition-all transform hover:scale-105">
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
