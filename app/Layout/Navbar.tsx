"use client";

import { useState } from "react";

export default function Navbar() {

    const navLinks = [
        { label: "Winter Sale", url: "#" },
        { label: "EOSS", url: "#" },
        { label: "New", url: "#", active: true },
        { label: "Women", url: "#" },
        { label: "Men", url: "#" },
        { label: "Kids", url: "#" },
        { label: "Prayer", url: "#" },
        { label: "School Uniform", url: "#" },
        { label: "Outlet", url: "#" },
        { label: "Gift Card", url: "#" },
    ]

    const [activeLink, setActiveLink] = useState("New");

    const handleNavClick = (label: string, e: React.MouseEvent) => {
        e.preventDefault();
        setActiveLink(label);
    }
    
    return (
        <div className="container-fluid flex justify-center">
            <ul className="menu menu-horizontal px-1">
                {
                    navLinks.map((link, index) => 
                        <li key={index} className="px-2">
                            <a 
                                href={link.url} 
                                className={activeLink === link.label ? "menu-active" : ""}
                                onClick={(e) => handleNavClick(link.label, e)}
                            >
                                { link.label }
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}