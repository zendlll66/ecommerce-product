'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { useCart } from '@/context/CartContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount, clearCart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleCard = () => {
        // Handle cart click event here
        console.log('Cart clicked!');
        setIsOpen(!isOpen); // Toggle the cart state
        console.log(isOpen); // Log the cart count
    }

    const handleDelete = () => {
        console.log('Delete clicked!');
        clearCart(); // รีเซ็ตตะกร้า
    };

    const handleCheckout = () => {
        console.log('Checkout clicked!');
        clearCart(); // รีเซ็ตตะกร้า
    };

    return (
        <div className='bg-white border-b border-black text-black px-6 md:px-[120px] py-4 md:py-[30px] flex justify-between items-center '>
            <div className='flex items-center  w-full md:w-auto '>
                {/* Hamburger menu (mobile only) */}
                <div className='md:hidden  h-fit gap-2 flex items-center mr-2'>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <XMarkIcon className='w-6 h-6 ' />
                        ) : (
                            <Bars3Icon className='w-6 h-6 ' />
                        )}
                    </button>
                </div>

                {/* Left side - Logo */}
                <div className='flex items-center '>
                    <Image src="/assets/images/logo.svg" alt="Logo" width={120} height={50} />
                </div>

            </div>



            {/* Menu items */}
            <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8  absolute md:static top-[60px] left-0 w-full md:w-auto bg-white h-[calc(150vh-60px)] md:h-fit md:bg-transparent px-6 md:px-0 z-20 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>

            {/* Right side - Cart & Avatar */}
            <div className='flex items-center space-x-6'>
                <div className='relative'>
                    <Image
                        src="/assets/images/icon-cart.svg"
                        alt="Cart"
                        width={35}
                        height={24}
                        className='cursor-pointer md:w-[24px]  '
                        onClick={handleCard}
                    />
                    {cartCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                            {cartCount}
                        </span>
                    )}
                    {isOpen && (
                        <div className='absolute right-0 bg-white shadow-lg rounded-lg p-4 mt-2 w-64 z-30'>
                            <h3 className='text-lg font-semibold'>Your Cart</h3>
                            {cartCount === 0 ? (
                                <p className='text-gray-500 text-center mt-4'>No items in cart</p>
                            ) : (
                                <div>
                                    <div className='flex items-center space-x-3 justify-between mt-4'>
                                        <Image
                                            src="/assets/images/image-product-1-thumbnail.jpg"
                                            alt="Product Thumbnail"
                                            width={50}
                                            height={50}
                                            className="rounded-lg"
                                        />
                                        <div className='flex flex-col text-sm'>
                                            <p>Fall Limited Edition Sneakers</p>
                                            <p>
                                                $125.00 x {cartCount}{' '}
                                                <span className='font-bold'>${cartCount * 125}</span>
                                            </p>
                                        </div>
                                        <Image
                                            src="/assets/images/icon-delete.svg"
                                            alt="Delete Icon"
                                            width={20}
                                            height={20}
                                            className="cursor-pointer"
                                            onClick={handleDelete}
                                        />
                                    </div>
                                    <button
                                        className='bg-orange-500 text-white rounded-lg py-2 px-4 mt-4 w-full'
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <Image
                    src="/assets/images/image-avatar.png"
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="hover:border-orange-500 hover:border-2 rounded-full cursor-pointer"
                />
            </div>
        </div>
    );
};

export default NavBar;

