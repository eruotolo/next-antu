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
        'cursor-pointer uppercase text-[#626262] text-[18px] py-[15px] font-normal font-marcellus';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: t('about') },
        { href: '/ondemand', label: t('ondemand') },
        { href: '/contact', label: t('contact') },
    ];

    return (
        <header className="z-20 lg:hidden">
            <div className="container mx-auto my-[10px]">
                <nav className="flex h-[60px] items-center justify-between bg-red-50 px-[20px]">
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
                                ? 'fixed left-[0px] top-[0px] z-20 h-[105vh] w-[105vw] bg-[#F2EFEB] p-10 duration-500 ease-in-out xl:hidden'
                                : 'fixed left-[-100%] top-[0px] h-[105vh] p-10 duration-500 ease-in-out'
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
                        <div className="flex flex-col items-center py-4">
                            <ul className="flex flex-col items-center">
                                <li className={linkStyle}>
                                    <Link
                                        className={`link ${pathname === '/' ? 'active' : ''}`}
                                        href="/"
                                        style={{
                                            textDecoration: pathname === '/' ? 'underline' : 'none',
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        {t('home')}
                                    </Link>
                                </li>
                                <li className={linkStyle}>
                                    <Link
                                        className={`link ${pathname === '/about' ? 'active' : ''}`}
                                        href="/about"
                                        style={{
                                            textDecoration:
                                                pathname === '/about' ? 'underline' : 'none',
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        {t('about')}
                                    </Link>
                                </li>
                                <li className={linkStyle}>
                                    <Link
                                        className={`link ${pathname === '/ondemand' ? 'active' : ''}`}
                                        href="/ondemand"
                                        style={{
                                            textDecoration:
                                                pathname === '/ondemand' ? 'underline' : 'none',
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        {t('ondemand')}
                                    </Link>
                                </li>
                                <li className={linkStyle}>
                                    <Link
                                        className={`link ${pathname === '/contact' ? 'active' : ''}`}
                                        href="/contact"
                                        style={{
                                            textDecoration:
                                                pathname === '/contact' ? 'underline' : 'none',
                                        }}
                                        onClick={toggleMenu}
                                    >
                                        {t('contact')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
