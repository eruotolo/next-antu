'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const languages = [
    { code: 'es', name: 'Español', flag: '/flag-es.svg' },
    { code: 'en', name: 'English', flag: '/flag-en.svg' },
];

export function LanguageSwitcher() {
    const t = useTranslations('LanguageSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const switchLanguage = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    const currentLanguage = languages.find((lang) => lang.code === locale);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed right-0 top-0" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-[40px] items-center justify-center rounded-[0px] border border-gray-300 bg-white px-2 sm:w-[80px]"
            >
                <Image
                    src={currentLanguage.flag}
                    alt={`${currentLanguage.name} flag`}
                    width={28}
                    height={28}
                    className="h-[26px] w-[26px]"
                />
                <span className="ml-2 font-manrope text-[#2c2c2c] sm:text-[16px]">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <span className="sr-only">{t('toggleLanguage')}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => switchLanguage(lang.code)}
                                className={`block w-full px-4 py-2 text-left text-sm ${
                                    locale === lang.code ? 'bg-gray-100' : 'hover:bg-gray-50'
                                }`}
                                role="menuitem"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={lang.flag}
                                        alt={`${lang.name} flag`}
                                        width={28}
                                        height={28}
                                        className="mr-2 h-4 w-4"
                                    />
                                    {lang.name}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
