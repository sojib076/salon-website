"use client";

import React, { useState } from 'react';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='grid grid-cols-2 p-4 bg-[#ECF0F2] border 2px  '>
            <div>
                <h1 className='text-4xl font-bold'>My Website</h1>
            </div>
            <div className=''>

                <button className="menu-icon " onClick={() => setIsOpen(!isOpen)}>
                    &#9776;
                </button>
                <nav className={`nav-menu ${isOpen ? 'showMenu' : ''}  lg:p-0 `}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </div>
    )
}