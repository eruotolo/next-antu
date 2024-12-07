'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { UserRound } from 'lucide-react';

const style = {
    navLinks:
        'cursor-pointer uppercase text-[#f2efeb] text-[20px] px-[20px] font-normal font-marcellus',
};

export default function Header() {
    const t = useTranslations('MenuHeader');

    const [menuOpen, setMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState('bg-transparent');
    const [key, setKey] = useState(Math.random());
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 150) {
                setBgColor('bg-[#EFEBE1F2]');
                setKey(Math.random()); // Esto forzará un renderizado
            } else {
                setBgColor('bg-transparent');
                setKey(Math.random()); // Esto forzará un renderizado
            }
        };

        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <>
            <div className="sticky top-0 z-20 flex h-[40px] items-center justify-center bg-marron hover:bg-[#c19d9d]">
                <Link href="/">
                    <div className="flex">
                        <Image src="/estrella_antu.svg" alt={'estrella'} width={13} height={13} />
                        <h5 className="px-[20px] font-manrope text-[16px] font-normal tracking-wider text-blanco">
                            {t.rich('free', {
                                bold: (chunks) => <strong>{chunks}</strong>,
                            })}
                        </h5>
                        <Image src="/estrella_antu.svg" alt={'estrella'} width={13} height={13} />
                    </div>
                </Link>
            </div>
            <header className="z-10">
                <div className="container mx-auto my-[10px]">
                    <nav className="flex h-[60px] items-center justify-between">
                        <div className="hidden xl:flex">
                            <Link href="/">
                                <Image src="/logo.svg" alt={'Logo'} width={146.5} height={59.3} />
                            </Link>
                        </div>
                        <div className="hidden xl:flex">
                            <ul className="flex">
                                <li className={style.navLinks}>
                                    <Link
                                        className={`link ${pathname === '/about' ? 'active' : ''}`}
                                        href="/about"
                                        style={{
                                            fontWeight: pathname === '/about' ? '500' : 'normal',
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
                                            fontWeight: pathname === '/ondemand' ? '500' : 'normal',
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
                                            fontWeight: pathname === '/contact' ? '500' : 'normal',
                                        }}
                                    >
                                        {t('contact')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden xl:flex">
                            <ul className="flex">
                                <li>
                                    <Link
                                        href="/"
                                        className="mr-[20px] rounded-[26px] bg-[#3970a4] px-[26px] py-[10px] font-marcellus text-[20px] uppercase text-[#f2efeb] hover:opacity-70"
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
                                        className={`link ${pathname === '/' ? 'active' : ''}`}
                                        href="/"
                                        style={{ fontWeight: pathname === '/' ? '500' : 'normal' }}
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
