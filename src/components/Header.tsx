
import React from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Calculator className="h-8 w-8" />
          <h1 className="text-xl md:text-2xl font-bold">B2B Sales Win Rate Calculator</h1>
        </div>
        <nav>
          <Button variant="link" className="text-white">
            Home
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
