import { useTranslations } from 'next-intl';

export default function SliderContent() {
    const t = useTranslations('AboutPage');

    return [
        <div key="1" className="slider-about-One">
            <div className="container mx-auto flex h-[700px] flex-col items-center justify-center px-[30px] sm:h-[820px] sm:items-start sm:justify-normal sm:px-0 sm:pt-[240px]">
                <h2 className="font-manrope text-[27px] font-bold tracking-[0.25em] text-beige">
                    {t('sliderTitle')}
                </h2>
                <div className="mt-[30px] sm:w-[30%]">
                    <h3 className="text-center font-dmdisplay text-[20px] font-normal italic text-beige sm:text-left sm:text-[23px]">
                        {t('sliderTextOne')}
                    </h3>
                </div>
            </div>
        </div>,
        <div key="2" className="slider-about-Two">
            <div className="container mx-auto flex h-[700px] flex-col items-center justify-center px-[30px] sm:h-[820px] sm:items-start sm:justify-normal sm:px-0 sm:pt-[240px]">
                <h2 className="font-manrope text-[27px] font-bold tracking-[0.25em] text-beige">
                    {t('sliderTitle')}
                </h2>
                <div className="mt-[30px] sm:w-[30%]">
                    <h3 className="text-center font-dmdisplay text-[20px] font-normal italic text-beige sm:text-left sm:text-[23px]">
                        {t('sliderTextTwo')}
                    </h3>
                    <p className="mt-[30px] text-left font-manrope text-[18px] font-normal leading-[26px] text-beige sm:text-[15px] sm:leading-[20px]">
                        {t('sliderTextThree')}
                    </p>
                </div>
            </div>
        </div>,
        <div key="3" className="slider-about-Three">
            <div className="container mx-auto flex h-[700px] flex-col items-center justify-center px-[30px] sm:h-[820px] sm:items-start sm:justify-normal sm:px-0 sm:pt-[240px]">
                <h2 className="font-manrope font-bold text-beige sm:text-[27px] sm:tracking-[0.25em]">
                    {t('sliderTitle')}
                </h2>
                <div className="mt-[30px] sm:w-[30%]">
                    <h3 className="text-center font-dmdisplay text-[20px] font-normal italic text-beige sm:text-left sm:text-[23px]">
                        {t('sliderTextFour')}
                    </h3>
                </div>
            </div>
        </div>,
    ];
}
