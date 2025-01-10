'use client';

import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function MobileMenu() {
    const t = useTranslations('MenuHeader');
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const linkStyle =
        'cursor-pointer uppercase text-[#626262] text-[20px] py-[15px] font-normal font-marcellus';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: t('about') },
        { href: '/ondemand', label: t('ondemand') },
        { href: '/contact', label: t('contact') },
    ];

    return (
        <header className="z-20 lg:hidden">
            <div className="container mx-auto my-[10px]">
                <nav className="flex h-[60px] items-center justify-between px-[20px]">
                    <div>
                        <Link href="/">
                            <Image
                                src="/logo.svg"
                                alt={'Logo'}
                                width={146.5}
                                height={59.3}
                                className="h-[59px] w-[146px]"
                            />
                        </Link>
                    </div>

                    <div className="z-10 flex">
                        <button onClick={toggleMenu} aria-label="Hamburguesa Menu Mobile">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                data-slot="icon"
                                className="h-9 w-9"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* MENU MOBILE */}

                    <div
                        className={
                            menuOpen
                                ? 'fixed left-[0px] top-[0px] z-20 h-[100vh] w-[100vw] bg-[#F2EFEB] p-10 duration-500 ease-in-out'
                                : 'fixed left-[-100%] top-[0px] h-[100vh] p-10 duration-500 ease-in-out'
                        }
                    >
                        <div className="flex w-full items-center justify-end">
                            <button onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="black"
                                    data-slot="icon"
                                    className="h-8 w-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex h-[90vh] flex-col justify-between">
                            <div className="flex flex-col items-center py-4">
                                <ul className="flex flex-col items-center">
                                    {links.map((link) => (
                                        <li key={link.href} className={linkStyle}>
                                            <Link
                                                className={`link ${pathname === link.href ? 'active' : ''}`}
                                                href={link.href}
                                                style={{
                                                    textDecoration:
                                                        pathname === link.href
                                                            ? 'underline'
                                                            : 'none',
                                                }}
                                                onClick={toggleMenu}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col items-center py-4">
                                <ul className="flex flex-col items-center">
                                    <li>
                                        <Link className="my-[8px] flex h-[54px] w-[300px] items-center justify-center rounded-[26px] border-[2px] border-rosa font-marcellus text-[20px] font-normal uppercase text-rosa">
                                            {t('signin')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/join-us"
                                            className="my-[8px] flex h-[54px] w-[300px] items-center justify-center rounded-[26px] border-[2px] bg-[#3970a4] font-marcellus text-[20px] font-normal uppercase text-beige"
                                        >
                                            {t('start')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
