import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import Header from '@/components/Header/Header';
import DynamicHeader from '@/components/Header/DynamicHeader';
import Footer from '@/components/Footer/Footer';
import { manrope, marcellus, dmdisplay } from '@/app/[locale]/fonts';

import './globals.css';

export const metadata = {
    title: 'Antü',
    description: 'Where the body meets the soul',
    icons: {
        icon: '/favicon.ico',
        apple: '/favicon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/favicon.png',
        },
    },
    generator: 'Next.js',
    applicationName: 'WebPage Crow Advance',
    authors: [{ name: 'Edgardo Ruotolo Cardozo', url: 'https://crowadvance.com' }],
    creator: 'Edgardo Ruotolo Cardozo',
    publisher: 'Edgardo Ruotolo Cardozo',
};

export default async function RootLayout({ children, params }) {
    const { locale } = params;

    // Asegúrate de que el `locale` entrante sea válido
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={`${manrope.variable} ${marcellus.variable} ${dmdisplay.variable}`}
        >
            <body>
                <NextIntlClientProvider messages={messages}>
                    <DynamicHeader />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
