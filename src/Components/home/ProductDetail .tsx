"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState("/assets/images/image-product-1.jpg");
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const images = [
        "/assets/images/image-product-1-thumbnail.jpg",
        "/assets/images/image-product-2-thumbnail.jpg",
        "/assets/images/image-product-3-thumbnail.jpg",
        "/assets/images/image-product-4-thumbnail.jpg"
    ];

    const handleThumbnailClick = (src: string) => {
        setSelectedImage(src.replace('-thumbnail', ''));
    };

    const handleQuantityChange = (action: 'increase' | 'decrease') => {
        setQuantity(prev => action === 'increase' ? prev + 1 : Math.max(1, prev - 1));
    };

    const handleAddProduct = () => {
        addToCart(quantity); // เพิ่มสินค้าตามจำนวนที่เลือก
        setQuantity(1); // รีเซ็ตจำนวนเป็น 1
    };



    return (
        <div className='flex flex-col lg:flex-row justify-center items-center w-full bg-white lg:gap-20 md:p-8 '>
            {/* Product Image Section */}
            <div className='w-full lg:w-1/2 max-w-lg mb-8 lg:mb-0 lg:mr-8'>
                {/* Main Product Image */}
                <div className='relative w-full aspect-square overflow-hidden rounded-xl shadow-md'>
                    <Image
                        src={selectedImage}
                        alt="Product Image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Thumbnail Images */}
                <div className='flex justify-between mt-4 gap-2'>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`relative w-1/4 aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${selectedImage.includes(index + 1 + '.jpg') ? 'ring-2 ring-orange-500' : ''}`}
                            onClick={() => handleThumbnailClick(src)}
                        >
                            <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover hover:opacity-70"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Description Section */}
            <div className='w-full lg:w-1/2 max-w-md'>
                <p className='text-orange-500 font-bold text-sm uppercase tracking-wider mb-2'>Sneaker Company</p>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Fall Limited Edition Sneakers</h1>
                <p className='text-gray-600 mb-6'>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                {/* Price Section */}
                <div className='flex flex-col mb-6'>
                    <div className='flex items-center'>
                        <span className='text-3xl font-bold text-gray-900'>$125.00</span>
                        <span className='ml-4 px-2 py-1 bg-orange-100 text-orange-500 font-bold rounded-md text-sm'>50%</span>
                    </div>
                    <span className='text-gray-400 line-through mt-1'>$250.00</span>
                </div>

                {/* Quantity and Add to Cart */}
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex items-center justify-between bg-gray-100 rounded-lg p-3 w-full sm:w-40'>
                        <button
                            className='text-orange-500 font-bold text-xl px-2 hover:opacity-70'
                            onClick={() => handleQuantityChange('decrease')}
                        >
                            -
                        </button>
                        <span className='font-bold'>{quantity}</span>
                        <button
                            className='text-orange-500 font-bold text-xl px-2 hover:opacity-70'
                            onClick={() => handleQuantityChange('increase')}
                        >
                            +
                        </button>
                    </div>

                    <button onClick={handleAddProduct} className='flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-colors w-full sm:w-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;