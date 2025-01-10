import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Instagram } from 'lucide-react';

const logoAntu = '/antu_logo.svg';
const signatureFooter = '/antu_signature_footer.svg';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <>
            <footer className="section-footer">
                <div className="container mx-auto flex flex-col justify-center py-[50px] sm:h-[300px] sm:py-0">
                    <div className="sm:grid sm:grid-cols-3">
                        <div className="flex flex-col items-center sm:col-span-1 sm:h-[152px] sm:flex-row">
                            <Image
                                src={logoAntu}
                                alt="Logo Antu"
                                width={230}
                                height={69}
                                className="w-[200px] sm:h-[69px] sm:w-[230px]"
                            />
                        </div>

                        <div className="flex h-[200px] items-center justify-center sm:col-span-1 sm:h-[152px]">
                            <Image
                                src={signatureFooter}
                                alt={'Signature Antu'}
                                width={317}
                                height={152}
                                className="m:w-[317px] w-[280px] sm:h-[152px]"
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center sm:col-span-1 sm:h-[152px] sm:items-end">
                            <a href="https://www.instagram.com/antumovement/" target={'_blank'}>
                                <Instagram
                                    className="my-[10px] text-beige hover:text-rosa sm:my-[6px]"
                                    size="24"
                                />
                            </a>
                            <Link
                                href="/join-us"
                                className="my-[6px] font-manrope text-[16px] font-normal text-beige underline hover:text-rosa"
                            >
                                {t('suscribe')}
                            </Link>
                            <Link
                                href="/freedemo"
                                className="my-[6px] font-manrope text-[16px] font-normal text-beige underline hover:text-rosa"
                            >
                                {t('freeClass')}
                            </Link>
                            <Link
                                href="/"
                                className="my-[6px] hidden font-manrope text-[16px] font-normal text-beige underline hover:text-rosa"
                            >
                                {t('condicions')}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
