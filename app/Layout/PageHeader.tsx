"use client";

import { MagnifyingGlassIcon, StarIcon, UserIcon, ShoppingCartIcon } from "@phosphor-icons/react";

export default function PageHeader() {

    return(
        <div className="container-fluid px-4 py-2 flex justify-between items-center border-b-1 border-base-300">
            <label className="input grow-2 shrink-1 basis-0 max-w-1/4">
                <input type="search" placeholder="Search" className="grow" />
                <MagnifyingGlassIcon size={24} />
            </label>
            <h2 className="logo grow-1 shrink-1 basis-auto max-w-1/2 text-center text-4xl font-bold tracking-widest">Dallas Dresses</h2>
            <div className="user-nav grow-2 shrink-0 basis-0 max-w-1/4 flex justify-end items-center">
                <ul className="menu menu-horizontal px-1 mr-2">
                    <li>
                        <details>
                            <summary>HELP</summary>
                            <ul className="p-2 w-40 z-1">
                                <li><a>Return & Exchange</a></li>
                                <li><a>Customer Service</a></li>
                                <li><a>Shipping</a></li>
                                <li><a>Size Chart</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <StarIcon size={24} className="mr-2" />
                <UserIcon size={24} className="mr-2" />
                <ShoppingCartIcon size={24} />
            </div>
        </div>
    );
}