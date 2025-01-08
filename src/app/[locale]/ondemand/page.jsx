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
            <section className="section-header-ondemand mt-[-80px] sm:h-[100vh]">
                <div className="container mx-auto flex sm:h-[100vh] sm:flex-row sm:items-center sm:justify-between">
                    <div className="sm:w-[50%]">
                        <h1 className="font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandOne')}
                        </h1>
                        <h1 className="font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandTwo')}
                        </h1>
                    </div>
                    <div className="sm:w-[50%] sm:pl-[10%]">
                        <h1 className="text-right font-dmdisplay font-normal italic text-blanco sm:text-[50px] sm:leading-[58px] sm:tracking-[0.02em]">
                            {t('titleDemandThree')}
                        </h1>
                    </div>
                </div>
            </section>

            <section className="sm:pt-[100px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="font-marcellus font-normal text-azul sm:text-[70px] sm:leading-[75px] sm:tracking-[0.02em]">
                            {t('workout')}
                        </h1>
                        <div className="sm:mt-[40px] sm:w-[50%]">
                            <p className="text-center font-manrope font-normal text-gris sm:text-[15px] sm:leading-[20px]">
                                {t('workoutText')}
                            </p>
                        </div>
                    </div>

                    <div className="section-clases-ondemand flex items-center justify-center sm:mt-[100px] sm:h-[440px] sm:flex-col">
                        <h3 className="font-marcellus font-normal uppercase text-beige sm:mb-[20px] sm:text-[27px] sm:tracking-[0.1em]">
                            {t('freeClass')}
                        </h3>
                        <Link
                            href="/freedemo"
                            className="flex h-[54px] w-[250px] items-center justify-center rounded-[26px] border-[2px] border-rosa bg-rosa font-marcellus font-normal uppercase text-beige hover:bg-rosa hover:opacity-50 sm:m-[10px] sm:text-[23px]"
                        >
                            {t('btnFreeClass')}
                        </Link>
                    </div>

                    <div className="container mx-auto flex items-center justify-center sm:my-[100px] sm:flex-col">
                        <Image src={item01} alt={'Item Uno'} width={75} height={63} />
                        <h4 className="font-manrope font-medium uppercase text-gris sm:mt-[20px] sm:text-[27px] sm:tracking-[0.25em]">
                            {t('itemOne')}
                        </h4>

                        <div className="gap-10 sm:my-[80px] sm:grid sm:grid-cols-3">
                            <div className="col-span-1">
                                <Image
                                    src={imgClasesOne}
                                    alt={'Clases Uno'}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <div className="col-span-1">
                                <Image
                                    src={imgClasesTwo}
                                    alt={'Clases Uno'}
                                    width={320}
                                    height={320}
                                />
                            </div>
                            <div className="col-span-1">
                                <Image
                                    src={imgClasesThree}
                                    alt={'Clases Uno'}
                                    width={320}
                                    height={320}
                                />
                            </div>
                        </div>

                        <Image src={item02} alt={'Item Dos'} width={75} height={63} />
                        <h4 className="font-manrope font-medium uppercase text-gris sm:mt-[20px] sm:text-[27px] sm:tracking-[0.25em]">
                            {t('itemTwo')}
                        </h4>

                        <div className="sm:my-[80px] sm:grid sm:w-[700px] sm:grid-cols-2">
                            <div className="flex items-center bg-[#f7f7f7] sm:col-span-1 sm:mr-[25px] sm:h-[430px] sm:flex-col sm:justify-center">
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
                            <div className="flex items-center bg-[#f7f7f7] sm:col-span-1 sm:ml-[25px] sm:h-[430px] sm:flex-col sm:justify-center">
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

                        <Image src={item03} alt={'Item Tres'} width={75} height={63} />
                        <h4 className="font-manrope font-medium uppercase text-gris sm:mt-[20px] sm:text-[27px] sm:tracking-[0.25em]">
                            {t('itemThree')}
                        </h4>
                        <div className="flex flex-col items-center justify-center sm:mt-[80px]">
                            <Image src={imgEnjoy} alt="Enjoy" width={1092} height={545} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-marron sm:py-[100px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center sm:mb-[80px]">
                        <h1 className="font-manrope font-normal text-blanco sm:text-[70px] sm:leading-[70px] sm:tracking-[0.02em]">
                            FAQs
                        </h1>
                    </div>
                    <FagsComponent />
                </div>
            </section>
        </>
    );
}
