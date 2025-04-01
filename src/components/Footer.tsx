
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">B2B Sales Win Rate Calculator</h3>
            <p className="text-sm opacity-80">
              Helping sales professionals improve their performance metrics and close more deals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Win Rate</a></li>
              <li><a href="#calculator" className="hover:underline">Calculator</a></li>
              <li><a href="#insights" className="hover:underline">Sales Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email: info@saleswincalculator.com</li>
              <li>Phone: +91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} B2B Sales Win Rate Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
