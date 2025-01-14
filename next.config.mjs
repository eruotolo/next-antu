import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/es',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/es/about',
                permanent: true,
            },
            {
                source: '/ondemand',
                destination: '/es/ondemand',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/es/contact',
                permanent: true,
            },
            {
                source: '/join-us',
                destination: '/es/join-us',
                permanent: true,
            },
        ];
    },
    // Optimizaciones para imágenes
    images: {
        domains: ['www.antumovement.com'], // Añade aquí los dominios de tus imágenes
        formats: ['image/avif', 'image/webp', 'image/png', 'image/jpeg'],
    },
    // Configuración para mejorar el SEO
    poweredByHeader: false, // Remueve el header X-Powered-By por seguridad
};

export default withNextIntl(nextConfig);
