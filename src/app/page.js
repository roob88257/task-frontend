// File: src/app/page.js
'use client'

import Image from 'next/image';
import { ShoppingBag, User, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import CustomCarousel from './components/CustomCarousel.js';
import StatusCheck from './components/StatusCheck.js';
import toast, { Toaster } from 'react-hot-toast';



export default function Home() {
  const productImages = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg"
  ];

  const handleAddToCart = () => {
    toast.success('Button clicked !!!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }

  return (
    <div className="bg-[#3D2B24] text-white font-sans">
      <StatusCheck>
      <Toaster position="top-center" reverseOrder={false} />
        <main className="px-4">
          <section className="flex flex-row items-center justify-start">
            <div className="lg:w-1/2 ml-20">
              <div className="flex justify-start items-center p-4 mb-10">
                <Menu className="w-6 h-6 hover:opacity-45 cursor-pointer" onClick={handleAddToCart} />
                <div className="w-6 h-6" /> {/* Placeholder for logo */}
                <div className="flex space-x-4">
                  <User className="w-6 h-6 hover:opacity-45 cursor-pointer" onClick={handleAddToCart} />
                  <ShoppingBag className="w-6 h-6 hover:opacity-45 cursor-pointer" onClick={handleAddToCart} />
                </div>
              </div>
              <h1 className="text-7xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>COLD BREW</h1>
              <p className="text-xl mb-4 text-[#8DC7C5]">COFFEE CONCENTRATE</p>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold mr-4">$60.00</span>
                <button className="bg-[#F0A202] text-[#3D2B24] p-2 rounded-full" onClick={handleAddToCart}>
                  <ShoppingBag className="w-6 h-6 hover:opacity-45" />
                </button>
              </div>
              <p className="mt-4 text-sm">
                A New concentrate cold brew coffee with Concentrate Ready to Drink, and Brew-It-Yourself products available nationwide, enjoy this perfect batch of cold.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 bg-[#F0A202]">
              <Image src="/images/cold-brew-bottle.jpg" alt="Cold Brew Bottle" width={128} height={128} className="rounded-lg" />
            </div>
          </section>

          <section className="py-12 mb-12">
            <div className="flex justify-between items-center">
              <div className="flex-grow mr-4 overflow-hidden">
                <div className="bg-[#4A332C] rounded-lg p-2">
                  <CustomCarousel images={productImages} />
                </div>
              </div>
              <div className="bg-[#F26755] text-white p-6 rounded-3xl flex items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-1">15% OFF</h3>
                  <p className="text-sm">#CBIGRADYS</p>
                </div>
                <Image src="/images/coffee-beans.jpg" alt="Coffee Beans" width={64} height={64} className="object-cover rounded-full ml-4" />
              </div>
            </div>
          </section>

          {/* ... Rest of the sections ... */}

        </main>

        <footer className="bg-[#4A332C] py-8 px-4 mt-12">
          {/* ... Footer content ... */}
        </footer>
      </StatusCheck>
    </div>
  );
}