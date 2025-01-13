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
            <section className="section-header-contact mt-[-80px] h-[100vh]">
                <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center">
                    <h2 className="text-center font-marcellus text-[40px] font-normal leading-[48px] tracking-[0.02em] text-blanco sm:text-[50px] sm:leading-[55px]">
                        {t('titleContact')}
                    </h2>
                    <h2 className="text-center font-marcellus text-[40px] font-normal leading-[48px] tracking-[0.02em] text-blanco sm:text-[50px] sm:leading-[55px]">
                        {t('titleContactTwo')}
                    </h2>
                    <h4 className="mb-[20px] mt-[30px] text-center font-manrope text-[20px] font-bold tracking-[0.25em] text-blanco sm:mb-[30px] sm:mt-[40px] sm:text-[27px]">
                        {t('followContact')}
                    </h4>
                    <a href="https://www.instagram.com/antumovement/" target="_blank">
                        <Instagram className="w-[42px] text-beige hover:text-rosa" size="38" />
                    </a>
                </div>
            </section>

            <div className="container mx-auto -mt-[25px] flex items-center justify-center">
                <Image src={starContact} alt="Estrella Anty" width={51} height={51} />
            </div>

            <section className="sm:py-[100px]">
                <div className="container mx-auto px-[30px] sm:px-0">
                    <div className="sm:grid sm:grid-cols-3">
                        <div className="flex justify-center sm:col-span-1">
                            <Image
                                src={logoContact}
                                alt="Logo Contacto"
                                width={368}
                                height={368}
                                className="h-[280px] w-[280px] sm:h-[368px] sm:w-[368px]"
                            />
                        </div>
                        <div className="pb-[30px] pt-[30px] sm:col-span-2 sm:pl-[140px]">
                            <h5 className="mb-[20px] font-manrope text-[20px] font-medium tracking-[0.25em] text-marron sm:text-[27px]">
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
