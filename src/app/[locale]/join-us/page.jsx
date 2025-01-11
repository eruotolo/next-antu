import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function JoinUsPage() {
    const t = useTranslations('JourneyPage');
    return (
        <>
            <section className="section-header-journey mt-[-80px] py-[70px] sm:h-[100vh]">
                <div className="container mx-auto flex flex-col justify-center px-[20px] sm:h-[100vh] sm:px-0">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-2">
                        <div className="mb-[50px] mt-[100px] flex flex-col items-center sm:col-span-1 sm:mt-0 sm:items-start sm:pr-[10px]">
                            <h2 className="text-center font-marcellus text-[40px] font-normal leading-[50px] text-blanco sm:text-left sm:text-[50px] sm:leading-[55px] sm:tracking-[0.02em]">
                                {t('workout')}
                            </h2>
                            <p className="py-[40px] text-center font-manrope text-[18px] font-normal leading-[26px] text-blanco sm:text-left sm:text-[16px] sm:leading-[22px]">
                                {t('enjoy')}
                            </p>
                            <Link
                                href="/about"
                                className="mt-[20px] flex h-[54px] w-[224px] items-center justify-center rounded-[26px] border-[2px] border-rosa bg-rosa font-marcellus text-[20px] font-normal uppercase text-beige hover:bg-rosa hover:opacity-50 sm:m-[10px] sm:text-[23px]"
                            >
                                {t('learnMore')}
                            </Link>
                        </div>
                        <div className="my-[20px] sm:col-span-1 sm:my-0">
                            <div className="flex h-[430px] flex-col items-center justify-center bg-[#f7f7f7] px-[20px] sm:col-span-1 sm:mx-[30px]">
                                <h3 className="font-manrope text-[27px] font-bold uppercase text-azul sm:leading-[30px] sm:tracking-[0.2em]">
                                    {t('promoOne')}
                                </h3>
                                <h2 className="font-marcellus text-[50px] font-normal text-verde">
                                    {t('priceOne')}
                                </h2>
                                <p className="px-[35px] pb-[50px] pt-[30px] text-center font-manrope text-[18px] font-normal leading-[24px] text-gris sm:text-[15px] sm:leading-[20px]">
                                    {t('textOne')}
                                </p>
                                <h5 className="upercase pb-[30px] font-manrope text-[24px] font-normal leading-[34px] text-[#adadad] sm:text-[20px] sm:leading-[30px]">
                                    {t('otherPriceOne')}
                                </h5>
                                <Link
                                    href="/join-us"
                                    className="flex h-[53px] w-[186px] items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus text-[20px] font-normal text-blanco hover:opacity-50 sm:text-[23px]"
                                >
                                    {t('textBtn')}
                                </Link>
                            </div>
                        </div>
                        <div className="my-[20px] sm:col-span-1 sm:my-0">
                            <div className="flex h-[430px] flex-col items-center justify-center bg-[#f7f7f7] px-[20px] sm:col-span-1 sm:mx-[30px]">
                                <h3 className="font-manrope text-[27px] font-bold uppercase text-azul sm:leading-[30px] sm:tracking-[0.2em]">
                                    {t('promoTwo')}
                                </h3>
                                <h2 className="font-marcellus text-[50px] font-normal text-verde">
                                    {t('priceTwo')}
                                </h2>
                                <p className="px-[35px] pb-[50px] pt-[30px] text-center font-manrope text-[18px] font-normal leading-[24px] text-gris sm:text-[15px] sm:leading-[20px]">
                                    {t('textTwo')}
                                </p>
                                <h5 className="upercase pb-[30px] font-manrope text-[24px] font-normal leading-[34px] text-[#adadad] sm:text-[20px] sm:leading-[30px]">
                                    {t('otherPriceTwo')}
                                </h5>
                                <Link
                                    href="/join-us"
                                    className="flex h-[53px] w-[186px] items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus text-[20px] font-normal text-blanco hover:opacity-50 sm:text-[23px]"
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
