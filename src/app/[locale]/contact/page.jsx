import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Instagram } from 'lucide-react';

const logoContact = '/contact/logo_icono_antu.svg';
const starContact = '/contact/star_antu.webp';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    return (
        <>
            <section className="section-header-contact mt-[-80px] sm:h-[100vh]">
                <div className="container mx-auto flex flex-col items-center justify-center sm:h-[100vh]">
                    <h2 className="text-center font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[55px] sm:tracking-[0.02em]">
                        {t('titleContact')}
                    </h2>
                    <h2 className="text-center font-marcellus font-normal text-blanco sm:text-[50px] sm:leading-[55px] sm:tracking-[0.02em]">
                        {t('titleContactTwo')}
                    </h2>
                    <h4 className="text-center font-manrope font-bold text-blanco sm:mb-[30px] sm:mt-[40px] sm:text-[27px] sm:tracking-[0.25em]">
                        {t('followContact')}
                    </h4>
                    <a href="https://www.instagram.com/antumovement/" target="_blank">
                        <Instagram className="text-beige hover:text-rosa" size="38" />
                    </a>
                </div>
            </section>

            <div className="container mx-auto flex items-center justify-center sm:-mt-[25px]">
                <Image src={starContact} alt="Estrella Anty" width={51} height={51} />
            </div>

            <section className="sm:py-[100px]">
                <div className="container mx-auto">
                    <div className="sm:grid sm:grid-cols-3">
                        <div className="sm:col-span-1">
                            <Image src={logoContact} alt="Logo Contacto" width={368} height={368} />
                        </div>
                        <div className="sm:col-span-2 sm:pl-[140px] sm:pt-[30px]">
                            <h5 className="font-manrope font-medium text-marron sm:mb-[20px] sm:text-[27px] sm:tracking-[0.25em]">
                                {t('titleForm')}
                            </h5>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
