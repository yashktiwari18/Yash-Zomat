
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart count
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Restaurants', href: '/restaurants', current: location.pathname === '/restaurants' },
    { name: 'About', href: '/about', current: location.pathname === '/about' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container-foodie">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-gradient">FoodieHub</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for restaurants, cuisines, or dishes..."
                className="input-foodie w-full pl-12"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'text-foodie-orange font-semibold'
                    : 'text-foodie-gray hover:text-foodie-orange'
                } transition-colors duration-200 px-3 py-2 rounded-lg`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/cart"
              className="btn-foodie-ghost relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-foodie-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-soft">
                  {cartItems}
                </span>
              )}
            </Link>

            <Link to="/profile" className="btn-foodie-ghost">
              <User className="w-5 h-5" />
            </Link>

            <Link to="/login" className="btn-foodie-primary">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-foodie-gray" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-foodie-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foodie-gray hover:text-foodie-orange transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search restaurants..."
              className="input-foodie w-full pl-12"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-slide-up">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg ${
                    item.current
                      ? 'bg-foodie-cream text-foodie-orange font-semibold'
                      : 'text-foodie-gray hover:bg-foodie-cream hover:text-foodie-orange'
                  } transition-all duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/profile"
                className="block px-4 py-3 rounded-lg text-foodie-gray hover:bg-foodie-cream hover:text-foodie-orange transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <div className="px-4 pt-2">
                <Link
                  to="/login"
                  className="btn-foodie-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
