export default function sitemap() {
    return [
        {
            url: 'https://www.antumovement.com/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
            alternates: {
                languages: {
                    es: 'https://www.antumovement.com/es',
                    en: 'https://www.antumovement.com/en',
                },
            },
        },
        {
            url: 'https://www.antumovement.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: 'https://www.antumovement.com/es/about',
                    en: 'https://www.antumovement.com/en/about',
                },
            },
        },
        {
            url: 'https://www.antumovement.com/ondemand',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: 'https://www.antumovement.com/es/ondemand',
                    en: 'https://www.antumovement.com/en/ondemand',
                },
            },
        },
        {
            url: 'https://www.antumovement.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: 'https://www.antumovement.com/es/contact',
                    en: 'https://www.antumovement.com/en/contact',
                },
            },
        },
        {
            url: 'https://www.antumovement.com/join-us',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: 'https://www.antumovement.com/es/join-us',
                    en: 'https://www.antumovement.com/en/join-us',
                },
            },
        },
        {
            url: 'https://www.antumovement.com/freedemo',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            alternates: {
                languages: {
                    es: 'https://www.antumovement.com/es/freedemo',
                    en: 'https://www.antumovement.com/en/freedemo',
                },
            },
        },
    ];
}
