import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Puede importarse desde una configuración compartida
const locales = ['es', 'en'];

export default getRequestConfig(async ({ locale }) => {
    // Valida que el parámetro `locale` entrante sea válido
    if (!locales.includes(locale)) {
        notFound();
    }

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
