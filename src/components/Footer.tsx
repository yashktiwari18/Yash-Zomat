
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foodie-gray text-white">
      <div className="container-foodie section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold">FoodieHub</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover amazing restaurants and order your favorite food with just a few clicks. 
              Fast delivery, great taste, every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-foodie-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-foodie-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-foodie-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                Home
              </Link>
              <Link to="/restaurants" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                Restaurants
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-foodie-orange transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-foodie-orange flex-shrink-0" />
                <span className="text-sm">123 Food Street, Flavor City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-foodie-orange flex-shrink-0" />
                <span className="text-sm">+1 (555) FOODIE-1</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-foodie-orange flex-shrink-0" />
                <span className="text-sm">hello@foodiehub.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 FoodieHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-foodie-orange transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-300 hover:text-foodie-orange transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-foodie-orange transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
