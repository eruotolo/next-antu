import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // Lista de todos los locales que son soportados
    locales: ['en', 'es'],

    // Usado cuando ningún locale coincide
    defaultLocale: 'es',
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
