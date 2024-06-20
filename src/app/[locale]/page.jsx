import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-[20px]">{t('title')}</h1>
            </div>
        </>
    );
}
