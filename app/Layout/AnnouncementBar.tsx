"use client";

import { XLogoIcon, FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, PinterestLogoIcon, MoonIcon, SunDimIcon } from "@phosphor-icons/react";

export default function AnnouncementBar() {

    const announcement = "EOSS Weekend sale buy 2 get 1 free : Code EOSS"
    
    return(
        <div className="container-fluid bg-primary text-primary-content px-2">
            <div className="flex justify-between">
                <ul className='menu menu-horizontal lg:menu-horizontal grow-1 shrink-0 basis-0'>
                    <li><a><XLogoIcon size={16} /></a></li>
                    <li><a><FacebookLogoIcon size={16} weight='fill' /></a></li>
                    <li><a><InstagramLogoIcon size={16} weight='fill' /></a></li>
                    <li><a><YoutubeLogoIcon size={16} weight='fill' /></a></li>
                    <li><a><PinterestLogoIcon size={16} weight='fill' /></a></li>
                </ul>
                <div className='flex items-center grow-2 shrink-2 basis-auto justify-center'>{announcement}</div>
                <div className='grow-1 shrink-1 basis-0 flex justify-end items-center pr-2 relative'>
                    <details className='dropdown mr-2'>
                        <summary className='btn btn-light btn-sm'>language</summary>
                        <ul className='menu z-1 rounded-box p-2 shadow-sm absolute left-0 mt-2 bg-base-100'>
                            <li><a>English</a></li>
                            <li><a>Spanish</a></li>
                            <li><a>French</a></li>
                        </ul>
                    </details>

                    <div className="flex items-center">
                        <div className="btn btn-sm btn-circle btn-light">
                            <label className="swap swap-rotate">
                                <input type="checkbox" className="theme-controller" value='sunset' />

                                <MoonIcon size={16} weight='fill' className='swap-on' />
                                <SunDimIcon size={16} weight='fill' className='swap-off' color="orange" />
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}