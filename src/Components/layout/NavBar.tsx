import React from 'react'
import Image from 'next/image'
const NavBar = () => {
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
                    <Image
                        src="/assets/images/icon-cart.svg"
                        alt="Logo"
                        width={30}
                        height={50}
                        className=""
                    />
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