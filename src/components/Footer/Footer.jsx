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
                <div className="container mx-auto flex flex-col justify-center sm:h-[300px]">
                    <div className="sm:grid sm:grid-cols-3">
                        <div className="flex items-center sm:col-span-1 sm:h-[152px]">
                            <Image src={logoAntu} alt="Logo Antu" width={230} height={69} />
                        </div>
                        <div className="flex items-center justify-center sm:col-span-1 sm:h-[152px]">
                            <Image
                                src={signatureFooter}
                                alt={'Signature Antu'}
                                width={317}
                                height={152}
                            />
                        </div>
                        <div className="flex flex-col items-end justify-center sm:col-span-1 sm:h-[152px]">
                            <a href="https://www.instagram.com/antumovement/" target={'_blank'}>
                                <Instagram className="text-beige hover:text-rosa" size="24" />
                            </a>
                            <Link
                                href="/join-us"
                                className="font-manrope font-normal text-beige underline hover:text-rosa sm:py-[6px] sm:text-[16px]"
                            >
                                {t('suscribe')}
                            </Link>
                            <Link
                                href="/"
                                className="font-manrope font-normal text-beige underline hover:text-rosa sm:py-[6px] sm:text-[16px]"
                            >
                                {t('freeClass')}
                            </Link>
                            <Link
                                href="/"
                                className="font-manrope font-normal text-beige underline hover:text-rosa sm:py-[6px] sm:text-[16px]"
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
