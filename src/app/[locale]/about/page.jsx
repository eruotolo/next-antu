import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    return <h1 className="text-[20px]">{t('title')}</h1>;
}
