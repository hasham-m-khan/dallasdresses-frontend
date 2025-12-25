"use client";

import { ArrowUUpLeftIcon, CreditCardIcon, RulerIcon, TruckIcon } from "@phosphor-icons/react";

import "./Footer.css";

export default function Footer() {

    const footerLinks = [
        { title: "corporate", 
            links: [
                { label: "about us", url: "#" },
                { label: "customer service", url: "#" },
                { label: "careers", url: "#" },
                { label: "blogs", url: "#" },
                { label: "sitemap", url: "#" },
                { label: "our reviews", url: "#" },
                { label: "contact us", url: "#" },
            ],
        },
        { title: "customer policies", 
            links: [
                { label: "privacy policy", url: "#" },
                { label: "return policy", url: "#" },
                { label: "terms and conditions", url: "#" },
            ],
        },
        { title: "useful information", 
            links: [
                { label: "size chart", url: "#" },
                { label: "wholesale", url: "#" },
                { label: "wishlist", url: "#" },
                { label: "shipping", url: "#" },
                { label: "faqs", url: "#" },
            ],
        },
        { title: "program", 
            links: [
                { label: "aambassador program", url: "#" },
                { label: "franchise", url: "#" },
                { label: "register your school", url: "#" },
                { label: "giving back program", url: "#" },
                { label: "affiliate program", url: "#" },
            ],
        },
    ]
    
    return(
        <div className="container-fluid">
            <div className="crosspage-promos">
                <div className="container-fluid bg-base-200 flex justify-center p-5">
                    <div className="flex flex-col items-center  w-1/4">
                        <TruckIcon size={32} />
                        <p className="text-lg raleway mt-3">Free Shipping</p>
                    </div>
                    <div className="flex flex-col items-center  w-1/4">
                        <RulerIcon size={32} />
                        <p className="text-lg raleway mt-3">Plus Sizes up to 7XL</p>
                    </div>
                    <div className="flex flex-col items-center  w-1/4">
                        <CreditCardIcon size={32} />
                        <p className="text-lg raleway mt-3">Gift Cards</p>
                    </div>
                    <div className="flex flex-col items-center  w-1/4">
                        <ArrowUUpLeftIcon size={32} />
                        <p className="text-lg raleway mt-3">Easy Return with Redo</p>
                    </div>
                </div>
            </div>

            <div className="footer-menu bg-base-300 flex justify-between py-12 px-24">
                {footerLinks.map((e, i) =>
                    <div className="max-w-1/5 capitalize" key={i}>
                        <h3 className="text-xl raleway">{e.title}</h3>
                        <ul>
                            {e.links.map((link, index) =>
                                <li key={index}>
                                    <a href={link.url} className="link">{link.label}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                <div className="max-w-1/5">
                    <h3 className="text-xl raleway mb-2">Newsletter</h3>
                    <p className="mb-4">Subscribe to our newsletter to get the latest news and updates.</p>
                    <form action="">
                        <input type="email" className="input mb-4" placeholder="Enter email" />
                        <button type="submit" className="btn btn-lg btn-neutral">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}