'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
    { code: 'es', name: 'Español', flag: '/flag-es.svg' },
    { code: 'en', name: 'English', flag: '/flag-en.svg' },
];

export function LanguageSwitcher() {
    const t = useTranslations('LanguageSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
    };

    const currentLanguage = languages.find((lang) => lang.code === locale);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="fixed right-0 top-0 rounded-[0px] sm:w-[80px]"
                >
                    <Image
                        src={currentLanguage.flag}
                        alt={`${currentLanguage.name} flag`}
                        width={28}
                        height={28}
                    />
                    <span className="font-manrope text-[#2c2c2c] sm:text-[20px]">
                        {currentLanguage.code.toUpperCase()}
                    </span>
                    <span className="sr-only">{t('toggleLanguage')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="sm:ml-[20px]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={locale === lang.code ? 'bg-accent' : ''}
                    >
                        <img src={lang.flag} alt={`${lang.name} flag`} className="mr-2 h-4 w-4" />
                        {lang.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
