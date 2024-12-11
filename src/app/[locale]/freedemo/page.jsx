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
        <section className="sm:py-[100px]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row">
                        <h1 className="font-marcellus font-normal text-azul sm:mr-[10px] sm:text-[50px] sm:leading-[55px] sm:tracking-[0.02em]">
                            {t('titleOne')}
                        </h1>
                        <h1 className="font-dmdisplay font-normal italic text-azul sm:text-[50px] sm:leading-[55px] sm:tracking-[0.02em]">
                            {t('titleTwo')}
                        </h1>
                    </div>
                    <div className="w-full sm:my-[60px]">
                        {isMounted && (
                            <DynamicVideoDemo urlVideo="videodemo/uuh7ub9ebxovkcymez3p" />
                        )}
                    </div>
                    <div className="sm:w-[800px]">
                        <p className="text-center font-manrope font-normal text-gris sm:text-[15px] sm:leading-[20px]">
                            {t('textOne')}
                        </p>
                        <p className="text-center font-manrope font-semibold uppercase text-gris sm:mt-[30px] sm:text-[15px] sm:leading-[20px]">
                            {t('textTwo')}
                        </p>
                        <p className="text-center font-manrope font-normal text-gris sm:text-[15px] sm:leading-[20px]">
                            {t('textThree')}
                        </p>
                    </div>
                    <div className="sm:mt-[40px]">
                        <Link
                            href="/join-us"
                            className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul font-marcellus font-normal uppercase text-beige hover:border-[#3970a4] hover:bg-[#3970a4] hover:opacity-50 sm:text-[23px]"
                        >
                            {t('btnFree')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
