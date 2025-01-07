import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import DynamicHeader from '@/components/Header/DynamicHeader';
import Footer from '@/components/Footer/Footer';
import { manrope, marcellus, dmdisplay } from '@/app/[locale]/fonts';

import './globals.css';

export const metadata = {
    title: 'ANTÜ MOVEMENT | AWAKEN YOUR ENERGY',
    description:
        'A fitness platform designed for everyone, where you set the limits. Discover a conscious way to awaken your energy and strengthen your body from wherever you are. With ANTÜ, each session inspires you to connect with yourself while achieving your goals at your own pace. This is your moment to shine and transform! ��✨',
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
