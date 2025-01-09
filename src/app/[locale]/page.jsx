import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

import VideoDemoModal from '@/components/Modal/VideoDemoModal';
import HoverImage from '@/components/HoverImage/HoverImage';

const byAntu = '/by_antu.svg';
const aboutHome = '/home-about.webp';
const logoAntu = '/antu_logo.svg';
const computer = '/computer.svg';
const controlFront = '/home/control.png';
const controlBack = '/home/control_2.png';
const strenghtFront = '/home/strength.png';
const strenghtBack = '/home/strenght_2.png';
const discoverFront = '/home/discover.png';
const discoverBack = '/home/discover_2.png';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
            <section className="section-header-home mt-[-80px] sm:h-[100vh]">
                <div className="container mx-auto flex flex-col justify-center sm:h-[calc(100vh-80px)]">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <h1 className="font-marcellus text-blanco sm:text-[70px] sm:leading-[75px] sm:tracking-[0.02em]">
                                Where
                                <br />
                                the BODY
                                <br />
                                meets <br />
                                The SOUL
                            </h1>
                        </div>
                        <div className="col-span-1 flex items-center justify-center sm:h-[300px]">
                            <Image
                                src={byAntu}
                                alt={'by antu'}
                                width={363}
                                height={86}
                                priority={true}
                                className="h-[86px] w-[363px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-about-home">
                <div className="container mx-auto flex flex-col justify-center sm:h-[80vh]">
                    <div className="grid grid-cols-11">
                        <div className="flex flex-col justify-center sm:col-span-3 sm:h-[440px]">
                            <Image
                                src={logoAntu}
                                alt="Logo Antu"
                                width={230}
                                height={69}
                                className="h-[69px] w-[230px]"
                            />
                            <h5 className="font-dmdisplay font-normal italic text-rosa sm:pb-[35px] sm:pt-[20px] sm:text-[23px]">
                                {t('textOneAbout')}
                            </h5>
                            <p className="font-manrope text-beige sm:text-[15px] sm:leading-[20px]">
                                {t('textTwoAbout')}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center sm:col-span-5">
                            <Image
                                src={aboutHome}
                                alt={'about home'}
                                width={400}
                                height={400}
                                className="sm:mb-[40px] sm:h-[440px] sm:w-[440px]"
                            />
                            <Link
                                href="/about"
                                className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-rosa font-marcellus font-normal uppercase text-beige hover:bg-rosa sm:text-[23px]"
                            >
                                About
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center sm:col-span-3 sm:h-[440px]">
                            <p className="text-right font-manrope text-beige sm:pb-[35px] sm:text-[15px] sm:leading-[20px]">
                                {t('textThreeAbout')}
                            </p>
                            <p className="text-right font-manrope font-normal text-beige sm:pl-[25px] sm:text-[15px] sm:leading-[20px]">
                                {t('textFourAbout')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-ondemand-home">
                <div className="container mx-auto flex flex-col items-center justify-center sm:h-[90vh]">
                    <Image src={computer} alt={'Computadora'} width={134} height={102} />
                    <h4 className="font-marcellus font-normal uppercase text-beige sm:py-[30px] sm:text-[27px] sm:tracking-[0.1em]">
                        {t('tituloOneOnDemand')}
                    </h4>
                    <h1 className="font-marcellus font-normal text-beige sm:mb-[50px] sm:text-[70px] sm:leading-[75px] sm:tracking-[0.02em]">
                        {t('tituloTwoOnDemand')}
                    </h1>
                    <p className="text-center font-manrope font-normal text-beige sm:px-[280px] sm:text-[15px] sm:leading-[22px]">
                        {t.rich('textOnDemand', {
                            bold: (chunks) => <strong>{chunks}</strong>,
                        })}
                    </p>
                    <div className="flex items-center justify-center sm:mt-[70px]">
                        <VideoDemoModal />
                        <Link
                            href="/ondemand"
                            className="flex h-[54px] w-[224px] items-center justify-center rounded-[26px] border-[2px] border-rosa bg-rosa font-marcellus font-normal uppercase text-beige hover:bg-rosa hover:opacity-50 sm:m-[10px] sm:text-[23px]"
                        >
                            {t('learnMore')}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="sm:py-[150px]">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-10">
                        <div className="col-span-1 sm:pt-[70px]">
                            <HoverImage
                                defaultSrc={controlFront}
                                hoverSrc={controlBack}
                                alt={'control'}
                                width={325}
                                height={433}
                            />
                        </div>
                        <div className="col-span-1">
                            <HoverImage
                                defaultSrc={strenghtFront}
                                hoverSrc={strenghtBack}
                                alt={'control'}
                                width={325}
                                height={433}
                            />
                        </div>
                        <div className="col-span-1 sm:pt-[70px]">
                            <HoverImage
                                defaultSrc={discoverFront}
                                hoverSrc={discoverBack}
                                alt={'control'}
                                width={325}
                                height={433}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-contact-home">
                <div className="container mx-auto flex flex-col items-center justify-center sm:h-[400px]">
                    <h3 className="font-marcellus font-normal uppercase text-beige sm:mb-[30px] sm:text-[27px] sm:tracking-[0.1em]">
                        {t('knowBetter')}
                    </h3>
                    <Link
                        href="/contact"
                        className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-rosa font-marcellus font-normal uppercase text-beige hover:border-[#3970a4] hover:bg-[#3970a4] hover:opacity-50 sm:text-[23px]"
                    >
                        {t('btnContact')}
                    </Link>
                </div>
            </section>
        </>
    );
}
