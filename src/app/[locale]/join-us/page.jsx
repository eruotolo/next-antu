import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function JoinUsPage() {
    const t = useTranslations('JourneyPage');
    return (
        <>
            <section className="section-header-journey mt-[-80px] sm:h-[100vh]">
                <div className="container mx-auto flex flex-col justify-center sm:h-[100vh]">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-2">
                        <div className="sm:col-span-1 sm:pr-[10px]">
                            <h2 className="font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[55px] sm:tracking-[0.02em]">
                                {t('workout')}
                            </h2>
                            <p className="font-manrope font-normal text-blanco sm:py-[40px] sm:text-[15px] sm:leading-[20px]">
                                {t('enjoy')}
                            </p>
                            <Link
                                href="/ondemand"
                                className="flex h-[54px] w-[224px] items-center justify-center rounded-[26px] border-[2px] border-rosa bg-rosa font-marcellus font-normal uppercase text-beige hover:bg-rosa hover:opacity-50 sm:m-[10px] sm:text-[23px]"
                            >
                                {t('learnMore')}
                            </Link>
                        </div>
                        <div className="sm:col-span-1">
                            <div className="flex items-center bg-[#f7f7f7] sm:col-span-1 sm:mx-[30px] sm:h-[430px] sm:flex-col sm:justify-center">
                                <h3 className="font-manrope font-bold uppercase text-azul sm:text-[27px] sm:leading-[30px] sm:tracking-[0.2em]">
                                    {t('promoOne')}
                                </h3>
                                <h2 className="font-marcellus font-normal text-verde sm:text-[50px]">
                                    {t('priceOne')}
                                </h2>
                                <p className="text-center font-manrope font-normal text-gris sm:px-[35px] sm:pb-[50px] sm:pt-[30px] sm:text-[15px] sm:leading-[20px]">
                                    {t('textOne')}
                                </p>
                                <h5 className="upercase font-manrope font-normal text-[#adadad] sm:pb-[30px] sm:text-[20px] sm:leading-[30px]">
                                    {t('otherPriceOne')}
                                </h5>
                                <Link
                                    href="/join-us"
                                    className="flex items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus font-normal text-blanco hover:opacity-50 sm:h-[53px] sm:w-[186px] sm:text-[23px]"
                                >
                                    {t('textBtn')}
                                </Link>
                            </div>
                        </div>
                        <div className="sm:col-span-1">
                            <div className="flex items-center bg-[#f7f7f7] sm:col-span-1 sm:mx-[30px] sm:h-[430px] sm:flex-col sm:justify-center">
                                <h3 className="font-manrope font-bold uppercase text-azul sm:text-[27px] sm:leading-[30px] sm:tracking-[0.2em]">
                                    {t('promoTwo')}
                                </h3>
                                <h2 className="font-marcellus font-normal text-verde sm:text-[50px]">
                                    {t('priceTwo')}
                                </h2>
                                <p className="text-center font-manrope font-normal text-gris sm:px-[35px] sm:py-[30px] sm:text-[15px] sm:leading-[20px]">
                                    {t('textTwo')}
                                </p>
                                <h5 className="upercase font-manrope font-normal text-[#adadad] sm:pb-[30px] sm:text-[20px] sm:leading-[30px]">
                                    {t('otherPriceTwo')}
                                </h5>
                                <Link
                                    href="/join-us"
                                    className="flex items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus font-normal text-blanco hover:opacity-50 sm:h-[53px] sm:w-[186px] sm:text-[23px]"
                                >
                                    {t('textBtn')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
