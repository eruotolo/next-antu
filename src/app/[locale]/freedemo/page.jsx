'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';

const DynamicVideoDemo = dynamic(() => import('@/components/VideosCloudinary/VideoDemo'), {
    ssr: false,
});

export default function FreePage() {
    const t = useTranslations('FreeDemo');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="pb-[70px] sm:py-[100px]">
            <div className="container mx-auto px-[30px] sm:px-0">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center sm:flex-row">
                        <h1 className="font-marcellus text-[40px] font-normal leading-[50px] tracking-[0.02em] text-azul sm:mr-[10px] sm:text-[50px] sm:leading-[55px]">
                            {t('titleOne')}
                        </h1>
                        <h1 className="font-dmdisplay text-[40px] font-normal italic leading-[50px] tracking-[0.02em] text-azul sm:text-[50px] sm:leading-[55px]">
                            {t('titleTwo')}
                        </h1>
                    </div>
                    <div className="my-[40px] w-full sm:my-[60px]">
                        {isMounted && (
                            <DynamicVideoDemo urlVideo="videodemo/uuh7ub9ebxovkcymez3p" />
                        )}
                    </div>
                    <div className="sm:w-[800px]">
                        <p className="text-center font-manrope text-[18px] font-normal leading-[26px] text-gris sm:text-[15px] sm:leading-[20px]">
                            {t('textOne')}
                        </p>
                        <p className="mt-[30px] text-center font-manrope text-[18px] font-semibold uppercase leading-[26px] text-gris sm:text-[15px] sm:leading-[20px]">
                            {t('textTwo')}
                        </p>
                        <p className="text-center font-manrope text-[18px] font-normal leading-[26px] text-gris sm:text-[15px] sm:leading-[20px]">
                            {t('textThree')}
                        </p>
                    </div>
                    <div className="mt-[30px] sm:mt-[40px]">
                        <Link
                            href="/join-us"
                            className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus font-normal uppercase text-blanco hover:opacity-50 sm:h-[53px] sm:w-[186px] sm:text-[23px]"
                        >
                            {t('btnFree')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
