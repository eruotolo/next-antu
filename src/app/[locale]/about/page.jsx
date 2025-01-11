import { useTranslations } from 'next-intl';
import Image from 'next/image';

import StepperWithTooltips from '@/components/StepperWithTooltips/StepperWithTooltips';
import FullWidthCarousel from '@/components/FullWidthCarousel/FullWidthCarousel';
import SliderContent from '@/components/SlidesContent/SliderContent';
import { Link } from '@/i18n/routing';

const starAbout = '/about/estrella_antu.svg';
const triadoAntu = '/about/triada_antu.svg';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    const slides = SliderContent();

    return (
        <>
            <section className="section-header-about mt-[-80px] h-[100vh]">
                <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center">
                    <h2 className="text-center font-marcellus text-[40px] font-normal leading-[55px] text-beige sm:text-[50px] sm:leading-[75px] sm:tracking-[0.02em]">
                        {t('title')}
                    </h2>
                    <h2 className="text-center font-dmdisplay text-[40px] font-normal italic leading-[55px] text-beige sm:text-[50px] sm:leading-[75px] sm:tracking-[0.02em]">
                        {t('alterTitle')}
                    </h2>
                </div>
            </section>

            <section className="section-about-home">
                <div className="container mx-auto flex flex-col items-center justify-center py-[70px] sm:h-[800px] sm:py-0">
                    <Image
                        src={starAbout}
                        alt={'Estrella Antu'}
                        width={51}
                        height={51}
                        className="h-[51px] w-[51px] text-rosa"
                    />
                    <h3 className="mt-[30px] font-manrope text-[27px] font-bold uppercase tracking-[0.25em] text-beige">
                        {t('about')}
                    </h3>
                    <div className="hidden sm:mt-[100px] sm:flex">
                        <StepperWithTooltips />
                    </div>
                    <div className="mt-[20px] flex flex-col px-[30px] sm:hidden">
                        <div className="my-[10px] flex flex-col items-center bg-beige px-[30px] pb-[40px] pt-[30px]">
                            <h4 className="mb-[10px] font-marcellus text-[27px] text-rosa">
                                {t('tooltipTitleOne')}
                            </h4>
                            <p className="text-center font-manrope text-[18px] leading-[24px] text-gris">
                                {t('tooltipTextOne')}
                            </p>
                        </div>
                        <div className="my-[10px] flex flex-col items-center bg-beige px-[30px] pb-[40px] pt-[30px]">
                            <h4 className="mb-[10px] font-marcellus text-[27px] text-rosa">
                                {t('tooltipTitleTwo')}
                            </h4>
                            <p className="text-center font-manrope text-[18px] leading-[24px] text-gris">
                                {t('tooltipTextTwo')}
                            </p>
                        </div>
                        <div className="my-[10px] flex flex-col items-center bg-beige px-[30px] pb-[40px] pt-[30px]">
                            <h4 className="mb-[10px] font-marcellus text-[27px] text-rosa">
                                {t('tooltipTitleThree')}
                            </h4>
                            <p className="text-center font-manrope text-[18px] leading-[24px] text-gris">
                                {t('tooltipTextThree')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[70px] sm:py-[120px]">
                <div className="container mx-auto px-[30px] sm:px-0">
                    <div className="sm:grid sm:grid-cols-3">
                        <div className="mb-[50px] sm:hidden">
                            <Image src={triadoAntu} alt="Triada Antu" width={402} height={344} />
                        </div>

                        <div className="col-span-1 my-[30px] flex flex-col sm:order-1 sm:my-0 sm:h-[344px] sm:w-[275px] sm:pt-[100px]">
                            <div className="flex flex-row">
                                <h3 className="mr-[10px] font-marcellus text-[27px] font-normal uppercase tracking-[0.1em] text-rosa">
                                    {t('connection')}
                                </h3>
                                <Image
                                    src={starAbout}
                                    alt={'Star About'}
                                    width={21}
                                    height={21}
                                    className="mt-[8px] h-[21px] w-[21px]"
                                />
                            </div>
                            <p className="mt-[10px] font-manrope text-[18px] font-normal leading-[28px] text-gris sm:text-[15px] sm:leading-[22px]">
                                {t.rich('connectionText', {
                                    bold: (chunks) => <strong>{chunks}</strong>,
                                })}
                            </p>
                        </div>

                        <div className="col-span-1 my-[30px] flex flex-col items-center sm:order-2 sm:my-0">
                            <Image
                                src={triadoAntu}
                                alt="Triada Antu"
                                width={402}
                                height={344}
                                className="hidden sm:flex"
                            />

                            <div className="sm:mt-[40px] sm:w-[300px]">
                                <div className="flex flex-row sm:mt-[40px]">
                                    <h3 className="mr-[10px] font-marcellus text-[27px] font-normal uppercase tracking-[0.1em] text-rosa">
                                        {t('healing')}
                                    </h3>
                                    <Image
                                        src={starAbout}
                                        alt={'Star About'}
                                        width={21}
                                        height={21}
                                        className="mt-[8px] h-[21px] w-[21px]"
                                    />
                                </div>
                                <p className="mt-[10px] font-manrope text-[18px] font-normal leading-[28px] text-gris sm:text-[15px] sm:leading-[22px]">
                                    {t.rich('expansionText', {
                                        bold: (chunks) => <strong>{chunks}</strong>,
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="col-span-1 mt-[30px] flex flex-col sm:order-3 sm:my-0 sm:h-[344px] sm:pl-[100px] sm:pt-[100px]">
                            <div className="flex flex-row">
                                <h3 className="mr-[10px] font-marcellus text-[27px] font-normal uppercase tracking-[0.1em] text-rosa">
                                    {t('expansion')}
                                </h3>
                                <Image
                                    src={starAbout}
                                    alt={'Star About'}
                                    width={21}
                                    height={21}
                                    className="mt-[8px] h-[21px] w-[21px]"
                                />
                            </div>
                            <p className="mt-[10px] font-manrope text-[18px] font-normal leading-[28px] text-gris sm:text-[15px] sm:leading-[22px]">
                                {t.rich('healingText', {
                                    bold: (chunks) => <strong>{chunks}</strong>,
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-between">
                <FullWidthCarousel slides={slides} />
            </section>

            <section className="section-suscribe-about">
                <div className="container mx-auto flex h-[400px] flex-col items-center justify-center sm:h-[550px]">
                    <h3 className="mb-[30px] text-center font-marcellus text-[20px] font-normal uppercase text-beige sm:text-[27px] sm:tracking-[0.1em]">
                        {t('experienceTitle')}
                    </h3>
                    <Link
                        href="/join-us"
                        className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-rosa font-marcellus text-[20px] font-normal uppercase text-beige hover:border-[#3970a4] hover:bg-[#3970a4] hover:opacity-50 sm:text-[23px]"
                    >
                        {t('suscribe')}
                    </Link>
                </div>
            </section>
        </>
    );
}
