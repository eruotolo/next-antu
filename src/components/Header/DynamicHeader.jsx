'use client';

import { usePathname } from '@/i18n/routing';
import Header from '@/components/Header/Header';
import AlterHeader from '@/components/Header/AlterHeader';

export default function DynamicHeader() {
    const pathname = usePathname();

    return pathname === '/freedemo' ? <AlterHeader /> : <Header />;
}
