'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('ContactPage');

    const [isSubmitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                // Replace with your actual API route for SMTP
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            });

            if (res.status === 200) {
                setSubmitted(true);
            } else {
                console.error('Error sending email:', await res.text());
                // Show an error message to the user
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            // Show an error message to the user
        }
    };

    return isSubmitted ? (
        <div className="container mx-auto md:h-[450px]">
            <div className="flex h-[300px] flex-col items-center justify-center md:h-[450px]">
                <h1 className="font-questrial text-negro text-center text-[18px] font-normal md:mt-[150px] md:w-[700px] md:text-[20px]">
                    ¡Gracias por ponerte en contacto con nosotros! Tu mensaje ha sido recibido con
                    éxito. Nos esforzaremos por responder a tu consulta lo antes posible. <br />
                    ¡Ten un gran día!
                </h1>
            </div>
        </div>
    ) : (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col">
                <div className="py-[5px]">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('fullName')}
                        autoComplete="name"
                        required
                        className="w-full bg-[#eae6e1] px-[20px] py-[12px] font-manrope text-[15px] font-normal italic leading-[20px] tracking-[0.05em] text-[#6d6d6d]"
                    />
                </div>

                <div className="py-[5px]">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder={t('email')}
                        autoComplete="email"
                        required
                        className="w-full bg-[#eae6e1] px-[20px] py-[12px] font-manrope text-[15px] font-normal italic leading-[20px] tracking-[0.05em] text-[#6d6d6d]"
                    />
                </div>

                <div className="py-[5px]">
                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        placeholder={t('subject')}
                        required
                        className="w-full bg-[#eae6e1] px-[20px] py-[12px] font-manrope text-[15px] font-normal italic leading-[20px] tracking-[0.05em] text-[#6d6d6d]"
                    />
                </div>

                <div className="py-[5px]">
                    <textarea
                        placeholder={t('message')}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="6"
                        required
                        className="w-full bg-[#eae6e1] px-[20px] py-[12px] font-manrope text-[15px] font-normal italic leading-[20px] tracking-[0.05em] text-[#6d6d6d]"
                    ></textarea>
                </div>

                <div className="flex flex-col items-end py-[5px]">
                    <button
                        type="submit"
                        className="flex h-[54px] w-[183px] items-center justify-center rounded-[26px] border-[2px] border-azul bg-azul text-center font-marcellus font-normal uppercase text-blanco hover:opacity-50 sm:h-[53px] sm:w-[186px] sm:text-[23px]"
                    >
                        {t('btnContact')}
                    </button>
                </div>
            </form>
        </div>
    );
}
