'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function FagsComponent() {
    const t = useTranslations('OnDemandPage');

    const faqs = [
        {
            index: 'item-1',
            title: t('faqTitleOne'),
            text: t('faqTextOne'),
        },
        {
            index: 'item-2',
            title: t('faqTitleTwo'),
            text: t('faqTextTwo'),
        },
        {
            index: 'item-3',
            title: t('faqTitleThree'),
            text: t.rich('faqTextThree', {
                guidelines: (children) => <Link href="/prueba">{children}</Link>,
            }),
        },
        {
            index: 'item-4',
            title: t('faqTitleFour'),
            text: t('faqTextFour'),
        },
        {
            index: 'item-5',
            title: t('faqTitleFive'),
            text: t('faqTextFive'),
        },
        {
            index: 'item-6',
            title: t('faqTitleSix'),
            text: t('faqTextSix'),
        },
    ];

    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={faq.index}
                        value={faq.index}
                        className={index === 0 ? 'border-t' : ''}
                    >
                        <AccordionTrigger className="text-left font-manrope text-[20px] font-bold leading-[26px] text-blanco sm:text-[23px] sm:leading-[30px]">
                            {faq.title}
                        </AccordionTrigger>
                        <AccordionContent className="font-manrope text-[18px] font-normal leading-[26px] text-blanco sm:text-[15px] sm:leading-[20px]">
                            {faq.text}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
