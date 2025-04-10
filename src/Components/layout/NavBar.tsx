'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { useCart } from '@/context/CartContext';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();
    const handleCard = () => {
        // Handle cart click event here
        console.log('Cart clicked!');
        setIsOpen(!isOpen); // Toggle the cart state
        console.log(isOpen); // Log the cart count
    }
    return (
        <div className='bg-white border-b-[0.02px] border-black text-black px-[120px] py-[30px] flex justify-between items-center'>
            <div className='flex items-center w-full'>
                <div className='flex items-center w-full space-x-10'>
                    <Image
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        width={120}
                        height={50}
                        className=""
                    />
                    <ul className='flex flex-row space-x-8' >
                        <li>
                            <a href="/">Colections</a>
                        </li>
                        <li>
                            <a href="/about">Man</a>
                        </li>
                        <li>
                            <a href="/about">Women</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/about">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center space-x-8'>
                    <div className='relative'> {/* เพิ่ม relative เพื่อให้ป้ายแดงวางตำแหน่งได้ */}
                        <Image
                            src="/assets/images/icon-cart.svg"
                            alt="ตะกร้าสินค้า"
                            width={30}
                            height={50}
                            className='cursor-pointer'
                            onClick={handleCard}
                        />
                        {/* ป้ายแดงจะแสดงเมื่อมีสินค้าในตะกร้า */}
                        {cartCount > 0 && (
                            <span className='absolute  -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                {cartCount}
                            </span>
                        )}

                        {isOpen && (
                            <div>
                                {/* แสดงรายละเอียดตะกร้าสินค้าที่นี่ */}
                                <div className='absolute z-10 right-0 bg-white shadow-lg rounded-lg p-4 mt-2 w-64'>
                                    <h3 className='text-lg font-semibold'>Your Cart</h3>
                                    <p className='text-gray-500'>No items in cart</p>
                                    {/* เพิ่มรายละเอียดสินค้าในตะกร้าที่นี่ */}
                                </div>
                            </div>
                        )}
                    </div>
                    <Image
                        src="/assets/images/image-avatar.png"
                        alt="Logo"
                        width={30}
                        height={50}
                        className="hover:border-amber-700 hover:border-2 rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar

