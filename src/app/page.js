'use client'

import Image from 'next/image';
import { ShoppingBag, User, Menu, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react';
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
    toast.success('Button is Clicked', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }

  return (
    <div className="bg-[#3D2B24] text-white font-sans min-h-screen">
      <StatusCheck>
        <Toaster position="top-center" reverseOrder={false} />
        <header className="flex justify-start space-x-4 items-center p-4">
          <Menu className="w-6 h-6 cursor-pointer" onClick={handleAddToCart} />
          <div className="flex space-x-4">
            <User className="w-6 h-6 cursor-pointer" onClick={handleAddToCart} />
            <ShoppingBag className="w-6 h-6 cursor-pointer" onClick={handleAddToCart}/>
          </div>
        </header>
        
        <main className="px-4 max-w-7xl mx-auto">
          <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-1/2 lg:pr-8">
              <h1 className="text-7xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>COLD BREW</h1>
              <p className="text-xl mb-4 text-[#8DC7C5]">COFFEE CONCENTRATE</p>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold mr-4">$60.00</span>
                <button className="bg-[#F0A202] text-[#3D2B24] p-2 rounded-full" onClick={handleAddToCart}>
                  <ShoppingBag className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm mb-8">
                A New concentrate cold brew coffee with Concentrate Ready to Drink, and Brew-It-Yourself products available nationwide, enjoy this perfect batch of cold.
              </p>
            </div>
            <div className="lg:w-1/2 bg-[#F0A202] rounded-3xl p-8">
              <Image src="/images/cold-brew-bottle.jpg" alt="Cold Brew Bottle" width={400} height={500} className="rounded-lg mx-auto" />
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center">
              <div className="w-2/3 bg-[#4A332C] rounded-lg p-4">
                <CustomCarousel images={productImages} />
              </div>
              <div className="w-1/3 ml-4">
                <div className="bg-[#F26755] text-white p-6 rounded-3xl flex items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">15% OFF</h3>
                    <p className="text-sm">#CBIGRADYS</p>
                  </div>
                  <Image src="/images/coffee-beans.jpg" alt="Coffee Beans" width={64} height={64} className="object-cover rounded-full ml-4" />
                </div>
              </div>
            </div>
          </section>

          
          <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="text-7xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>COLD BREW</h2>
              <p className="text-xl mb-4 text-[#8DC7C5]">ICED COFFEE BEAN</p>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold mr-4">$13.00</span>
                <button className="bg-[#F0A202] text-[#3D2B24] p-2 rounded-full" onClick={handleAddToCart}>
                  <ShoppingBag className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm mb-8">
                Grady's Cold Brew Bean Bags are a Brew It Yourself Kit that lets anyone make cold-brewed iced coffee fresh at home. The Bean Bags are super-easy.
              </p>
            </div>
            <div className="lg:w-1/2 bg-[#F0A202] rounded-3xl p-8">
              <Image src="/images/cold-brew-bottle.jpg" alt="Cold Brew Beans" width={400} height={500} className="rounded-lg mx-auto" />
            </div>
          </section>

          
        </main>

        <footer className="bg-[#4A332C] py-8 px-4 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
              <div>
                <p className="mb-2">Inquiries: info@gradyscoldbrew.com</p>
                <p className="mb-2">Order: shipping@gradysbrew.com</p>
                <p className="mb-4">Phone: (718) 860-1660</p>
                <button className="bg-[#3D2B24] text-white px-4 py-2 rounded-lg mb-4 lg:mb-0" onClick={handleAddToCart}>
                  CONTACT US
                </button>
              </div>
              <div className="w-full lg:w-1/3">
                <CustomCarousel images={productImages} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <a href="#" className="text-sm">ABOUT</a>
                <a href="#" className="text-sm">TERMS</a>
                <a href="#" className="text-sm">PRIVACY</a>
                <a href="#" className="text-sm">PAYMENT</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#F0A202]">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#F0A202]">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#F0A202]">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </StatusCheck>
    </div>
  );
}