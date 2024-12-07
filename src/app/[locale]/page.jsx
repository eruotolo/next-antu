import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import VideoDemoModal from '@/components/Modal/VideoDemoModal';

const byAntu = '/by_antu.svg';
const aboutHome = '/home-about.webp';
const logoAntu = '/logo.svg';
const computer = '/computer.svg';

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
                                height={860}
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-about-home">
                <div class="container mx-auto flex flex-col justify-center sm:h-[90vh]">
                    <div class="grid grid-cols-11">
                        <div class="flex flex-col justify-center sm:col-span-3 sm:h-[440px]">
                            <Image src={logoAntu} alt="Logo Antu" width={230} height={69} />
                            <h5 className="font-dmdisplay font-normal italic text-rosa sm:pb-[35px] sm:pt-[20px] sm:text-[23px]">
                                {t('textOneAbout')}
                            </h5>
                            <p className="font-manrope text-beige sm:text-[15px] sm:leading-[20px]">
                                {t('textTwoAbout')}
                            </p>
                        </div>
                        <div class="flex flex-col items-center justify-center sm:col-span-5">
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
                        <div class="flex flex-col justify-center sm:col-span-3 sm:h-[440px]">
                            <p className="text-right font-manrope text-beige sm:pb-[35px] sm:text-[15px] sm:leading-[20px]">
                                {t('textTreeAbout')}
                            </p>
                            <p className="text-right font-manrope font-normal text-beige sm:text-[15px] sm:leading-[20px]">
                                {t('textFourAbout')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-ondemand-home">
                <div class="container mx-auto flex flex-col items-center justify-center sm:h-[90vh]">
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
                            className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-rosa bg-rosa font-marcellus font-normal uppercase text-beige hover:bg-rosa hover:opacity-50 sm:m-[10px] sm:text-[23px]"
                        >
                            {t('learnMore')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
