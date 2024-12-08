import { useTranslations } from 'next-intl';
import Image from 'next/image';

import StepperWithTooltips from '@/components/StepperWithTooltips/StepperWithTooltips';
import FullWidthCarousel from '@/components/FullWidthCarousel/FullWidthCarousel';
import SliderContent from '@/components/SlidesContent/SliderContent';
import { Link } from '@/i18n/routing';

const starAbout = '/about/estrella_antu.svg';
const triadoAntu = '/about/antu_triada.webp';

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    const slides = SliderContent();

    return (
        <>
            <section className="section-header-about mt-[-80px] sm:h-[100vh]">
                <div className="container mx-auto flex flex-col items-center justify-center sm:h-[100vh]">
                    <h2 className="font-marcellus font-normal text-beige sm:text-[50px] sm:leading-[75px] sm:tracking-[0.02em]">
                        {t('title')}
                    </h2>
                    <h2 className="font-dmdisplay font-normal italic text-beige sm:text-[50px] sm:leading-[75px] sm:tracking-[0.02em]">
                        {t('alterTitle')}
                    </h2>
                </div>
            </section>

            <section className="section-about-home">
                <div className="container mx-auto flex flex-col items-center justify-center sm:h-[800px]">
                    <Image
                        src={starAbout}
                        alt={'Estrella Antu'}
                        width={51}
                        height={51}
                        className="text-rosa"
                    />
                    <h3 className="font-manrope font-bold uppercase text-beige sm:mt-[30px] sm:text-[27px] sm:tracking-[0.25em]">
                        {t('about')}
                    </h3>
                    <div className="sm:mt-[100px]">
                        <StepperWithTooltips />
                    </div>
                </div>
            </section>

            <section className="sm:py-[120px]">
                <div className="container mx-auto">
                    <div className="sm:grid sm:grid-cols-3">
                        <div className="col-span-1 flex flex-col sm:h-[344px] sm:w-[275px] sm:pt-[100px]">
                            <div className="flex flex-row">
                                <h3 className="font-marcellus font-normal uppercase text-rosa sm:mr-[10px] sm:text-[27px] sm:tracking-[0.1em]">
                                    {t('connection')}
                                </h3>
                                <Image src={starAbout} alt={'Star About'} width={21} height={21} />
                            </div>
                            <p className="font-manrope font-normal text-gris sm:mt-[10px] sm:text-[15px] sm:leading-[22px]">
                                {t.rich('connectionText', {
                                    bold: (chunks) => <strong>{chunks}</strong>,
                                })}
                            </p>
                        </div>

                        <div className="col-span-1 flex flex-col items-center">
                            <Image src={triadoAntu} alt="Triada Antu" width={402} height={344} />

                            <div className="sm:mt-[40px] sm:w-[300px]">
                                <div className="flex flex-row sm:mt-[40px]">
                                    <h3 className="font-marcellus font-normal uppercase text-rosa sm:mr-[10px] sm:text-[27px] sm:tracking-[0.1em]">
                                        {t('healing')}
                                    </h3>
                                    <Image
                                        src={starAbout}
                                        alt={'Star About'}
                                        width={21}
                                        height={21}
                                    />
                                </div>
                                <p className="font-manrope font-normal text-gris sm:mt-[10px] sm:text-[15px] sm:leading-[22px]">
                                    {t.rich('expansionText', {
                                        bold: (chunks) => <strong>{chunks}</strong>,
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col sm:h-[344px] sm:pl-[100px] sm:pt-[100px]">
                            <div className="flex flex-row">
                                <h3 className="font-marcellus font-normal uppercase text-rosa sm:mr-[10px] sm:text-[27px] sm:tracking-[0.1em]">
                                    {t('expansion')}
                                </h3>
                                <Image src={starAbout} alt={'Star About'} width={21} height={21} />
                            </div>
                            <p className="font-manrope font-normal text-gris sm:mt-[10px] sm:text-[15px] sm:leading-[22px]">
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
                <div className="container mx-auto flex flex-col items-center justify-center sm:h-[400px]">
                    <h3 className="font-marcellus font-normal uppercase text-beige sm:mb-[30px] sm:text-[27px] sm:tracking-[0.1em]">
                        {t('experienceTitle')}
                    </h3>
                    <Link
                        href="/ondemand"
                        className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-rosa font-marcellus font-normal uppercase text-beige hover:border-[#3970a4] hover:bg-[#3970a4] hover:opacity-50 sm:text-[23px]"
                    >
                        {t('suscribe')}
                    </Link>
                </div>
            </section>
        </>
    );
}
