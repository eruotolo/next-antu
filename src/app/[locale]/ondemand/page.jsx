import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import FagsComponent from '@/components/Faqs/FaqsComponent';

const item01 = '/ondemand/1_antu.svg';
const item02 = '/ondemand/2_antu.svg';
const item03 = '/ondemand/3_antu.svg';
const imgClasesOne = '/ondemand/barre_antu.png';
const imgClasesTwo = '/ondemand/pilates_antu.png';
const imgClasesThree = '/ondemand/signature_antu.png';
const imgEnjoy = '/ondemand/clases_signature_antu.webp';

export default function OnDemandPage() {
    const t = useTranslations('OnDemandPage');

    return (
        <>
            <section className="section-header-ondemand mt-[-80px] h-[100vh]">
                <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center sm:flex-row sm:justify-between">
                    <div className="sm:w-[50%]">
                        <h2 className="text-center font-marcellus text-[40px] font-normal leading-[55px] tracking-[0.02em] text-blanco sm:text-left sm:text-[50px] sm:leading-[58px]">
                            {t('titleDemandOne')}
                        </h2>
                        <h2 className="font-marcellus text-[40px] font-normal leading-[50px] tracking-[0.02em] text-blanco sm:text-[50px] sm:leading-[58px]">
                            {t('titleDemandTwo')}
                        </h2>
                    </div>
                    <div className="mt-[20px] sm:mt-0 sm:w-[50%] sm:pl-[10%]">
                        <h1 className="text-center font-dmdisplay text-[40px] font-normal italic leading-[50px] text-blanco sm:text-right sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandThree')}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-[70px] sm:pt-[100px]">
                <div className="container mx-auto px-[30px] sm:px-0">
                    <div className="flex flex-col items-center">
                        <h1 className="text-center font-marcellus text-[40px] font-normal leading-[50px] tracking-[0.02em] text-azul sm:text-[70px] sm:leading-[75px]">
                            {t('workout')}
                        </h1>
                        <div className="mt-[30px] sm:mt-[40px] sm:w-[50%]">
                            <p className="text-center font-manrope text-[18px] font-normal leading-[26px] text-gris sm:text-[15px] sm:leading-[20px]">
                                {t('workoutText')}
                            </p>
                        </div>
                    </div>

                    <div className="section-clases-ondemand mt-[40px] flex h-[440px] flex-col items-center justify-center sm:mt-[100px]">
                        <h3 className="mb-[20px] text-center font-marcellus text-[20px] font-normal uppercase tracking-[0.1em] text-beige sm:text-[27px]">
                            {t('freeClass')}
                        </h3>
                        <Link
                            href="/freedemo"
                            className="flex h-[54px] w-[250px] items-center justify-center rounded-[26px] border-[2px] border-rosa bg-rosa font-marcellus text-[20px] font-normal uppercase text-beige hover:bg-rosa hover:opacity-50 sm:m-[10px] sm:text-[23px]"
                        >
                            {t('btnFreeClass')}
                        </Link>
                    </div>

                    <div className="container mx-auto flex flex-col items-center justify-center pt-[70px] sm:my-[100px]">
                        <Image
                            src={item01}
                            alt={'Item Uno'}
                            width={75}
                            height={63}
                            className="mt-[30px] h-[63px] w-[75px] sm:mt-0"
                        />

                        <h4 className="mt-[10px] font-manrope text-[20px] font-medium uppercase tracking-[0.25em] text-gris sm:mt-[20px] sm:text-[27px]">
                            {t('itemOne')}
                        </h4>

                        <div className="my-[40px] flex flex-col gap-10 sm:my-[80px] sm:grid sm:grid-cols-3">
                            <div className="col-span-1">
                                <Image
                                    src={imgClasesOne}
                                    alt={'Clases Uno'}
                                    width={320}
                                    height={320}
                                    className="h-[240px] w-[240px] sm:h-[320] sm:w-[320]"
                                />
                            </div>
                            <div className="col-span-1">
                                <Image
                                    src={imgClasesTwo}
                                    alt={'Clases Uno'}
                                    width={320}
                                    height={320}
                                    className="h-[240px] w-[240px] sm:h-[320] sm:w-[320]"
                                />
                            </div>
                            <div className="col-span-1">
                                <Image
                                    src={imgClasesThree}
                                    alt={'Clases Uno'}
                                    width={320}
                                    height={320}
                                    className="h-[240px] w-[240px] sm:h-[320] sm:w-[320]"
                                />
                            </div>
                        </div>

                        <Image
                            src={item02}
                            alt={'Item Dos'}
                            width={75}
                            height={63}
                            className="mt-[30px] h-[63px] w-[75px] sm:mt-0"
                        />

                        <h4 className="mt-[10px] font-manrope text-[20px] font-medium uppercase tracking-[0.25em] text-gris sm:mt-[20px] sm:text-[27px]">
                            {t('itemTwo')}
                        </h4>

                        <div className="my-[40px] sm:my-[80px] sm:grid sm:w-[700px] sm:grid-cols-2">
                            <div className="my-[20px] flex h-[430px] flex-col items-center justify-center bg-[#f7f7f7] px-[20px] sm:col-span-1 sm:mx-[30px] sm:my-0">
                                <h3 className="font-manrope text-[27px] font-bold uppercase text-azul sm:leading-[30px] sm:tracking-[0.2em]">
                                    {t('promoOne')}
                                </h3>
                                <h2 className="font-marcellus text-[50px] font-normal text-verde">
                                    {t('priceOne')}
                                </h2>
                                <p className="px-[35px] pb-[50px] pt-[30px] text-center font-manrope text-[18px] font-normal leading-[24px] text-gris sm:text-[15px] sm:leading-[20px]">
                                    {t('textOne')}
                                </p>
                                <h5 className="upercase font-manrope font-normal text-[#adadad] sm:pb-[30px] sm:text-[20px] sm:leading-[30px]">
                                    {t('otherPriceOne')}
                                </h5>
                                <Link
                                    href="/join-us"
                                    className="flex h-[53px] w-[186px] items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus text-[20px] font-normal text-blanco hover:opacity-50 sm:text-[23px]"
                                >
                                    {t('textBtn')}
                                </Link>
                            </div>
                            <div className="my-[20px] flex h-[430px] flex-col items-center justify-center bg-[#f7f7f7] px-[20px] sm:col-span-1 sm:mx-[30px] sm:my-0">
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

                        <Image
                            src={item03}
                            alt={'Item Tres'}
                            width={75}
                            height={63}
                            className="mt-[30px] h-[63px] w-[75px] sm:mt-0"
                        />

                        <h4 className="mt-[10px] font-manrope text-[20px] font-medium uppercase tracking-[0.25em] text-gris sm:mt-[20px] sm:text-[27px]">
                            {t('itemThree')}
                        </h4>

                        <div className="mt-[40px] flex flex-col items-center justify-center sm:mt-[80px]">
                            <Image
                                src={imgEnjoy}
                                alt="Enjoy"
                                width={1092}
                                height={545}
                                className="h-[545px] w-[1092px] object-cover sm:h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-marron py-[70px] sm:py-[100px]">
                <div className="container mx-auto px-[30px] sm:px-0">
                    <div className="mb-[30px] flex flex-col items-center justify-center sm:mb-[80px]">
                        <h1 className="font-manrope text-[40px] font-normal leading-[40px] tracking-[0.02em] text-blanco sm:text-[70px] sm:leading-[70px]">
                            FAQs
                        </h1>
                    </div>
                    <FagsComponent />
                </div>
            </section>
        </>
    );
}
