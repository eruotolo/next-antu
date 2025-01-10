'use client';

import Image from 'next/image';
import MobileMenu from '@/components/Header/MobileMenu';

import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';

import { UserRound } from 'lucide-react';

const style = {
    navLinks:
        'cursor-pointer uppercase text-[#f2efeb] text-[0.875rem] px-[10px] font-normal font-marcellus hover:underline',
};

export default function Header() {
    const t = useTranslations('MenuHeader');
    const pathname = usePathname();

    return (
        <>
            <div className="sticky top-0 z-20 flex h-[40px] items-center justify-center bg-marron hover:bg-[#c19d9d]">
                <Link href="/freedemo">
                    <div className="flex">
                        <Image
                            src="/estrella_antu.svg"
                            alt={'estrella'}
                            width={13}
                            height={13}
                            className="mt-[6px] h-[13px] w-[13px]"
                        />
                        <h5 className="px-[5px] font-manrope text-[14px] font-normal tracking-wider text-blanco sm:px-[20px] sm:text-[16px]">
                            {t.rich('free', {
                                bold: (chunks) => <strong>{chunks}</strong>,
                            })}
                        </h5>
                        <Image
                            src="/estrella_antu.svg"
                            alt={'estrella'}
                            width={13}
                            height={13}
                            className="mt-[6px] h-[13px] w-[13px]"
                        />
                    </div>
                </Link>
                <LanguageSwitcher />
            </div>

            <MobileMenu />

            <header className="z-10 hidden lg:flex">
                <div className="container mx-auto my-[10px]">
                    <nav className="flex h-[60px] items-center justify-between">
                        <div className="flex h-[60px] items-center">
                            <div className="mr-[30px] flex">
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
                            <div className="flex">
                                <ul className="flex">
                                    <li className={style.navLinks}>
                                        <Link
                                            className={`link ${pathname === '/about' ? 'active' : ''}`}
                                            href="/about"
                                            style={{
                                                textDecoration:
                                                    pathname === '/about' ? 'underline' : 'none',
                                            }}
                                        >
                                            {t('about')}
                                        </Link>
                                    </li>
                                    <li className={style.navLinks}>
                                        <Link
                                            className={`link ${pathname === '/ondemand' ? 'active' : ''}`}
                                            href="/ondemand"
                                            style={{
                                                textDecoration:
                                                    pathname === '/ondemand' ? 'underline' : 'none',
                                            }}
                                        >
                                            {t('ondemand')}
                                        </Link>
                                    </li>
                                    <li className={style.navLinks}>
                                        <Link
                                            className={`link ${pathname === '/contact' ? 'active' : ''}`}
                                            href="/contact"
                                            style={{
                                                textDecoration:
                                                    pathname === '/contact' ? 'underline' : 'none',
                                            }}
                                        >
                                            {t('contact')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex">
                            <ul className="flex">
                                <li>
                                    <Link
                                        href="/join-us"
                                        className="mr-[20px] rounded-[26px] bg-[#3970a4] px-[26px] py-[10px] font-marcellus text-[18px] uppercase text-[#f2efeb] hover:opacity-70"
                                    >
                                        {t('start')}
                                    </Link>
                                </li>
                                <li className={`${style.navLinks} flex`}>
                                    <UserRound
                                        className="mr-[15px] rounded-[50%] bg-gris p-[5px] opacity-40"
                                        size={32}
                                    />
                                    <Link
                                        className={`link ${pathname === '/' ? 'active' : ''} pt-[5px]`}
                                        href="/"
                                        style={{
                                            textDecoration: pathname === '/' ? 'underline' : 'none',
                                        }}
                                    >
                                        {t('signin')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
